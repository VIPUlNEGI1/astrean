'use client';

import { useEffect, useState } from 'react';
import { ShieldAlert, X, ExternalLink, Check, Ban } from 'lucide-react';
import Link from 'next/link';

const STORAGE_KEY = 'astren-terms-consent';

export default function TermsModal() {
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    const storedStatus = localStorage.getItem(STORAGE_KEY);
    if (!storedStatus) {
      setVisible(true);
    } else {
      setStatus(storedStatus);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setStatus('accepted');
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setStatus('rejected');
    setVisible(false);
    // Optionally redirect or show a restricted view
    // window.location.href = 'https://www.google.com';
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] pointer-events-none flex items-end justify-start p-4 sm:p-6 animate-in fade-in duration-300">
      <div className="relative pointer-events-auto w-full max-w-[280px] xs:max-w-xs sm:max-w-xl lg:max-w-[32vw] rounded-2xl border border-white/10 bg-[#0b1220]/95 backdrop-blur-md shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
        {/* Header - Hidden on mobile for compactness */}
        <div className="hidden sm:block bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-4 sm:px-6 sm:py-4 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/20 shrink-0">
              <ShieldAlert className="h-5 w-5 text-purple-400" />
            </div>
            <div>
              <h2 className="text-base font-bold text-white leading-tight">Terms & Conditions</h2>
              <p className="text-[10px] text-white/40 mt-0.5 uppercase tracking-widest">Legal Requirement</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:px-6 sm:py-4 space-y-3 sm:space-y-4">
          <div className="flex items-center gap-2 sm:hidden mb-1">
            <ShieldAlert className="h-4 w-4 text-purple-400" />
            <span className="text-[10px] font-bold text-white uppercase tracking-wider">Terms & Policy</span>
          </div>
          <p className="text-[13px] sm:text-sm text-white/70 leading-relaxed">
            Welcome to Astrenox. Please accept our updated <Link href="/terms" className="text-white font-medium underline underline-offset-2">Terms of Service</Link> and <Link href="/privacy" className="text-white font-medium underline underline-offset-2">Privacy Policy</Link> to continue using our platform.
          </p>
        </div>

        {/* Actions */}
        <div className="p-4 sm:px-6 sm:py-4 bg-black/40 border-t border-white/5 flex flex-row items-center gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-white text-slate-950 px-4 py-2 sm:py-2.5 text-[12px] sm:text-sm font-bold shadow-lg hover:bg-white/90 active:scale-[0.98] transition-all"
          >
            <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            Accept & Continue
          </button>
          <button
            onClick={handleReject}
            className="inline-flex items-center justify-center rounded-lg sm:rounded-xl border border-white/10 bg-white/5 text-white px-4 py-2 sm:py-2.5 text-[12px] sm:text-sm font-bold hover:bg-white/10 active:scale-[0.98] transition-all"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

