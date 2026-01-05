
import React, { useEffect, useMemo, useRef } from "react";
import { ViewType } from "../types";
import { NAV_ITEMS } from "../constants";

interface MobileNavProps {
  currentView: ViewType;
  setView: (view: ViewType) => void;
}

const SPRING = "cubic-bezier(0.16, 1, 0.3, 1)";
const SPRING_DURATION = "500ms";

const MobileNav: React.FC<MobileNavProps> = ({ currentView, setView }) => {
  const prevIndexRef = useRef(0);

  const activeIndex = useMemo(() => {
    const idx = NAV_ITEMS.findIndex((i) => i.id === currentView);
    return idx >= 0 ? idx : 0;
  }, [currentView]);

  const cols = NAV_ITEMS.length;

  useEffect(() => {
    if (activeIndex !== prevIndexRef.current) {
      if ("vibrate" in navigator) {
        navigator.vibrate(10);
      }
      prevIndexRef.current = activeIndex;
    }
  }, [activeIndex]);

  const handleClick = (view: ViewType) => {
    if ("vibrate" in navigator) {
      navigator.vibrate(15);
    }
    setView(view);
  };

  return (
    <>
      <div
        className="md:hidden"
        style={{
          height: "calc(80px + env(safe-area-inset-bottom))",
        }}
      />
      <div
        className="md:hidden fixed left-0 right-0 bottom-0 z-50"
        style={{
          paddingLeft: "max(8px, env(safe-area-inset-left))",
          paddingRight: "max(8px, env(safe-area-inset-right))",
          paddingBottom: "max(8px, env(safe-area-inset-bottom))",
        }}
      >
        <div
          className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-2 h-16 w-[70%] rounded-full blur-[100px] opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(255,255,255,0.15) 0%, transparent 60%)",
          }}
        />
        <nav
          className="relative mx-auto max-w-md rounded-[28px] overflow-hidden"
          style={{
            backgroundColor: "rgba(30, 30, 30, 0.72)",
            backdropFilter: "blur(40px) saturate(180%)",
            WebkitBackdropFilter: "blur(40px) saturate(180%)",
            border: "0.5px solid rgba(255, 255, 255, 0.18)",
            boxShadow:
              "0 10px 40px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.2)",
          }}
          aria-label="Bottom navigation"
        >
          <div
            className="relative"
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              padding: "6px",
              gap: "4px",
            }}
          >
            <div
              className="pointer-events-none absolute rounded-[20px]"
              style={{
                top: "6px",
                bottom: "6px",
                left: `calc(${(activeIndex / cols) * 100}% + 6px)`,
                width: `calc(${100 / cols}% - 12px)`,
                background: "rgba(255, 255, 255, 0.12)",
                boxShadow:
                  "0 0 0 0.5px rgba(255, 255, 255, 0.15) inset, 0 2px 6px rgba(0, 0, 0, 0.25)",
                transition: `left ${SPRING_DURATION} ${SPRING}, width ${SPRING_DURATION} ${SPRING}`,
              }}
            />
            {NAV_ITEMS.map((item) => {
              const isActive = item.id === currentView;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleClick(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className="relative h-[60px] flex flex-col items-center justify-center gap-[3px]
                             select-none rounded-[18px]
                             focus:outline-none active:scale-[0.96]"
                  style={{
                    transition: `transform 120ms ${SPRING}`,
                  }}
                >
                  <div
                    style={{
                      color: isActive ? "#B794F4" : "rgba(255, 255, 255, 0.55)",
                      transform: isActive ? "scale(1.08)" : "scale(1)",
                      transition: `color 300ms ease, transform ${SPRING_DURATION} ${SPRING}`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    className="text-[10px] font-semibold leading-none"
                    style={{
                      color: isActive ? "#B794F4" : "rgba(255, 255, 255, 0.50)",
                      transition: "color 300ms ease",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
          <div
            className="h-px"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08) 50%, transparent)",
            }}
          />
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
