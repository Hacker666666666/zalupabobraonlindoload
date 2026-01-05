import React, { useState } from "react";
import { Send, Terminal, ShieldCheck, ArrowRight, Eye, EyeOff } from "lucide-react";
import Logo from "./Logo";

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────

interface AuthPageProps {
  onLogin: () => void;
}

// ─────────────────────────────────────────────────────────────
// Utils
// ─────────────────────────────────────────────────────────────

const cn = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(" ");

// ─────────────────────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────────────────────

const BackgroundEffects: React.FC = () => (
  <div className="absolute inset-0 pointer-events-none">
    {/* Gradient orbs */}
    <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-purple-500/15 blur-[100px]" />
    <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-purple-600/10 blur-[120px]" />
    
    {/* Grid overlay */}
    <div 
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
        `,
        backgroundSize: '48px 48px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
      }}
    />
  </div>
);

const InfoBanner: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex gap-3 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
    <ShieldCheck size={18} className="text-emerald-400 shrink-0 mt-0.5" />
    <p className="text-xs text-emerald-300/80 leading-relaxed">{children}</p>
  </div>
);

const Divider: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="flex-1 h-px bg-white/10" />
    <span className="text-[10px] uppercase tracking-widest text-gray-600">{text}</span>
    <div className="flex-1 h-px bg-white/10" />
  </div>
);

const StatusBadge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-500">
    {children}
  </span>
);

// ─────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [accessKey, setAccessKey] = useState("");
  const [showKey, setShowKey] = useState(false);

  const isKeyValid = accessKey.trim().length > 0;

  const handleKeySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isKeyValid) onLogin();
  };

  return (
    <div className="min-h-dvh w-full bg-[#0a0a0b] flex items-center justify-center p-5 relative overflow-hidden">
      <BackgroundEffects />

      <div className="relative w-full max-w-sm">
        
        {/* Header */}
        <header className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-lg shadow-purple-500/25">
            <Logo size={28} className="text-white" />
          </div>

          <h1 className="mt-4 text-2xl font-bold text-white">
            Cryven <span className="text-purple-400">Gateway</span>
          </h1>
          
          <p className="mt-1 text-xs text-gray-500">
            OSINT Aggregation • Digital Intelligence
          </p>
        </header>

        {/* Auth Card */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm overflow-hidden">
          <div className="p-5 space-y-4">
            
            <InfoBanner>
              Telegram authorization recommended. Session token will be linked to your account.
            </InfoBanner>

            {/* Telegram Button */}
            <button
              type="button"
              onClick={onLogin}
              className="w-full h-12 rounded-xl bg-[#229ED9]/10 border border-[#229ED9]/25 hover:bg-[#229ED9]/20 text-white font-medium flex items-center justify-center gap-3 transition-colors focus:outline-none focus:ring-2 focus:ring-[#229ED9]/40"
            >
              <span className="w-8 h-8 rounded-lg bg-[#229ED9] flex items-center justify-center">
                <Send size={14} />
              </span>
              Continue with Telegram
            </button>

            <Divider text="or" />

            {/* Access Key Form */}
            <form onSubmit={handleKeySubmit} className="space-y-3">
              <label className="block text-[10px] uppercase tracking-widest text-gray-500 font-medium">
                Access key
              </label>

              <div className="relative">
                <Terminal size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                
                <input
                  type={showKey ? "text" : "password"}
                  value={accessKey}
                  onChange={(e) => setAccessKey(e.target.value)}
                  placeholder="Paste token..."
                  className="w-full h-11 pl-10 pr-11 rounded-xl bg-black/40 border border-white/10 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                />

                <button
                  type="button"
                  onClick={() => setShowKey(!showKey)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-lg bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 transition-colors"
                  aria-label={showKey ? "Hide" : "Show"}
                >
                  {showKey ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>

              <button
                type="submit"
                disabled={!isKeyValid}
                className={cn(
                  "w-full h-11 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all",
                  isKeyValid 
                    ? "bg-purple-500 hover:bg-purple-400 text-white" 
                    : "bg-white/5 text-gray-500 cursor-not-allowed"
                )}
              >
                Initialize node
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Status badges */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <StatusBadge>NODE: STABLE</StatusBadge>
              <StatusBadge>AES-256</StatusBadge>
            </div>
          </div>

          {/* Footer */}
          <footer className="px-5 py-3 border-t border-white/5 bg-white/[0.01] text-center">
            <p className="text-[11px] text-gray-500">
              Open <span className="text-purple-400">@CryvenBot</span> to manage sessions
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;