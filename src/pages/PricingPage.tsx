import { CheckCircle2, X, CreditCard, ChevronDown, ChevronUp, ArrowRight, Bell } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistSubmitted(true);
    setTimeout(() => {
      setShowWaitlist(false);
      setWaitlistSubmitted(false);
    }, 2500);
  };

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, yearly: 0 },
      desc: 'Try the basics',
      features: ['2 assets', 'Push notifications', 'Basic reminders', 'Email support', 'Community access'],
      missing: ['SMS reminders', 'Document upload', 'Family sharing', 'QR payment', 'Priority support'],
      cta: 'Join Waitlist',
      popular: false,
    },
    {
      name: 'Basic',
      price: { monthly: 199, yearly: 1990 },
      desc: 'For individual users',
      features: ['10 assets', 'Push + SMS reminders', 'Document upload (100MB)', 'QR payment', 'Email support'],
      missing: ['Family sharing', 'Calendar view', 'API access', 'Custom reports'],
      cta: 'Join Waitlist',
      popular: false,
    },
    {
      name: 'Standard',
      price: { monthly: 499, yearly: 4990 },
      desc: 'Perfect for families',
      features: ['50 assets', 'All reminder types', 'Document upload (1GB)', 'Family sharing (3)', 'QR payment', 'Calendar view', 'Priority support'],
      missing: ['API access', 'Custom reports'],
      cta: 'Join Waitlist',
      popular: true,
    },
    {
      name: 'Premium',
      price: { monthly: 999, yearly: 9990 },
      desc: 'For businesses & power users',
      features: ['Unlimited assets', 'All reminder types', 'Unlimited documents', 'Family sharing (10)', 'QR payment', 'Calendar view', 'API access', 'Custom reports', 'Dedicated support'],
      missing: [],
      cta: 'Join Waitlist',
      popular: false,
    },
  ];

  const comparisonFeatures = [
    { feature: 'Number of Assets', free: '2', basic: '10', standard: '50', premium: 'Unlimited' },
    { feature: 'Push Notifications', free: true, basic: true, standard: true, premium: true },
    { feature: 'SMS Reminders', free: false, basic: true, standard: true, premium: true },
    { feature: 'Email Alerts', free: true, basic: true, standard: true, premium: true },
    { feature: 'Document Upload', free: false, basic: '100MB', standard: '1GB', premium: 'Unlimited' },
    { feature: 'Family Sharing', free: false, basic: false, standard: '3 members', premium: '10 members' },
    { feature: 'QR Payment', free: false, basic: true, standard: true, premium: true },
    { feature: 'Calendar View', free: false, basic: false, standard: true, premium: true },
    { feature: 'API Access', free: false, basic: false, standard: false, premium: true },
    { feature: 'Custom Reports', free: false, basic: false, standard: false, premium: true },
    { feature: 'Priority Support', free: false, basic: false, standard: true, premium: true },
    { feature: 'Dedicated Support', free: false, basic: false, standard: false, premium: true },
  ];

  const faqs = [
    { q: 'Can I change my plan later?', a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate the difference.' },
    { q: 'What payment methods will you accept?', a: 'We will accept eSewa, Khalti, bank transfers, and QR-based payments. International cards will also be supported for Nepali users abroad.' },
    { q: 'Will there be a refund policy?', a: 'Yes, we plan to offer a 7-day money-back guarantee for all paid plans. If you\'re not satisfied, contact us for a full refund.' },
    { q: 'When will Sajilo Renew launch?', a: 'We are working hard to launch soon! Join our waitlist to be the first to know and get exclusive early-bird discounts.' },
    { q: 'Do you offer discounts for organizations?', a: 'Yes! Contact our team for custom enterprise pricing with volume discounts and dedicated support.' },
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Flexible Plans & Pricing"
        description="Find the perfect plan for you or your business. Start free or upgrade to premium for unlimited assets, advanced SMS/WhatsApp reminders, and family sharing."
        keywords="sajilo renew pricing, premium reminder plan, bluebook tracker cost, commercial vehicle renewal software"
      />
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <CreditCard className="w-4 h-4" /> Simple, Transparent Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Perfect Plan</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, cancel anytime.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={`relative w-14 h-7 rounded-full transition-colors cursor-pointer ${billingCycle === 'yearly' ? 'bg-primary-600' : 'bg-gray-300'}`}
            >
              <div className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${billingCycle === 'yearly' ? 'translate-x-7' : ''}`} />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly <span className="text-primary-600 font-semibold">(Save 17%)</span>
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-2xl p-6 transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-2xl shadow-primary-500/25 lg:scale-105'
                    : 'bg-white border border-gray-200 hover:border-primary-200 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold">
                    MOST POPULAR
                  </div>
                )}
                <h3 className={`text-lg font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                <p className={`text-sm mt-1 mb-6 ${plan.popular ? 'text-primary-100' : 'text-gray-500'}`}>{plan.desc}</p>
                <div className="mb-6">
                  <span className={`text-4xl font-black ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price[billingCycle] === 0 ? 'Free' : `रू${plan.price[billingCycle]}`}
                  </span>
                  {plan.price[billingCycle] > 0 && (
                    <span className={`text-sm ${plan.popular ? 'text-primary-200' : 'text-gray-500'}`}>
                      /{billingCycle === 'monthly' ? 'mo' : 'yr'}
                    </span>
                  )}
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-primary-200' : 'text-primary-500'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-primary-50' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                  {plan.missing.map((f, j) => (
                    <li key={`m-${j}`} className="flex items-center gap-2 opacity-50">
                      <X className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-primary-300' : 'text-gray-400'}`} />
                      <span className={`text-sm line-through ${plan.popular ? 'text-primary-200' : 'text-gray-400'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowWaitlist(true)}
                  className={`w-full py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-white text-primary-700 hover:bg-primary-50'
                      : 'bg-primary-600 text-white hover:bg-primary-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                  <th className="p-4 font-semibold text-gray-900 text-center">Free</th>
                  <th className="p-4 font-semibold text-gray-900 text-center">Basic</th>
                  <th className="p-4 font-semibold text-primary-700 text-center bg-primary-50">Standard</th>
                  <th className="p-4 font-semibold text-gray-900 text-center">Premium</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={i} className="border-b border-gray-100 last:border-0">
                    <td className="p-4 text-sm font-medium text-gray-900">{row.feature}</td>
                    {['free', 'basic', 'standard', 'premium'].map((plan) => {
                      const val = row[plan as keyof typeof row];
                      return (
                        <td key={plan} className={`p-4 text-center ${plan === 'standard' ? 'bg-primary-50/50' : ''}`}>
                          {val === true ? (
                            <CheckCircle2 className="w-5 h-5 text-primary-500 mx-auto" />
                          ) : val === false ? (
                            <X className="w-5 h-5 text-gray-300 mx-auto" />
                          ) : (
                            <span className="text-sm font-medium text-gray-700">{val}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Payment Methods (Coming Soon)</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['eSewa', 'Khalti', 'Bank Transfer', 'QR Payment', 'Connect IPS'].map((method, i) => (
              <div key={i} className="px-6 py-3 rounded-xl bg-gray-50 border border-gray-200 text-sm font-medium text-gray-500">
                {method}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Pricing FAQ</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-primary-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Be First in Line for Launch</h2>
          <p className="text-lg text-primary-100 mb-10">Join the waitlist now and get exclusive early-bird discounts when we launch.</p>
          <button
            onClick={() => setShowWaitlist(true)}
            className="px-8 py-4 font-semibold text-primary-700 bg-white rounded-2xl hover:bg-primary-50 shadow-xl transition-all flex items-center gap-2 mx-auto cursor-pointer"
          >
            Join Waitlist <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setShowWaitlist(false)} />
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-fade-in-up">
            {waitlistSubmitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list! 🎉</h3>
                <p className="text-gray-600">We'll notify you as soon as Sajilo Renew launches.</p>
              </div>
            ) : (
              <>
                <button onClick={() => setShowWaitlist(false)} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                  <X className="w-5 h-5 text-gray-500" />
                </button>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Bell className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist 🚀</h3>
                  <p className="text-gray-600">Be the first to know when Sajilo Renew launches.</p>
                </div>
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none" required />
                  <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none" required />
                  <button type="submit" className="w-full py-3.5 font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg transition-all cursor-pointer">
                    Join Waitlist
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
