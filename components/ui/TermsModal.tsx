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
    <div className="fixed inset-0 z-[100] flex items-center sm:items-end justify-center sm:justify-start p-3 sm:p-6 animate-in fade-in duration-300 bg-black/40 sm:bg-transparent backdrop-blur-[2px] sm:backdrop-blur-none">
      <div className="relative w-full max-w-[calc(36vw-24px)] xs:max-w-lg rounded-2xl border border-white/10 bg-[#0b1220] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-4 sm:p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/20 shrink-0">
              <ShieldAlert className="h-4.5 w-4.5 sm:h-5 sm:w-5 text-purple-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white leading-none">Terms & Conditions</h2>
              <p className="text-[10px] text-white/40 mt-1.5 uppercase tracking-widest">Legal Requirement</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4">
          <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
            Welcome to Astrenox. Please review and accept our updated Terms and Conditions and Privacy Policy to continue.
          </p>
          
          <div className="flex flex-col gap-2 pt-1 sm:pt-2">
            <Link 
              href="/terms" 
              className="group flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all"
              onClick={() => setVisible(false)}
            >
              <span className="text-xs sm:text-sm font-medium text-white">Review Terms of Service</span>
              <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/40 group-hover:text-white transition-colors" />
            </Link>
            <Link 
              href="/privacy" 
              className="group flex items-center justify-between p-3 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all"
              onClick={() => setVisible(false)}
            >
              <span className="text-xs sm:text-sm font-medium text-white">Review Privacy Policy</span>
              <ExternalLink className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white/40 group-hover:text-white transition-colors" />
            </Link>
          </div>
        </div>

        {/* Actions */}
        <div className="p-4 sm:p-6 bg-black/20 border-t border-white/5 flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-950 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold shadow-lg hover:bg-white/90 transition-all"
          >
            <Check className="h-4 w-4" />
            Accept & Continue
          </button>
          <button
            onClick={handleReject}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 text-white px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold hover:bg-white/10 transition-all"
          >
            <Ban className="h-4 w-4" />
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

