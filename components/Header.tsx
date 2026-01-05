import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Wallet, Settings, LogOut, PanelLeft } from "lucide-react";
import type { User } from "../types";

type HeaderProps = {
  user: User;
  onToggleSidebar?: () => void;
  onOpenWallet?: () => void;
  onSettings?: () => void;
  onLogout?: () => void;
};

const Header: React.FC<HeaderProps> = ({
  user,
  onToggleSidebar,
  onOpenWallet,
  onSettings,
  onLogout,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const balanceText = useMemo(() => `$${user.balance.toFixed(2)}`, [user.balance]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-40",
        "h-16 md:h-20",
        "px-4 md:px-8",
        "flex items-center justify-between",
        "border-b border-white/10",
        "bg-[#0D0D0E]/55 backdrop-blur-xl",
        "transition-shadow duration-300",
        scrolled ? "shadow-2xl shadow-black/30" : "shadow-none",
      ].join(" ")}
      style={{
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      {/* Left */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-gray-200
                     hover:bg-white/10 transition
                     focus:outline-none focus:ring-2 focus:ring-white/20"
          aria-label="Open sidebar"
        >
          <PanelLeft size={18} className="mx-auto" />
        </button>

        <div className="flex items-center gap-3 min-w-0">
          <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-[#B794F4] to-[#9F7AEA] text-[#0D0D0E]">
            <span className="font-black text-sm">C</span>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-xs md:text-sm font-bold text-white truncate">
                Welcome back
              </span>
              <span className="hidden sm:inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[10px] text-gray-500 uppercase font-mono">
                  TG-LINKED
                </span>
              </span>
            </div>
            <p className="text-[11px] text-gray-500 truncate">
              {user.role}
            </p>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Balance pill */}
        <button
          type="button"
          onClick={onOpenWallet}
          className="h-10 px-3 rounded-2xl bg-white/5 border border-white/10
                     hover:border-[#B794F4]/35 hover:bg-white/10 transition
                     focus:outline-none focus:ring-2 focus:ring-[#B794F4]/25
                     flex items-center gap-2"
          aria-label="Open wallet"
        >
          <Wallet size={16} className="text-[#B794F4]" />
          <span className="text-xs font-mono font-bold text-white">
            {balanceText}
          </span>
        </button>

        {/* User menu */}
        <div className="relative" ref={menuRef}>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="h-10 pl-2 pr-2 rounded-2xl bg-white/0 hover:bg-white/5 transition
                       focus:outline-none focus:ring-2 focus:ring-white/20
                       flex items-center gap-2"
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            <img
              src={user.avatar}
              className="w-9 h-9 rounded-2xl object-cover border border-white/10"
              alt="Avatar"
            />
            <div className="hidden sm:flex flex-col items-start leading-tight">
              <span className="text-xs font-medium text-white">
                {user.username}
              </span>
              <span className="text-[9px] text-gray-500 uppercase tracking-widest">
                {user.role}
              </span>
            </div>
            <ChevronDown
              size={14}
              className={[
                "hidden md:block text-gray-500 transition",
                menuOpen ? "rotate-180 text-white" : "group-hover:text-white",
              ].join(" ")}
            />
          </button>

          {menuOpen && (
            <div
              role="menu"
              className="absolute right-0 mt-2 w-56 rounded-2xl overflow-hidden
                         border border-white/10 bg-[#0D0D0E]/80 backdrop-blur-xl
                         shadow-2xl shadow-black/40"
            >
              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onSettings?.();
                }}
                className="w-full px-4 py-3 flex items-center gap-2 text-left
                           hover:bg-white/5 transition text-sm text-gray-200"
                role="menuitem"
              >
                <Settings size={16} className="text-[#B794F4]" />
                Settings
              </button>

              <div className="h-px bg-white/10" />

              <button
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  onLogout?.();
                }}
                className="w-full px-4 py-3 flex items-center gap-2 text-left
                           hover:bg-white/5 transition text-sm text-rose-200"
                role="menuitem"
              >
                <LogOut size={16} className="text-rose-300" />
                Log out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
