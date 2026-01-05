import React, { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  Phone,
  User as UserIcon,
  Calendar,
  Mail,
  Fingerprint,
  Shield,
  Globe,
  Download,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import type { ProfileData } from "../types";

interface ProfileCardProps {
  data?: ProfileData;
  loading?: boolean;
  reliability?: number; // 0..100
  onExportPdf?: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  data,
  loading = false,
  reliability = 94,
  onExportPdf,
}) => {
  if (loading || !data) return <ProfileCardSkeleton />;

  return (
    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl shadow-black/35 hover:border-[#B794F4]/35 transition">
      {/* Header */}
      <div className="p-6 md:p-7 border-b border-white/10 flex flex-col md:flex-row md:items-center gap-5">
        <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-3xl bg-gradient-to-br from-[#B794F4] to-[#9F7AEA] flex items-center justify-center text-[#0D0D0E] shadow-2xl shadow-[#B794F4]/20 shrink-0">
          <UserIcon size={34} />
        </div>

        <div className="text-center md:text-left flex-1 min-w-0">
          <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight truncate">
            {data.fullName || "Unnamed profile"}
          </h3>

          <div className="mt-2 flex flex-wrap justify-center md:justify-start gap-2">
            <Chip tone="emerald">Profile found</Chip>
            <Chip tone="violet">Verified data</Chip>
            <Chip tone="gray">OSINT snapshot</Chip>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onExportPdf}
            className="h-11 px-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold text-white hover:bg-white/10 transition uppercase tracking-widest flex items-center gap-2
                       focus:outline-none focus:ring-2 focus:ring-[#B794F4]/25"
          >
            <Download size={16} />
            Export PDF
          </button>
        </div>
      </div>

      {/* Body grid */}
      <div className="p-6 md:p-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <InfoField
          icon={Phone}
          label="Connectivity"
          value={data.phone}
          subValue={[data.operator, data.region].filter(Boolean).join(" • ")}
          copyValue={data.phone}
        />
        <InfoField
          icon={Calendar}
          label="Biological"
          value={data.dob}
          subValue={data.age ? `${data.age} years of age` : undefined}
        />
        <InfoField
          icon={Mail}
          label="Communication"
          value={data.email}
          copyValue={data.email}
        />
        <InfoField
          icon={Globe}
          label="Social network"
          value={data.vkId}
          subValue="VKontakte ID"
          copyValue={data.vkId}
          rightSlot={
            data.vkId ? (
              <a
                href={`https://vk.com/id${encodeURIComponent(data.vkId)}`}
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center justify-center"
                aria-label="Open VK profile"
                title="Open VK"
              >
                <ExternalLink size={16} className="text-[#B794F4]" />
              </a>
            ) : null
          }
        />
        <InfoField
          icon={Fingerprint}
          label="Legal identifier"
          value={data.snils}
          subValue="SNILS record"
          copyValue={data.snils}
        />

        <ReliabilityCard value={reliability} />
      </div>

      {/* Mobile export */}
      <div className="md:hidden p-4 px-6 border-t border-white/10">
        <button
          onClick={onExportPdf}
          className="w-full h-12 rounded-2xl bg-white/5 border border-white/10 text-white font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2
                     hover:bg-white/10 transition focus:outline-none focus:ring-2 focus:ring-[#B794F4]/25"
        >
          <Download size={16} />
          Save dossier
        </button>
      </div>
    </div>
  );
};

const Chip: React.FC<{ children: React.ReactNode; tone: "emerald" | "violet" | "gray" }> = ({
  children,
  tone,
}) => {
  const cls =
    tone === "emerald"
      ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400"
      : tone === "violet"
        ? "bg-[#B794F4]/10 border-[#B794F4]/20 text-[#B794F4]"
        : "bg-white/5 border-white/10 text-gray-300";

  return (
    <span className={`px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-widest ${cls}`}>
      {children}
    </span>
  );
};

const InfoField: React.FC<{
  icon: LucideIcon;
  label: string;
  value?: string;
  subValue?: string;
  copyValue?: string;
  rightSlot?: React.ReactNode;
}> = ({ icon: Icon, label, value, subValue, copyValue, rightSlot }) => {
  const [copied, setCopied] = useState(false);
  const safe = value?.trim() ? value : "—";

  const doCopy = async () => {
    if (!copyValue) return;
    try {
      await navigator.clipboard.writeText(copyValue);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <div className="rounded-2xl bg-black/30 border border-white/10 p-4 flex items-start gap-3 hover:bg-black/35 transition">
      <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B794F4] shrink-0">
        <Icon size={18} />
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">{label}</p>
        <p className="text-sm text-white font-bold truncate" title={safe}>
          {safe}
        </p>
        {subValue ? (
          <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-tight opacity-70 truncate" title={subValue}>
            {subValue}
          </p>
        ) : null}
      </div>

      <div className="flex items-center gap-2">
        {rightSlot}
        {copyValue ? (
          <button
            onClick={doCopy}
            className="h-9 w-9 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition flex items-center justify-center
                       focus:outline-none focus:ring-2 focus:ring-[#B794F4]/25"
            aria-label="Copy"
            title={copied ? "Copied" : "Copy"}
          >
            {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} className="text-gray-200" />}
          </button>
        ) : null}
      </div>
    </div>
  );
};

const ReliabilityCard: React.FC<{ value: number }> = ({ value }) => {
  const v = Math.max(0, Math.min(100, value));

  return (
    <div className="rounded-2xl bg-black/30 border border-white/10 p-4 flex flex-col justify-center">
      <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-3 font-bold flex items-center gap-2">
        <Shield size={12} className="text-[#B794F4]" />
        Data reliability
      </p>

      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#B794F4] to-[#9F7AEA]"
            style={{ width: `${v}%` }}
          />
        </div>
        <span className="text-xs font-mono font-bold text-[#B794F4]">{v}%</span>
      </div>

      <p className="text-[10px] text-gray-500 mt-3">
        Score is computed from sources & match confidence.
      </p>
    </div>
  );
};

const ProfileCardSkeleton: React.FC = () => {
  // Skeleton на animate-pulse — стандартная практика для “призрачной” загрузки [web:112][web:111]
  return (
    <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-2xl shadow-black/35">
      <div className="p-6 md:p-7 border-b border-white/10 flex items-center gap-5">
        <div className="w-16 h-16 md:w-[72px] md:h-[72px] rounded-3xl bg-white/10 animate-pulse" />
        <div className="flex-1 min-w-0">
          <div className="h-5 w-56 bg-white/10 rounded-lg animate-pulse" />
          <div className="mt-3 flex gap-2">
            <div className="h-6 w-24 bg-white/10 rounded-full animate-pulse" />
            <div className="h-6 w-28 bg-white/10 rounded-full animate-pulse" />
          </div>
        </div>
        <div className="hidden md:block h-11 w-32 rounded-2xl bg-white/10 animate-pulse" />
      </div>

      <div className="p-6 md:p-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-2xl bg-black/30 border border-white/10 p-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-white/10 animate-pulse" />
              <div className="flex-1">
                <div className="h-3 w-24 bg-white/10 rounded-md animate-pulse" />
                <div className="mt-2 h-4 w-40 bg-white/10 rounded-md animate-pulse" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
