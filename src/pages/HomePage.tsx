import {
  Shield, Bell, Car, Home, FileText, CreditCard, Users, Smartphone,
  QrCode, CheckCircle2, ArrowRight, Star, Zap, Calendar, Mail,
  TrendingUp, ChevronDown, ChevronUp, AlertTriangle, Building2,
  Landmark, Receipt, Briefcase, HandCoins, X, Lock, Eye
} from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function HomePage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistSubmitted(true);
    setTimeout(() => { setShowWaitlist(false); setWaitlistSubmitted(false); }, 2500);
  };

  const features = [
    { icon: Car, title: 'Vehicle Renewal Reminders', desc: 'Never miss bluebook renewal, road tax, or vehicle fitness test dates.' },
    { icon: Landmark, title: 'Property Tax Reminders', desc: 'Track land revenue, property tax deadlines, and municipal dues.' },
    { icon: Shield, title: 'Insurance Tracking', desc: 'Monitor vehicle, health, and life insurance policy expiry dates.' },
    { icon: Briefcase, title: 'Business Document Alerts', desc: 'PAN/VAT renewal, company registration, and license expiry alerts.' },
    { icon: Users, title: 'Family Sharing', desc: 'Share renewal records with family members for complete coverage.' },
    { icon: Bell, title: 'Push Notifications', desc: 'Timely push, SMS, and email reminders before any deadline.' },
    { icon: QrCode, title: 'QR Payment Support', desc: 'Pay renewal fees directly via QR-based payment methods.' },
    { icon: FileText, title: 'Document Upload', desc: 'Securely store and access your important documents in the cloud.' },
  ];

  const steps = [
    { num: '01', title: 'Add Your Assets', desc: 'Register your vehicles, properties, documents, and insurance policies.', icon: FileText },
    { num: '02', title: 'Set Renewal Dates', desc: 'Enter expiry and renewal dates for each asset you own.', icon: Calendar },
    { num: '03', title: 'Receive Reminders', desc: 'Get timely push notifications, SMS, and email alerts before deadlines.', icon: Bell },
    { num: '04', title: 'Renew On Time', desc: 'Complete your renewals stress-free, never paying late fees again.', icon: CheckCircle2 },
  ];

  const assetTypes = [
    { icon: Car, label: 'Vehicles', desc: 'Bluebook, road tax, fitness', color: 'from-blue-500 to-blue-600' },
    { icon: Home, label: 'Land & Property', desc: 'Land revenue, property tax', color: 'from-emerald-500 to-emerald-600' },
    { icon: Receipt, label: 'PAN / VAT', desc: 'Tax registration renewal', color: 'from-orange-500 to-orange-600' },
    { icon: CreditCard, label: 'Licences', desc: 'Driving, professional', color: 'from-purple-500 to-purple-600' },
    { icon: Shield, label: 'Insurance', desc: 'Vehicle, health, life', color: 'from-red-500 to-red-600' },
    { icon: HandCoins, label: 'Loans', desc: 'EMI, payment schedules', color: 'from-amber-500 to-amber-600' },
    { icon: Building2, label: 'Agreements', desc: 'Lease, contracts, MoU', color: 'from-cyan-500 to-cyan-600' },
    { icon: Briefcase, label: 'Business Docs', desc: 'Registration, permits', color: 'from-pink-500 to-pink-600' },
  ];

  const plans = [
    { name: 'Free', price: { monthly: 0, yearly: 0 }, desc: 'Get started with basic features', features: ['Up to 2 assets', 'Push notifications', 'Basic reminders', 'Email support'], cta: 'Join Waitlist', popular: false },
    { name: 'Basic', price: { monthly: 199, yearly: 1990 }, desc: 'Perfect for individual users', features: ['Up to 10 assets', 'Push + SMS reminders', 'Document upload', 'Priority support', 'QR payment'], cta: 'Join Waitlist', popular: false },
    { name: 'Standard', price: { monthly: 499, yearly: 4990 }, desc: 'Great for families', features: ['Up to 50 assets', 'All reminder types', 'Document upload', 'Family sharing (3)', 'Priority support', 'Calendar view'], cta: 'Join Waitlist', popular: true },
    { name: 'Premium', price: { monthly: 999, yearly: 9990 }, desc: 'For businesses & power users', features: ['Unlimited assets', 'All reminder types', 'Unlimited documents', 'Family sharing (10)', 'Dedicated support', 'API access', 'Custom reports'], cta: 'Join Waitlist', popular: false },
  ];

  const faqs = [
    { q: 'How do reminders work?', a: 'Sajilo Renew sends you push notifications, SMS, and email alerts at customizable intervals before your renewal dates. You can set reminders for 30 days, 15 days, 7 days, and 1 day before expiry.' },
    { q: 'Is my document data secure?', a: 'Absolutely! We use bank-level AES-256 encryption for all stored documents. Your data is stored on secure cloud servers with regular backups. We never share your personal information with third parties.' },
    { q: 'How do payments work?', a: 'We support QR-based payments through eSewa, Khalti, and bank transfers. Simply scan the QR code or use our integrated payment gateway to pay your subscription or renewal fees.' },
    { q: 'Can I share records with family?', a: 'Yes! Our Family Sharing feature lets you share renewal records with family members. Standard plan allows up to 3 family members, and Premium allows up to 10.' },
    { q: 'What types of assets can I track?', a: 'You can track vehicles (bluebook, road tax), land/property, PAN/VAT, driving licenses, insurance policies, loans, business documents, agreements, and more.' },
    { q: 'When will the app launch?', a: 'We are working hard to launch Sajilo Renew very soon! Join our waitlist to be the first to know when we go live and get exclusive early-bird offers.' },
  ];

  return (
    <div className="overflow-hidden">
      <SEO
        title="Never Miss a Renewal Again"
        description="Nepal's smartest vehicle renewal (bluebook), property tax, and document expiry reminder app. Get timely push notifications, SMS alerts, and manage all your assets in one place."
        keywords="vehicle renewal nepal, bluebook reminder nepal, property tax tracker nepal, insurance renewal tracker, document expiry reminder nepal"
      />

      {/* ======================== HERO ======================== */}
      <section className="relative min-h-screen bg-[#060a13] overflow-hidden">

        {/* ── Background layers ── */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060a13] via-[#0b1120] to-[#060a13]" />
        <div className="absolute top-[-30%] left-[-15%] w-[800px] h-[800px] rounded-full bg-primary-600/[0.07] blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-accent-600/[0.05] blur-[150px]" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-500/[0.04] blur-[120px]" />
        <div className="absolute inset-0 hero-dot-pattern" />
        <div className="absolute inset-0 noise-overlay" />

        {/* ── Content ── */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28">

          {/* Center-aligned top section */}
          <div className="text-center max-w-4xl mx-auto">

            {/* Badge */}
            <div className="animate-fade-in-up opacity-0 mb-8" style={{ animationFillMode: 'forwards' }}>
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] border border-white/[0.07] text-[13px] font-medium text-primary-300/90 tracking-wider uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-400" />
                </span>
                Launching Soon in Nepal
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-in-up delay-100 opacity-0 font-display mb-7" style={{ animationFillMode: 'forwards' }}>
              <span className="block text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-white/95">
                Never miss your vehicle renewal,
              </span>
              <span className="block text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-white/95 mt-1">
                property tax, or document
              </span>
              <span className="block text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem] font-extrabold leading-[1.1] tracking-[-0.03em] mt-1">
                <span className="text-white/95">expiry </span>
                <span className="hero-gradient-text">again.</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fade-in-up delay-200 opacity-0 text-base sm:text-lg lg:text-xl text-gray-400/90 max-w-2xl mx-auto leading-relaxed font-light mb-10" style={{ animationFillMode: 'forwards' }}>
              Sajilo Renew tracks every deadline — bluebook, road tax, insurance, PAN/VAT — and sends smart reminders so you never pay a late fee&nbsp;again.
            </p>

            {/* Inline waitlist */}
            <div className="animate-fade-in-up delay-300 opacity-0 mb-10" style={{ animationFillMode: 'forwards' }}>
              <form
                onSubmit={(e) => { e.preventDefault(); setShowWaitlist(true); }}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-gray-500" />
                  <input
                    type="email" placeholder="Enter your email" required
                    className="w-full pl-11 pr-4 py-4 bg-white/[0.05] border border-white/[0.08] rounded-2xl text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-primary-500/50 focus:bg-white/[0.07] transition-all"
                  />
                </div>
                <button type="submit" className="px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl hover:from-primary-600 hover:to-primary-700 shadow-lg shadow-primary-600/20 transition-all hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap">
                  Join Waitlist <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <p className="text-[13px] text-gray-500/80 mt-3 tracking-wide">
                Free to join · No spam · Be first at launch
              </p>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-in-up delay-400 opacity-0 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-16 lg:mb-20" style={{ animationFillMode: 'forwards' }}>
              {[
                { icon: Lock, text: 'AES-256 Encrypted' },
                { icon: Bell, text: 'Smart Reminders' },
                { icon: Users, text: '500+ on Waitlist' },
                { icon: Zap, text: 'Built for Nepal' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[13px] text-gray-500/80">
                  <item.icon className="w-3.5 h-3.5 text-primary-400/70" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Bento dashboard preview ── */}
          <div className="max-w-5xl mx-auto animate-fade-in-up delay-500 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="grid grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4">

              {/* Card: Upcoming Renewals (large) */}
              <div className="col-span-6 lg:col-span-7 glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-6">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-primary-500/20 flex items-center justify-center">
                      <Calendar className="w-3.5 h-3.5 text-primary-400" />
                    </div>
                    <span className="text-xs font-semibold text-white/80 tracking-wide">Upcoming Renewals</span>
                  </div>
                  <span className="text-[10px] font-medium text-primary-400 bg-primary-400/10 px-2.5 py-1 rounded-full">5 due</span>
                </div>
                <div className="space-y-2.5">
                  {[
                    { name: 'Bluebook — Ba 1 Ja 2024', days: 3, status: 'urgent', icon: Car },
                    { name: 'Vehicle Insurance', days: 11, status: 'warning', icon: Shield },
                    { name: 'Property Tax — Ward 10', days: 49, status: 'ok', icon: Home },
                    { name: 'Driving License', days: 85, status: 'ok', icon: CreditCard },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:bg-white/[0.05] transition-colors">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${r.status === 'urgent' ? 'bg-red-500/15' : 'bg-white/[0.06]'}`}>
                        <r.icon className={`w-3.5 h-3.5 ${r.status === 'urgent' ? 'text-red-400' : r.status === 'warning' ? 'text-amber-400' : 'text-gray-400'}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[12px] font-medium text-white/80 truncate">{r.name}</p>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${r.status === 'urgent' ? 'bg-red-500/15 text-red-400' : r.status === 'warning' ? 'bg-amber-500/15 text-amber-400' : 'bg-white/[0.06] text-gray-400'}`}>
                        {r.days}d
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right column stack */}
              <div className="col-span-6 lg:col-span-5 grid grid-cols-2 gap-3 sm:gap-4">

                {/* Mini stat */}
                <div className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-lg bg-primary-500/15 flex items-center justify-center mb-3">
                    <FileText className="w-4 h-4 text-primary-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white font-display">12</p>
                    <p className="text-[10px] text-gray-500 mt-0.5 tracking-wide">Total Assets</p>
                  </div>
                </div>

                {/* Mini stat */}
                <div className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col justify-between">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center mb-3">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white font-display">3</p>
                    <p className="text-[10px] text-gray-500 mt-0.5 tracking-wide">Expiring Soon</p>
                  </div>
                </div>

                {/* Notification card */}
                <div className="col-span-2 glass-card rounded-2xl p-4 sm:p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-accent-500/15 flex items-center justify-center">
                      <Bell className="w-3.5 h-3.5 text-accent-400" />
                    </div>
                    <span className="text-xs font-semibold text-white/80 tracking-wide">Latest Alerts</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      { text: 'Bluebook expires in 3 days', time: '2h ago', dot: 'bg-red-400' },
                      { text: 'Insurance payment verified', time: '1d ago', dot: 'bg-primary-400' },
                    ].map((n, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <span className={`w-1.5 h-1.5 rounded-full ${n.dot} flex-shrink-0`} />
                        <p className="text-[11px] text-gray-400 flex-1 truncate">{n.text}</p>
                        <span className="text-[10px] text-gray-600 flex-shrink-0">{n.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom row: asset type pills */}
              <div className="col-span-6 lg:col-span-12 glass-card rounded-2xl p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-semibold text-white/60 tracking-wider uppercase">Supported Assets</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Vehicles', 'Property', 'Insurance', 'PAN/VAT', 'Licences', 'Loans', 'Agreements', 'Business Docs'].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[11px] font-medium text-gray-400 hover:text-primary-300 hover:border-primary-500/20 hover:bg-primary-500/[0.06] transition-all cursor-default">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Subtle glow beneath the bento */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-40 bg-primary-500/[0.06] blur-[100px] pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ======================== FEATURES ======================== */}
      <section className="py-20 lg:py-28 bg-white" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
              <Zap className="w-4 h-4" /> Powerful Features
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">
              Everything You Need to{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Stay on Track</span>
            </h2>
            <p className="text-lg text-gray-600">Manage all your renewals, deadlines, and documents from one powerful platform.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-gray-100 hover:border-primary-200 bg-white hover:bg-gradient-to-br hover:from-primary-50 hover:to-white shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary-100 group-hover:bg-primary-500 flex items-center justify-center mb-4 transition-colors duration-300">
                  <f.icon className="w-6 h-6 text-primary-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== HOW IT WORKS ======================== */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" /> Simple Process
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">
              How Sajilo Renew Works
            </h2>
            <p className="text-lg text-gray-600">Get started in minutes with our simple 4-step process</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <div key={i} className="relative text-center group">
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-300 to-primary-100" />
                )}
                <div className="relative inline-flex">
                  <div className="w-24 h-24 rounded-3xl bg-white shadow-lg group-hover:shadow-xl flex items-center justify-center transition-all border border-gray-100 group-hover:border-primary-200">
                    <s.icon className="w-10 h-10 text-primary-600" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white text-sm font-bold flex items-center justify-center shadow-lg">
                    {s.num.slice(-1)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== ASSET TYPES ======================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">
              Track All Your <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Asset Types</span>
            </h2>
            <p className="text-lg text-gray-600">From vehicles to business documents — we've got everything covered</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {assetTypes.map((a, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 text-center cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <a.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{a.label}</h3>
                <p className="text-xs text-gray-500">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== REMINDER SHOWCASE ======================== */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-900 via-gray-900 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-display tracking-tight">
                Smart Reminders That{' '}
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Never Let You Forget</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our intelligent reminder system ensures you're always ahead of your deadlines. Multiple channels, customizable timing, and smart alerts.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Bell, label: 'Push Notifications', desc: 'Instant alerts on your device' },
                  { icon: Smartphone, label: 'SMS Reminders', desc: 'Text messages for critical deadlines' },
                  { icon: Mail, label: 'Email Alerts', desc: 'Detailed email notifications' },
                  { icon: AlertTriangle, label: 'Expiry Warnings', desc: 'Escalating alerts as deadlines approach' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{item.label}</h4>
                      <p className="text-sm text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CSS-built notification preview */}
            <div className="relative">
              <div className="space-y-4 max-w-sm mx-auto">
                {[
                  { title: 'Bluebook Expiry Alert', body: 'Your vehicle Ba 1 Ja 2024 bluebook expires in 3 days. Renew now to avoid penalties.', time: '2 min ago', urgency: 'urgent' },
                  { title: 'Property Tax Reminder', body: 'Kathmandu Ward 10 property tax is due in 49 days. Plan your payment ahead.', time: '1 hour ago', urgency: 'normal' },
                  { title: 'Insurance Renewed ✓', body: 'Vehicle insurance policy #12345 has been successfully renewed until 2027.', time: '1 day ago', urgency: 'success' },
                ].map((n, i) => (
                  <div key={i} className={`p-5 rounded-2xl border backdrop-blur transition-all hover:-translate-y-1 ${n.urgency === 'urgent' ? 'bg-red-500/10 border-red-500/20' :
                    n.urgency === 'success' ? 'bg-primary-500/10 border-primary-500/20' :
                      'bg-white/5 border-white/10'
                    }`}>
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${n.urgency === 'urgent' ? 'bg-red-400' : n.urgency === 'success' ? 'bg-primary-400' : 'bg-accent-400'}`} />
                        <h4 className="text-sm font-semibold text-white">{n.title}</h4>
                      </div>
                      <span className="text-[10px] text-gray-500">{n.time}</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed">{n.body}</p>
                  </div>
                ))}
                <div className="absolute -inset-4 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== PRICING ======================== */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-white to-accent-50" id="pricing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4">
              <CreditCard className="w-4 h-4" /> Simple Pricing
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg text-gray-600">Start free, upgrade anytime. No hidden fees.</p>
          </div>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')} className={`relative w-14 h-7 rounded-full transition-colors cursor-pointer ${billingCycle === 'yearly' ? 'bg-primary-600' : 'bg-gray-300'}`}>
              <div className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${billingCycle === 'yearly' ? 'translate-x-7' : ''}`} />
            </button>
            <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>Yearly <span className="text-primary-600 font-semibold">(Save 17%)</span></span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <div key={i} className={`relative rounded-2xl p-6 transition-all duration-300 ${plan.popular ? 'bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-2xl shadow-primary-500/25 scale-[1.02] lg:scale-105' : 'bg-white border border-gray-200 hover:border-primary-200 hover:shadow-xl'}`}>
                {plan.popular && <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-yellow-400 text-yellow-900 text-xs font-bold">MOST POPULAR</div>}
                <div className="mb-6">
                  <h3 className={`text-lg font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
                  <p className={`text-sm mt-1 ${plan.popular ? 'text-primary-100' : 'text-gray-500'}`}>{plan.desc}</p>
                </div>
                <div className="mb-6">
                  <span className={`text-4xl font-black ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price[billingCycle] === 0 ? 'Free' : `रू${plan.price[billingCycle]}`}</span>
                  {plan.price[billingCycle] > 0 && <span className={`text-sm ${plan.popular ? 'text-primary-200' : 'text-gray-500'}`}>/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>}
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${plan.popular ? 'text-primary-200' : 'text-primary-500'}`} />
                      <span className={`text-sm ${plan.popular ? 'text-primary-50' : 'text-gray-600'}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => setShowWaitlist(true)} className={`w-full py-3 rounded-xl font-semibold text-sm transition-all cursor-pointer ${plan.popular ? 'bg-white text-primary-700 hover:bg-primary-50 shadow-lg' : 'bg-primary-600 text-white hover:bg-primary-700 shadow-md shadow-primary-500/20'}`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== PLATFORM PREVIEW ======================== */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display tracking-tight">
              A Platform Built for <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Clarity</span>
            </h2>
            <p className="text-lg text-gray-600">Every feature designed with simplicity and security in mind</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Eye, title: 'Dashboard Overview', desc: 'See all upcoming renewals, expired assets, and active plans at a single glance — clean, organized, and always up to date.', gradient: 'from-primary-500 to-emerald-500' },
              { icon: Calendar, title: 'Renewal Calendar', desc: 'Visual calendar view highlights every due date. Color-coded urgency ensures nothing gets overlooked.', gradient: 'from-accent-500 to-indigo-500' },
              { icon: Lock, title: 'Secure Document Vault', desc: 'Upload, store, and access your bluebook, insurance, and property papers with bank-level AES-256 encryption.', gradient: 'from-amber-500 to-orange-500' },
            ].map((card, i) => (
              <div key={i} className="group relative rounded-2xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className={`h-48 bg-gradient-to-br ${card.gradient} p-6 flex items-end`}>
                  <card.icon className="w-10 h-10 text-white/80 group-hover:scale-110 transition-transform" />
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-2 font-display">{card.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== TESTIMONIALS ======================== */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-display tracking-tight">What People Are Saying</h2>
            <p className="text-lg text-gray-600">Join the growing community waiting for Sajilo Renew</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Ram Sharma', role: 'Vehicle Owner, Kathmandu', text: 'Finally a service that understands the Nepali renewal system! I can\'t wait for this to launch. Signed up for the waitlist immediately.' },
              { name: 'Sita Gurung', role: 'Property Owner, Pokhara', text: 'Managing property tax deadlines is so stressful. Sajilo Renew looks like exactly what I need. Excited for the launch!' },
              { name: 'Bikash Thapa', role: 'Business Owner, Biratnagar', text: 'As a business owner with multiple vehicles and documents, I desperately need something like this. Counting down to launch day!' },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-sm">{t.name[0]}</div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== FAQ ======================== */}
      <section className="py-20 lg:py-28 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-display tracking-tight">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Got questions? We've got answers.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-gray-900">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-primary-600" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                {openFaq === i && <div className="px-5 pb-5 text-gray-600 leading-relaxed animate-fade-in">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== CTA ======================== */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-display tracking-tight">
            Be the First to Know When We Launch
          </h2>
          <p className="text-lg text-primary-100 mb-10 max-w-2xl mx-auto">
            Join our waitlist and get exclusive early access, special launch discounts, and be among the first Nepalis to never miss a renewal again.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => setShowWaitlist(true)} className="px-8 py-4 text-base font-semibold text-primary-700 bg-white rounded-2xl hover:bg-primary-50 shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer">
              Join the Waitlist <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => navigate('/contact')} className="px-8 py-4 text-base font-semibold text-white border-2 border-white/30 rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* ======================== WAITLIST MODAL ======================== */}
      {showWaitlist && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowWaitlist(false)} />
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-fade-in-up">
            {waitlistSubmitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">You're on the list! 🎉</h3>
                <p className="text-gray-600">We'll notify you as soon as Sajilo Renew launches. Thank you!</p>
              </div>
            ) : (
              <>
                <button onClick={() => setShowWaitlist(false)} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"><X className="w-5 h-5 text-gray-500" /></button>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Bell className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-display">Join the Waitlist 🚀</h3>
                  <p className="text-gray-600 text-sm">Be the first to know when Sajilo Renew launches and get exclusive early-bird benefits.</p>
                </div>
                <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                  <input type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-sm" required />
                  <input type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-sm" required />
                  <input type="tel" placeholder="Phone number (optional)" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-sm" />
                  <button type="submit" className="w-full py-3.5 font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25 transition-all cursor-pointer text-sm">
                    Join Waitlist
                  </button>
                </form>
                <p className="text-xs text-gray-500 text-center mt-4">We'll never spam you. Unsubscribe anytime.</p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
