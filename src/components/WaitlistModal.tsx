import React, { useState, useEffect } from 'react';
import { X, Bell, CheckCircle2, AlertTriangle, Loader2, Mail, Phone, User } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function WaitlistModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleOpenEvent = (e: Event) => {
      const customEvent = e as CustomEvent<{ email?: string }>;
      if (customEvent.detail && customEvent.detail.email) {
        setEmail(customEvent.detail.email);
      }
      setIsOpen(true);
      setStatus('idle');
      setErrorMessage('');
    };

    window.addEventListener('open-waitlist', handleOpenEvent);
    return () => {
      window.removeEventListener('open-waitlist', handleOpenEvent);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Reset states after animation closes (300ms)
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setStatus('idle');
      setErrorMessage('');
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const serviceId = "service_zits1ok";
    const templateId = "template_urm1p9i";
    const publicKey = "dDfZ_-sujk5nfHyAa";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          user_name: name,
          user_email: email,
          user_phone: phone || 'Not provided',
        },
        publicKey
      );

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');

      // Auto close after 3.5 seconds on success
      setTimeout(() => {
        handleClose();
      }, 3500);
    } catch (err: any) {
      console.error('Waitlist submission error:', err);
      setStatus('error');
      setErrorMessage(
        err?.text || err?.message || 'Failed to submit. Please check your network connection and try again.'
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-[fadeIn_200ms_ease-out]"
        onClick={status !== 'submitting' ? handleClose : undefined}
      />

      {/* Modal Container */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 overflow-hidden z-10 transition-transform duration-300 animate-[scaleIn_200ms_ease-out]">

        {/* Close Button */}
        {status !== 'submitting' && (
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-xl cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Dynamic State Rendering */}
        {status === 'success' ? (
          <div className="text-center py-6 animate-fade-in">
            <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6 border border-green-100 shadow-inner">
              <CheckCircle2 className="w-10 h-10 text-green-600 animate-[bounce_1s_infinite]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3 font-display">You're on the list! 🎉</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs mx-auto">
              We've successfully registered your email. You'll be the first to know when Sajilo Renew launches in Nepal!
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-primary-500/20">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">Join the Waitlist 🚀</h3>
              <p className="text-gray-600 text-sm">
                Be the first to know when Sajilo Renew launches and get exclusive early-bird benefits.
              </p>
            </div>

            {/* Error Notification */}
            {status === 'error' && (
              <div className="mb-5 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-xs flex items-start gap-3 animate-shake">
                <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="font-semibold mb-1">Failed to join waitlist</p>
                  <p>{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <User className="w-4.5 h-4.5" />
                </div>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-sm transition-all"
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-sm transition-all"
                  required
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <Phone className="w-4.5 h-4.5" />
                </div>
                <input
                  type="tel"
                  placeholder="Phone number (optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-sm transition-all"
                  disabled={status === 'submitting'}
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-3.5 font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25 transition-all cursor-pointer text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Joining Waitlist...
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </form>

            <p className="text-[11px] text-gray-400 text-center mt-4">
              We respect your privacy. No spam, unsubscribe at any time.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
