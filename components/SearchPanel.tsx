
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Search,
  Loader2,
  ShieldCheck,
  Cpu,
  Terminal,
  ArrowRight,
  X,
  Sparkles,
  CheckCircle2,
  Clock,
  Zap,
} from "lucide-react";

import ProfileCard from "./ProfileCard";
import type { ProfileData } from "../types";
import { MOCK_PROFILE } from "../constants";

type SearchMode = "phone" | "email" | "id" | "any";

interface ScanStep {
  threshold: number;
  label: string;
  log: string;
}

const SCAN_STEPS: ScanStep[] = [
  { threshold: 0, label: "Инициализация", log: "SESSION: инициализация узлов" },
  { threshold: 20, label: "Метаданные", log: "METADATA: извлечение данных — OK" },
  { threshold: 40, label: "Источники", log: "SOURCES: сканирование баз — ACTIVE" },
  { threshold: 60, label: "Корреляция", log: "CORRELATION: связывание профилей" },
  { threshold: 80, label: "Верификация", log: "VERIFY: проверка данных — OK" },
];

const EXAMPLES = [
  { label: "+7 999 123-45-67", value: "+79991234567", mode: "phone" as const },
  { label: "user@mail.ru", value: "user@mail.ru", mode: "email" as const },
  { label: "id123456789", value: "id123456789", mode: "id" as const },
];

const FEATURES = [
  { 
    icon: ShieldCheck, 
    title: "Приватность", 
    desc: "Данные не сохраняются" 
  },
  { 
    icon: Terminal, 
    title: "API доступ", 
    desc: "Интеграция для разработчиков" 
  },
  { 
    icon: Cpu, 
    title: "Realtime", 
    desc: "Поиск в реальном времени" 
  },
];

const cn = (...classes: (string | boolean | undefined)[]) => 
  classes.filter(Boolean).join(" ");

const generateScanId = () => 
  `SCAN-${Date.now().toString(36).toUpperCase()}`;

const detectMode = (input: string): SearchMode => {
  const trimmed = input.trim().toLowerCase();
  if (!trimmed) return "any";
  if (trimmed.includes("@")) return "email";
  if (/^[+\d][\d\s()-]{7,}$/.test(trimmed)) return "phone";
  if (/^id\d+$/.test(trimmed) || trimmed.includes("vk.com")) return "id";
  return "any";
};

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 tracking-wide">
    {children}
  </div>
);

const FeatureCard: React.FC<{ 
  icon: React.ElementType; 
  title: string; 
  desc: string 
}> = ({ icon: Icon, title, desc }) => (
  <div className="group p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300">
    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
      <Icon size={18} />
    </div>
    <h4 className="mt-4 text-sm font-semibold text-white">{title}</h4>
    <p className="mt-1 text-xs text-gray-500">{desc}</p>
  </div>
);

const StepIndicator: React.FC<{ 
  label: string; 
  done: boolean;
  active: boolean;
}> = ({ label, done, active }) => (
  <div className={cn(
    "flex items-center gap-2 px-3 py-2 rounded-xl border transition-all",
    done && "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    active && !done && "bg-purple-500/10 border-purple-500/30 text-purple-400",
    !done && !active && "bg-white/5 border-white/10 text-gray-500"
  )}>
    {done ? (
      <CheckCircle2 size={14} />
    ) : active ? (
      <Loader2 size={14} className="animate-spin" />
    ) : (
      <div className="w-3.5 h-3.5 rounded-full border border-current opacity-40" />
    )}
    <span className="text-xs font-medium">{label}</span>
  </div>
);

