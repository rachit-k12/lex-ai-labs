'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react';

interface LeadCaptureDialogProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

type Step = 'role' | 'details' | 'success';

const roleOptions = [
  { id: 'engineer', label: 'AI/ML Engineer', description: 'Building AI systems and models' },
  { id: 'founder', label: 'Founder / Entrepreneur', description: 'Building AI-first products' },
  { id: 'leader', label: 'Tech Leader / Manager', description: 'Leading AI initiatives' },
  { id: 'student', label: 'Student / Researcher', description: 'Learning and exploring AI' },
  { id: 'other', label: 'Other Roles', description: 'Product, design, or other functions' },
];

export default function LeadCaptureDialog({ isOpen, onClose, source = 'homepage' }: LeadCaptureDialogProps) {
  const [step, setStep] = useState<Step>('role');
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    experience: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    setStep('details');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone) {
      setError('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/leads/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          role: selectedRole,
          source,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      setStep('success');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset state after animation
    setTimeout(() => {
      setStep('role');
      setSelectedRole(null);
      setFormData({ name: '', email: '', phone: '', linkedin: '', experience: '' });
      setError(null);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="p-8 md:p-10">
                <AnimatePresence mode="wait">
                  {step === 'role' && (
                    <motion.div
                      key="role"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-8">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
                          What <span className="italic text-brand-400">role</span> are you
                          <br />trying to crack?
                        </h2>
                        <p className="text-slate-400">Select the option that best describes you</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {roleOptions.map((role) => (
                          <button
                            key={role.id}
                            onClick={() => handleRoleSelect(role.id)}
                            className="group p-4 text-left bg-slate-800/50 border border-slate-700 rounded-2xl hover:border-slate-500 hover:bg-slate-800 transition-all"
                          >
                            <span className="block text-white font-medium mb-1 group-hover:text-brand-400 transition-colors">
                              {role.label}
                            </span>
                            <span className="text-sm text-slate-500">{role.description}</span>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 'details' && (
                    <motion.div
                      key="details"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                    >
                      <button
                        onClick={() => setStep('role')}
                        className="text-slate-400 hover:text-white text-sm mb-6 flex items-center gap-1 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 rotate-180" />
                        Back
                      </button>

                      <div className="mb-8">
                        <h2 className="font-serif text-3xl md:text-4xl text-white mb-3">
                          Tell us about <span className="italic text-brand-400">yourself</span>
                        </h2>
                        <p className="text-slate-400">We&apos;ll review your application and get back within 48 hours</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Full Name *"
                            className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                          />
                        </div>

                        <div>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Email Address *"
                            className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                          />
                        </div>

                        <div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Phone Number *"
                            className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                          />
                        </div>

                        <div>
                          <input
                            type="url"
                            name="linkedin"
                            value={formData.linkedin}
                            onChange={handleInputChange}
                            placeholder="LinkedIn Profile URL"
                            className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all"
                          />
                        </div>

                        <div>
                          <select
                            name="experience"
                            value={formData.experience}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all appearance-none"
                          >
                            <option value="" className="text-slate-500">Years of Experience</option>
                            <option value="0-2">0-2 years</option>
                            <option value="2-5">2-5 years</option>
                            <option value="5-10">5-10 years</option>
                            <option value="10+">10+ years</option>
                          </select>
                        </div>

                        {error && (
                          <p className="text-red-400 text-sm">{error}</p>
                        )}

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white font-medium rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              Submit Application
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </button>

                        <p className="text-xs text-slate-500 text-center">
                          By submitting, you agree to receive communications from Lex AI
                        </p>
                      </form>
                    </motion.div>
                  )}

                  {step === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8"
                    >
                      <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                      </div>
                      <h2 className="font-serif text-3xl text-white mb-3">
                        Application Received!
                      </h2>
                      <p className="text-slate-400 mb-8 max-w-sm mx-auto">
                        Thank you for your interest in Lex AI Club. Our team will review your application and get back to you within 48 hours.
                      </p>
                      <button
                        onClick={handleClose}
                        className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-all"
                      >
                        Close
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
