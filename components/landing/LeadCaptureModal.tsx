'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Loader2, Sparkles, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export type LeadSource =
  | 'homepage'
  | 'enterprise'
  | 'individual'
  | 'ai-fellowship'
  | 'ai-for-leaders'
  | 'institution'
  | 'higher-ed'
  | 'schools'
  | 'navigation'
  | 'footer';

export type UserType = 'individual' | 'enterprise' | 'institution';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: LeadSource;
}

const getUserTypeFromSource = (source?: LeadSource): UserType => {
  switch (source) {
    case 'enterprise':
      return 'enterprise';
    case 'institution':
    case 'higher-ed':
    case 'schools':
      return 'institution';
    case 'individual':
    case 'ai-fellowship':
    case 'ai-for-leaders':
      return 'individual';
    default:
      return 'individual';
  }
};

const getDefaultProgram = (source?: LeadSource): string => {
  switch (source) {
    case 'ai-fellowship':
      return 'ai-fellowship';
    case 'ai-for-leaders':
      return 'ai-for-leaders';
    case 'enterprise':
      return 'enterprise-training';
    case 'higher-ed':
      return 'higher-ed-partnership';
    case 'schools':
      return 'school-curriculum';
    default:
      return '';
  }
};

const programOptions = {
  individual: [
    { value: 'ai-fellowship', label: 'AI Fellowship (12-week program)' },
    { value: 'ai-for-leaders', label: 'AI for Leaders' },
    { value: 'not-sure', label: 'Not sure yet - need guidance' },
  ],
  enterprise: [
    { value: 'enterprise-training', label: 'Custom AI Training for Teams' },
    { value: 'ai-fellowship-corporate', label: 'AI Fellowship (Corporate Batch)' },
    { value: 'ai-for-leaders', label: 'AI for Leaders (Executive Program)' },
    { value: 'consulting', label: 'AI Strategy Consulting' },
  ],
  institution: [
    { value: 'higher-ed-partnership', label: 'University/College Partnership' },
    { value: 'school-curriculum', label: 'K-12 AI Curriculum' },
    { value: 'faculty-training', label: 'Faculty Training Program' },
    { value: 'lab-setup', label: 'AI Lab Setup & Support' },
  ],
};

const companySizeOptions = [
  { value: '1-10', label: '1-10 employees' },
  { value: '11-50', label: '11-50 employees' },
  { value: '51-200', label: '51-200 employees' },
  { value: '201-500', label: '201-500 employees' },
  { value: '500+', label: '500+ employees' },
];

const institutionTypeOptions = [
  { value: 'school', label: 'K-12 School' },
  { value: 'college', label: 'College' },
  { value: 'university', label: 'University' },
  { value: 'coaching', label: 'Coaching Institute' },
  { value: 'other', label: 'Other Educational Institution' },
];