const SearchPanel: React.FC = () => {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<SearchMode>("any");
  const [isScanning, setIsScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scanId, setScanId] = useState<string | null>(null);
  const [logs, setLogs] = useState<string[]>([]);
  const [result, setResult] = useState<ProfileData | null>(null);
  const [history, setHistory] = useState<string[]>([]);

  const scanRef = useRef<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const canSearch = useMemo(() => 
    query.trim().length > 0 && !isScanning, 
    [query, isScanning]
  );

  useEffect(() => {
    const detected = detectMode(query);
    setMode(detected);
  }, [query]);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const stopScan = useCallback(() => {
    scanRef.current += 1;
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsScanning(false);
  }, []);

  const startScan = useCallback((searchQuery: string) => {
    const q = searchQuery.trim();
    if (!q) return;

    stopScan();

    const currentScan = ++scanRef.current;
    const id = generateScanId();

    setIsScanning(true);
    setResult(null);
    setProgress(0);
    setScanId(id);
    setLogs([`INIT: сессия ${id}`, `INPUT: "${q}" [${mode.toUpperCase()}]`]);

    setHistory(prev => [q, ...prev.filter(x => x !== q)].slice(0, 5));

    let p = 0;

    intervalRef.current = setInterval(() => {
      if (scanRef.current !== currentScan) return;

      const increment = p < 60 ? 6 + Math.random() * 8 : 3 + Math.random() * 4;
      p = Math.min(100, p + increment);
      setProgress(p);

      setLogs(prev => {
        const newLogs = [...prev];
        for (const step of SCAN_STEPS) {
          if (p >= step.threshold && !newLogs.includes(step.log)) {
            newLogs.push(step.log);
          }
        }
        return newLogs.slice(-6);
      });

      if (p >= 100) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        
        setTimeout(() => {
          if (scanRef.current !== currentScan) return;
          setResult(MOCK_PROFILE as unknown as ProfileData);
          setIsScanning(false);
        }, 400);
      }
    }, 150);
  }, [mode, stopScan]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startScan(query);
  };

  const clearQuery = () => {
    setQuery("");
    setResult(null);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <header className="text-center mb-8">
        <Badge>
          <Sparkles size={12} className="text-purple-400" />
          OSINT Intelligence
        </Badge>
        <h1 className="mt-5 text-4xl md:text-5xl font-bold text-white">
          Поиск <span className="text-purple-400">информации</span>
        </h1>
        <p className="mt-3 text-gray-500 max-w-md mx-auto">
          Анализ цифровых следов по номеру телефона, email или социальным сетям
        </p>
      </header>

      <form onSubmit={handleSubmit} className="relative">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <Search 
                size={18} 
                className={cn(
                  "absolute left-4 top-1/2 -translate-y-1/2 transition-colors",
                  isScanning ? "text-purple-400" : "text-gray-500"
                )} 
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Телефон, email или ID..."
                disabled={isScanning}
                className="w-full h-12 pl-11 pr-10 rounded-xl bg-black/40 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 disabled:opacity-60 transition-colors"
              />
              {query && !isScanning && (
                <button
                  type="button"
                  onClick={clearQuery}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            <button
              type="submit"
              disabled={!canSearch}
              className="h-12 px-6 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
            >
              {isScanning ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  <span className="hidden sm:inline">Найти</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>
          <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {EXAMPLES.map((ex) => (
                <button
                  key={ex.value}
                  type="button"
                  onClick={() => setQuery(ex.value)}
                  disabled={isScanning}
                  className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-400 hover:text-white font-mono transition-colors disabled:opacity-40"
                >
                  {ex.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Zap size={12} className="text-purple-400" />
              <span className="font-mono">{mode.toUpperCase()}</span>
            </div>
          </div>
        </div>
        {!isScanning && !query && history.length > 0 && (
          <div className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-white/10 bg-[#0d0d0f]/95 backdrop-blur-sm overflow-hidden z-10">
            <div className="px-3 py-2 text-xs text-gray-500 flex items-center gap-2">
              <Clock size={12} />
              История поиска
            </div>
            {history.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => startScan(item)}
                className="w-full px-3 py-2.5 text-left hover:bg-white/5 flex items-center justify-between transition-colors"
              >
                <span className="text-sm text-gray-300 font-mono truncate">{item}</span>
                <ArrowRight size={14} className="text-purple-400 shrink-0" />
              </button>
            ))}
          </div>
        )}
      </form>

      {isScanning && (
        <div className="mt-6 rounded-2xl border border-purple-500/20 bg-white/[0.02] overflow-hidden animate-in fade-in duration-300">
          <div className="p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Cpu size={16} className="text-purple-400 animate-pulse" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Сканирование...</p>
                  <p className="text-xs text-gray-500 font-mono">{scanId}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-lg font-mono text-white font-bold">
                  {Math.round(progress)}%
                </span>
                <button
                  onClick={stopScan}
                  className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-gray-300 transition-colors"
                >
                  Стоп
                </button>
              </div>
            </div>
            <div className="mt-4 h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-purple-400 transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {SCAN_STEPS.map((step, i) => {
                const done = progress >= step.threshold + 15;
                const active = progress >= step.threshold && !done;
                return (
                  <StepIndicator 
                    key={i} 
                    label={step.label} 
                    done={done}
                    active={active}
                  />
                );
              })}
            </div>
            <div className="mt-4 p-3 rounded-xl bg-black/40 border border-white/5">
              <div className="space-y-1.5 font-mono text-xs">
                {logs.map((log, i) => (
                  <div key={i} className="flex gap-2 text-gray-400">
                    <span className="text-purple-400">›</span>
                    <span>{log}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {!isScanning && result && (
        <div className="mt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <ProfileCard data={result} />
        </div>
      )}

      {!isScanning && !result && (
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          {FEATURES.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPanel;
