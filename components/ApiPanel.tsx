import React, { useMemo, useState } from "react";
import {
  Terminal,
  Copy,
  Send,
  ExternalLink,
  ShieldCheck,
  Eye,
  EyeOff,
  Check,
  RotateCw,
} from "lucide-react";

type ApiPanelProps = {
  apiKey: string;
  endpoint?: string;
  docsUrl?: string;
  onRefresh?: () => void;
  onBotSettings?: () => void;
};

const ApiPanel: React.FC<ApiPanelProps> = ({
  apiKey,
  endpoint = "api.cryven.io/v2/search",
  docsUrl = "#",
  onRefresh,
  onBotSettings,
}) => {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const displayKey = useMemo(() => {
    if (revealed) return apiKey;
    const head = apiKey.slice(0, 3);
    const tail = apiKey.slice(-4);
    return `${head}••••••••••••••••${tail}`;
  }, [apiKey, revealed]);

  const copyKey = async () => {
    try {
      await navigator.clipboard.writeText(apiKey);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // fallback: можно добавить document.execCommand('copy') если хочешь поддержать древние браузеры
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-6 md:py-8 px-5 space-y-5">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
            Developer <span className="text-[#B794F4]">Interface</span>
          </h2>
          <p className="text-xs text-gray-500 mt-1">
            Integrate Cryven intelligence into your workflows.
          </p>
        </div>

        <button
          onClick={onRefresh}
          className="h-10 px-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-gray-200 font-semibold
                     hover:bg-white/10 transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#B794F4]/40"
        >
          <RotateCw size={14} className="opacity-80" />
          Refresh
        </button>
      </div>

      <div className="glass-panel p-6 rounded-3xl border border-white/5 relative overflow-hidden">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#B794F4]/10 flex items-center justify-center text-[#B794F4]">
              <Terminal size={18} />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-white">Access token</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">
                Active & authenticated
              </p>
            </div>
          </div>

          <button
            onClick={() => setRevealed((v) => !v)}
            className="h-10 px-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-gray-300 font-semibold
                       hover:bg-white/10 transition flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white/20"
            aria-label={revealed ? "Hide token" : "Show token"}
          >
            {revealed ? <EyeOff size={16} /> : <Eye size={16} />}
            {revealed ? "Hide" : "Show"}
          </button>
        </div>

        <div className="relative">
          <input
            type="text"
            readOnly
            value={displayKey}
            className="w-full bg-black/35 border border-white/10 rounded-2xl py-4 pl-5 pr-28
                       font-mono text-[13px] text-[#B794F4] focus:outline-none focus:ring-2 focus:ring-[#B794F4]/30"
          />

          <button
            onClick={copyKey}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 px-3 rounded-xl
                       bg-[#B794F4] text-[#0D0D0E] hover:opacity-90 transition
                       shadow-lg shadow-[#B794F4]/20 flex items-center gap-2"
            aria-label="Copy token"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span className="text-[11px] font-bold">{copied ? "Copied" : "Copy"}</span>
          </button>
        </div>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
              Endpoint
            </p>
            <p className="text-xs text-gray-300 font-mono truncate">{endpoint}</p>
          </div>

          <a
            href={docsUrl}
            className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition
                       flex items-center justify-between"
          >
            <div>
              <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">
                Documentation
              </p>
              <p className="text-xs text-[#B794F4] font-semibold">View specs</p>
            </div>
            <ExternalLink size={16} className="text-[#B794F4] opacity-90" />
          </a>
        </div>
      </div>

      <div className="glass-panel p-5 rounded-3xl border border-emerald-500/10 bg-emerald-500/[0.02] flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 shrink-0">
          <ShieldCheck size={22} />
        </div>

        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-white leading-tight">Bot sync enabled</h4>
          <p className="text-xs text-gray-400 mt-1">
            Manage webhooks and notifications through the Telegram bot.
          </p>
        </div>

        <button
          onClick={onBotSettings}
          className="h-10 px-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400
                     text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-500/20 transition
                     flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/30"
        >
          <Send size={14} />
          Bot settings
        </button>
      </div>
    </div>
  );
};

export default ApiPanel;