export default function LeadCaptureModal({
  isOpen,
  onClose,
  source = 'homepage',
}: LeadCaptureModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    currentRole: '',
    userType: 'individual' as UserType,
    organizationName: '',
    companySize: '',
    institutionType: '',
    interestedProgram: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  // Auto-select user type and program based on source
  useEffect(() => {
    if (isOpen) {
      const userType = getUserTypeFromSource(source);
      const program = getDefaultProgram(source);
      setFormData((prev) => ({
        ...prev,
        userType,
        interestedProgram: program,
      }));
    }
  }, [isOpen, source]);

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
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setIsSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        currentRole: '',
        userType: 'individual',
        organizationName: '',
        companySize: '',
        institutionType: '',
        interestedProgram: '',
        message: '',
      });
      setIsSuccess(false);
      setError('');
    }, 300);
  };

  const getHeadline = () => {
    switch (formData.userType) {
      case 'enterprise':
        return 'Get a Custom Training Proposal';
      case 'institution':
        return 'Partner With Us';
      default:
        return 'Request an Invite';
    }
  };

  const getSubheadline = () => {
    switch (formData.userType) {
      case 'enterprise':
        return 'Tell us about your team and training needs.';
      case 'institution':
        return "Let's discuss how we can collaborate.";
      default:
        return 'Be among the first to join when we open doors.';
    }
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
              className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 transition-all z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="p-8 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </motion.div>
                    <h3 className="text-2xl font-serif text-neutral-900 mb-3">
                      {formData.userType === 'individual'
                        ? "You're on the list!"
                        : "We've received your request!"}
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      {formData.userType === 'enterprise'
                        ? 'Our team will reach out within 24 hours with a custom proposal for your organization.'
                        : formData.userType === 'institution'
                          ? 'Our partnerships team will contact you soon to discuss collaboration opportunities.'
                          : "We'll notify you as soon as early access opens. Get ready to join India's most exclusive AI network."}
                    </p>
                    <button
                      onClick={handleClose}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-all"
                    >
                      Got it
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex flex-col max-h-[85vh]"
                  >
                    {/* Fixed Header */}
                    <div className="p-6 pb-4 border-b border-neutral-100 flex-shrink-0">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-coral-50 rounded-full mb-3">
                        <Sparkles className="w-4 h-4 text-coral-500" />
                        <span className="text-sm font-medium text-neutral-700">
                          {formData.userType === 'enterprise'
                            ? 'Enterprise'
                            : formData.userType === 'institution'
                              ? 'Institution'
                              : 'Early Access'}
                        </span>
                      </div>
                      <h2 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-1">
                        {getHeadline()}
                      </h2>
                      <p className="text-neutral-600 text-sm">{getSubheadline()}</p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col flex-1 min-h-0">
                      {/* Scrollable Content */}
                      <div className="px-6 py-4 space-y-4 overflow-y-auto flex-1 overscroll-contain">
                        {/* User Type Selector */}
                        <div>
                          <label className="block text-sm font-medium text-neutral-700 mb-2">
                            I am
                          </label>
                          <div className="grid grid-cols-3 gap-2">
                            {(['individual', 'enterprise', 'institution'] as UserType[]).map(
                              (type) => (
                                <button
                                  key={type}
                                  type="button"
                                  onClick={() =>
                                    setFormData({
                                      ...formData,
                                      userType: type,
                                      interestedProgram: '',
                                    })
                                  }
                                  className={`px-3 py-2 text-sm rounded-xl border transition-all ${
                                    formData.userType === type
                                      ? 'bg-neutral-900 text-white border-neutral-900'
                                      : 'bg-white text-neutral-600 border-neutral-200 hover:border-neutral-300'
                                  }`}
                                >
                                  {type === 'individual'
                                    ? 'Individual'
                                    : type === 'enterprise'
                                      ? 'Enterprise'
                                      : 'Institution'}
                                </button>
                              )
                            )}
                          </div>
                        </div>

                        {/* Basic Info */}
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-neutral-700 mb-1.5"
                            >
                              Full Name *
                            </label>
                            <input
                              type="text"
                              id="name"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="John Doe"
                              required
                              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-all text-sm"
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-sm font-medium text-neutral-700 mb-1.5"
                            >
                              Phone
                            </label>
                            <input
                              type="tel"
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+91 98765 43210"
                              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-all text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-neutral-700 mb-1.5"
                          >
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@company.com"
                            required
                            className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-all text-sm"
                          />
                        </div>

                        <div>
                          <label
                            htmlFor="currentRole"
                            className="block text-sm font-medium text-neutral-700 mb-1.5"
                          >
                            {formData.userType === 'institution'
                              ? 'Your Designation *'
                              : 'Current Role *'}
                          </label>
                          <input
                            type="text"
                            id="currentRole"
                            value={formData.currentRole}
                            onChange={(e) =>
                              setFormData({ ...formData, currentRole: e.target.value })
                            }
                            placeholder={
                              formData.userType === 'enterprise'
                                ? 'e.g. L&D Manager, CTO, HR Head'
                                : formData.userType === 'institution'
                                  ? 'e.g. Principal, Dean, Director'
                                  : 'e.g. ML Engineer at Google'
                            }
                            required
                            className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-all text-sm"
                          />
                        </div>

                        {/* Organization Name - for Enterprise and Institution */}
                        {(formData.userType === 'enterprise' ||
                          formData.userType === 'institution') && (
                          <div>
                            <label
                              htmlFor="organizationName"
                              className="block text-sm font-medium text-neutral-700 mb-1.5"
                            >
                              {formData.userType === 'enterprise'
                                ? 'Company Name *'
                                : 'Institution Name *'}
                            </label>
                            <input
                              type="text"
                              id="organizationName"
                              value={formData.organizationName}
                              onChange={(e) =>
                                setFormData({ ...formData, organizationName: e.target.value })
                              }
                              placeholder={
                                formData.userType === 'enterprise'
                                  ? 'e.g. Acme Corp'
                                  : 'e.g. Delhi Public School'
                              }
                              required
                              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-all text-sm"
                            />
                          </div>
                        )}

                        {/* Company Size - for Enterprise */}
                        {formData.userType === 'enterprise' && (
                          <div>
                            <label
                              htmlFor="companySize"
                              className="block text-sm font-medium text-neutral-700 mb-1.5"
                            >
                              Company Size *
                            </label>
                            <select
                              id="companySize"
                              value={formData.companySize}
                              onChange={(e) =>
                                setFormData({ ...formData, companySize: e.target.value })
                              }
                              required
                              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-all text-sm"
                            >
                              <option value="">Select company size</option>
                              {companySizeOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {/* Institution Type - for Institution */}
                        {formData.userType === 'institution' && (
                          <div>
                            <label
                              htmlFor="institutionType"
                              className="block text-sm font-medium text-neutral-700 mb-1.5"
                            >
                              Institution Type *
                            </label>
                            <select
                              id="institutionType"
                              value={formData.institutionType}
                              onChange={(e) =>
                                setFormData({ ...formData, institutionType: e.target.value })
                              }
                              required
                              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-all text-sm"
                            >
                              <option value="">Select institution type</option>
                              {institutionTypeOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {/* Interested Program */}
                        <div>
                          <label
                            htmlFor="interestedProgram"
                            className="block text-sm font-medium text-neutral-700 mb-1.5"
                          >
                            Interested In *
                          </label>
                          <select
                            id="interestedProgram"
                            value={formData.interestedProgram}
                            onChange={(e) =>
                              setFormData({ ...formData, interestedProgram: e.target.value })
                            }
                            required
                            className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 focus:outline-none focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-all text-sm"
                          >
                            <option value="">Select a program</option>
                            {programOptions[formData.userType].map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        {/* Additional Message - for Enterprise and Institution */}
                        {(formData.userType === 'enterprise' ||
                          formData.userType === 'institution') && (
                          <div>
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium text-neutral-700 mb-1.5"
                            >
                              Additional Details
                            </label>
                            <textarea
                              id="message"
                              value={formData.message}
                              onChange={(e) =>
                                setFormData({ ...formData, message: e.target.value })
                              }
                              placeholder={
                                formData.userType === 'enterprise'
                                  ? 'Tell us about your training needs, team size, timeline...'
                                  : 'Tell us about your institution, student strength, goals...'
                              }
                              rows={3}
                              className="w-full px-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-coral-500/20 focus:border-coral-500 transition-all text-sm resize-none"
                            />
                          </div>
                        )}

                        {error && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-500 text-sm"
                          >
                            {error}
                          </motion.p>
                        )}
                      </div>

                      {/* Fixed Footer */}
                      <div className="px-6 py-4 border-t border-neutral-100 bg-white flex-shrink-0">
                        <button
                          type="submit"
                          disabled={isLoading}
                          className="group w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              {formData.userType === 'enterprise'
                                ? 'Get Custom Proposal'
                                : formData.userType === 'institution'
                                  ? 'Request Partnership'
                                  : 'Request Early Access'}
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </>
                          )}
                        </button>

                        <p className="text-xs text-neutral-400 text-center mt-3">
                          By submitting, you agree to receive updates about Lex AI Labs.
                        </p>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
