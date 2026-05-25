import { Smartphone, Download, CheckCircle2, Star, Shield, Zap, Bell } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

export default function DownloadPage() {
  const [showNotify, setShowNotify] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowNotify(false);
      setSubmitted(false);
      setNotifyEmail('');
    }, 2000);
  };

  return (
    <div className="pt-20">
      <SEO
        title="Download the App"
        description="Get the Sajilo Renew mobile app for iOS and Android. Never miss a bluebook renewal, property tax deadline, or insurance payment on the go."
        keywords="download sajilo renew app, vehicle reminder app android nepal, document tracker app ios"
      />
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-100/50 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent-100/50 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium">
                <Bell className="w-4 h-4" /> Coming Soon
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Sajilo Renew App is{' '}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Launching Soon</span>
              </h1>
              <p className="text-lg text-gray-600 max-w-xl">
                We're putting the finishing touches on the app. Be the first to download when we launch. Get notified instantly!
              </p>

              {/* Notify Button */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => setShowNotify(true)}
                  className="px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl font-semibold flex items-center justify-center gap-3 hover:from-primary-700 hover:to-primary-800 transition-all shadow-xl shadow-primary-500/25 cursor-pointer"
                >
                  <Bell className="w-5 h-5" />
                  Notify Me When Available
                </button>
              </div>

              {/* Platform badges */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <div className="px-6 py-3 bg-gray-100 rounded-2xl flex items-center justify-center gap-3 opacity-75">
                  <svg className="w-7 h-7 text-gray-600" viewBox="0 0 24 24" fill="currentColor"><path d="M17.523 2H6.477C4.456 2 2.816 3.64 2.816 5.66v12.68c0 2.02 1.64 3.66 3.661 3.66h11.046c2.021 0 3.661-1.64 3.661-3.66V5.66C21.184 3.64 19.544 2 17.523 2zM12 17.77l-5.5-5.5 1.414-1.414L12 14.942l4.086-4.086 1.414 1.414L12 17.77z"/></svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Coming to</p>
                    <p className="text-sm font-semibold text-gray-700">Google Play</p>
                  </div>
                </div>
                <div className="px-6 py-3 bg-gray-100 rounded-2xl flex items-center justify-center gap-3 opacity-75">
                  <svg className="w-7 h-7 text-gray-600" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  <div className="text-left">
                    <p className="text-xs text-gray-500">Coming to</p>
                    <p className="text-sm font-semibold text-gray-700">App Store</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-600">
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary-500" /> Free to download</span>
                <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary-500" /> Android & iOS</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto max-w-md bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-3xl p-10 border border-primary-500/10">
                <div className="text-center space-y-6">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto shadow-2xl">
                    <Bell className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <p className="text-5xl font-bold mb-2">🚀</p>
                    <p className="text-xl font-bold text-gray-900">Launching Soon</p>
                    <p className="text-sm text-gray-500 mt-1">Stay tuned for something great</p>
                  </div>
                  <div className="flex justify-center gap-3">
                    {['Vehicles', 'Property', 'Insurance'].map((t,i) => (
                      <span key={i} className="px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-xs font-medium">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-gray-600">Here's what you'll get when the app launches</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: 'Lightning Fast', desc: 'Lightweight app that loads instantly and works smoothly on any device.' },
              { icon: Shield, title: 'Secure & Private', desc: 'Bank-level encryption keeps your documents and data safe.' },
              { icon: Smartphone, title: 'Works Offline', desc: 'Access your renewal information even without internet connection.' },
              { icon: Star, title: 'Easy to Use', desc: 'Simple, intuitive interface designed for everyone.' },
              { icon: Download, title: 'Regular Updates', desc: 'We constantly improve the app with new features and enhancements.' },
              { icon: CheckCircle2, title: 'Free Trial', desc: 'Start with our free plan and upgrade when you need more features.' },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4">
                  <f.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">System Requirements</h2>
          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🤖</span> Android
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary-500" /> Android 6.0 (Marshmallow) or higher</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary-500" /> 50MB free storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary-500" /> 2GB RAM recommended</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary-500" /> Internet for sync & notifications</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🍎</span> iOS
              </h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary-500" /> iOS 14.0 or higher</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary-500" /> iPhone 8 or newer</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary-500" /> 50MB free storage</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary-500" /> Internet for sync & notifications</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Don't Miss the Launch!</h2>
          <p className="text-lg text-primary-100 mb-10">Join thousands of Nepalis waiting for the easiest way to track renewals.</p>
          <button
            onClick={() => setShowNotify(true)}
            className="px-8 py-4 font-semibold text-primary-700 bg-white rounded-2xl hover:bg-primary-50 shadow-xl transition-all flex items-center gap-2 mx-auto cursor-pointer"
          >
            <Bell className="w-5 h-5" /> Notify Me on Launch
          </button>
        </div>
      </section>

      {/* Notify Modal */}
      {showNotify && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowNotify(false)} />
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-fade-in-up">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">You're on the list! 🎉</h3>
                <p className="text-gray-600">We'll notify you as soon as the app is ready.</p>
              </div>
            ) : (
              <>
                <button onClick={() => setShowNotify(false)} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Bell className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Notified 🚀</h3>
                  <p className="text-gray-600">Enter your email and we'll let you know the moment Sajilo Renew launches.</p>
                </div>
                <form onSubmit={handleNotifySubmit} className="space-y-4">
                  <input
                    type="email"
                    value={notifyEmail}
                    onChange={(e) => setNotifyEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full py-3.5 font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25 transition-all cursor-pointer"
                  >
                    Notify Me
                  </button>
                </form>
                <p className="text-xs text-gray-500 text-center mt-4">
                  No spam, just a launch notification. We promise!
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
