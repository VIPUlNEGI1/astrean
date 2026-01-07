'use client';

import { useEffect, useState } from 'react';
import { ShieldCheck, X } from 'lucide-react';

const STORAGE_KEY = 'astren-cookies-consent';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = typeof window !== 'undefined' && localStorage.getItem(STORAGE_KEY);
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const dismiss = () => setVisible(false);

  if (!visible) return null;

  return (
    <div className="fixed bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 md:left-auto md:right-8 md:w-[600px] z-40 animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div className="rounded-xl sm:rounded-2xl border border-white/12 bg-[#0b1220]/95 shadow-2xl backdrop-blur-xl p-3.5 sm:p-5 flex flex-col md:flex-row gap-4">
        <div className="flex gap-3 flex-1">
          <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
            <ShieldCheck className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-white/80" />
          </div>
          <div className="space-y-1 sm:space-y-1.5">
            <p className="text-xs sm:text-sm font-semibold text-white">Cookies & preferences</p>
            <p className="text-[11px] sm:text-sm text-white/70 leading-relaxed">
              We use essential cookies to keep the site running. We do not sell your data.
            </p>
            <div className="flex flex-wrap gap-2 pt-1.5">
              <button
                onClick={accept}
                className="rounded-[10px] sm:rounded-[12px] bg-white text-slate-900 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition"
              >
                Accept all
              </button>
              <button
                onClick={dismiss}
                className="rounded-[10px] sm:rounded-[12px] border border-white/15 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Reject all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


