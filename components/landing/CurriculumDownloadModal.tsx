'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, FileText, Loader2, X } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CurriculumDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  programName?: string;
  redirectUrl?: string;
}

export default function CurriculumDownloadModal({
  isOpen,
  onClose,
  programName = 'AI Fellowship',
  redirectUrl = 'https://lexailabs.com/curriculum',
}: CurriculumDownloadModalProps) {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/curriculum-leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          phone: formData.phone,
          program: programName,
          source: 'curriculum-download',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Redirect to curriculum page
      window.location.href = redirectUrl;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setFormData({ email: '', phone: '' });
      setError('');
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={handleClose}
          />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all z-10"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 bg-coral-50 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-coral-500" />
                </div>

                {/* Header */}
                <h2 className="text-xl font-serif text-neutral-900 mb-1">
                  View the Curriculum
                </h2>
                <p className="text-neutral-500 text-sm mb-6">
                  Enter your details to access the full {programName} curriculum.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="curriculum-email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      id="curriculum-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Your email address"
                      required
                      autoFocus
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="curriculum-phone" className="sr-only">
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="curriculum-phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Phone number (optional)"
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-all text-sm"
                    />
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm"
                    >
                      {error}
                    </motion.p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        View Curriculum
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-xs text-neutral-400 text-center mt-4">
                  We respect your privacy. No spam, ever.
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
