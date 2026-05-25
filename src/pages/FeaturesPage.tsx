import {
  Bell, Car, Users, QrCode, CheckCircle2,
  ArrowRight, Zap, Cloud, Lock, RefreshCw, BarChart3,
  Globe, Palette, CreditCard
} from 'lucide-react';

import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function FeaturesPage() {
  const navigate = useNavigate();
  const featureSections = [
    {
      category: 'Asset Management',
      icon: Car,
      color: 'from-blue-500 to-blue-600',
      features: [
        { title: 'Add, Edit & Delete Assets', desc: 'Easily manage all your vehicles, properties, documents, and more with our intuitive interface.' },
        { title: 'Smart Categories', desc: 'Organize assets by type — vehicles, land, insurance, business documents, loans, and agreements.' },
        { title: 'Bulk Import', desc: 'Import multiple assets at once using our CSV upload feature for quick setup.' },
        { title: 'Asset Timeline', desc: 'View complete history of renewals, payments, and changes for each asset.' },
      ]
    },
    {
      category: 'Reminder System',
      icon: Bell,
      color: 'from-orange-500 to-orange-600',
      features: [
        { title: 'Push Notifications', desc: 'Instant alerts on your phone when deadlines are approaching. Never miss a renewal.' },
        { title: 'SMS Reminders', desc: 'Get text messages for critical deadlines even when you\'re offline.' },
        { title: 'Email Alerts', desc: 'Detailed email notifications with renewal information and payment links.' },
        { title: 'Customizable Timing', desc: 'Set reminders for 30, 15, 7, 3, and 1 day before expiry — your choice.' },
      ]
    },
    {
      category: 'Document Upload',
      icon: Cloud,
      color: 'from-emerald-500 to-emerald-600',
      features: [
        { title: 'Secure Cloud Storage', desc: 'Upload and store your documents safely with AES-256 encryption.' },
        { title: 'Photo Capture', desc: 'Take photos of documents directly from the app and save them instantly.' },
        { title: 'Multiple Formats', desc: 'Support for PDF, images, and other common document formats.' },
        { title: 'Easy Access', desc: 'Access your documents anytime, anywhere from any device.' },
      ]
    },
    {
      category: 'Subscription Plans',
      icon: CreditCard,
      color: 'from-purple-500 to-purple-600',
      features: [
        { title: 'Free Trial', desc: 'Start with 2 free assets to explore all features before committing.' },
        { title: 'Flexible Plans', desc: 'Choose from Basic, Standard, or Premium based on your needs.' },
        { title: 'Monthly & Yearly', desc: 'Pay monthly or save 17% with annual billing.' },
        { title: 'Easy Upgrades', desc: 'Upgrade or downgrade your plan anytime without losing data.' },
      ]
    },
    {
      category: 'Family Sharing',
      icon: Users,
      color: 'from-pink-500 to-pink-600',
      features: [
        { title: 'Shared Records', desc: 'Share renewal records with family members so everyone stays informed.' },
        { title: 'Role-Based Access', desc: 'Control who can view, edit, or manage shared assets.' },
        { title: 'Family Dashboard', desc: 'See all family members\' upcoming renewals in one unified view.' },
        { title: 'Notification Sharing', desc: 'Everyone in the family gets notified about shared asset deadlines.' },
      ]
    },
  ];

  const highlights = [
    { icon: Lock, title: 'Bank-Level Security', desc: 'AES-256 encryption protects all your data' },
    { icon: Globe, title: 'Works Everywhere', desc: 'Mobile app + web dashboard for any device' },
    { icon: RefreshCw, title: 'Real-Time Sync', desc: 'Changes sync instantly across all devices' },
    { icon: BarChart3, title: 'Smart Analytics', desc: 'Track spending and renewal patterns' },
    { icon: Palette, title: 'Beautiful Design', desc: 'Clean, intuitive interface anyone can use' },
    { icon: QrCode, title: 'QR Payments', desc: 'Pay fees directly via QR code scanning' },
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Premium Features"
        description="Explore all features of Sajilo Renew - from smart bluebook and vehicle alerts, automatic property tax calculation, push notifications, secure cloud storage to history tracking."
        keywords="sajilo renew features, bluebook reminder features, online property tax tracker, push notifications nepal"
      />
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" /> Feature-Rich Platform
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto">
            Every Feature You Need to{' '}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Stay Organized
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From smart reminders to secure document storage — explore everything Sajilo Renew offers.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {highlights.map((h, i) => (
              <div key={i} className="text-center p-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mx-auto mb-3">
                  <h.icon className="w-6 h-6 text-primary-600" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{h.title}</h4>
                <p className="text-xs text-gray-500">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Sections */}
      {featureSections.map((section, idx) => (
        <section key={idx} className={`py-20 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-12">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg`}>
                <section.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">{section.category}</h2>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.features.map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all">
                  <CheckCircle2 className="w-6 h-6 text-primary-500 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Experience All Features?</h2>
          <p className="text-lg text-primary-100 mb-10">Start your free trial today and explore everything Sajilo Renew has to offer.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/download')}
              className="px-8 py-4 font-semibold text-primary-700 bg-white rounded-2xl hover:bg-primary-50 shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/pricing')}
              className="px-8 py-4 font-semibold text-white border-2 border-white/30 rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              View Pricing
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
