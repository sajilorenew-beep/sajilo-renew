import { Search, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function FAQPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'registration', label: 'Registration' },
    { id: 'payments', label: 'Payments' },
    { id: 'reminders', label: 'Reminders' },
    { id: 'assets', label: 'Assets' },
    { id: 'technical', label: 'Technical' },
  ];

  const faqs = [
    { category: 'registration', q: 'How do I create an account?', a: 'Download the Sajilo Renew app or visit our website, click "Get Started", and fill in your name, phone number, email, and password. You can also register using your Google account for faster setup.' },
    { category: 'registration', q: 'Is my account approved immediately?', a: 'Most accounts are approved instantly. However, business accounts may require manual verification which typically takes 1-2 business days. You\'ll receive a notification once approved.' },
    { category: 'registration', q: 'Can I use the app without creating an account?', a: 'You need to create a free account to use Sajilo Renew. This ensures your data is saved securely and synced across devices.' },
    { category: 'payments', q: 'What payment methods are accepted?', a: 'We accept eSewa, Khalti, Connect IPS, bank transfers, and QR-based payments. You can also pay using international Visa/Mastercard for users abroad.' },
    { category: 'payments', q: 'Is there a refund policy?', a: 'Yes! We offer a 7-day money-back guarantee for all paid plans. If you\'re not satisfied, contact our support team within 7 days for a full refund.' },
    { category: 'payments', q: 'Can I switch plans mid-subscription?', a: 'Absolutely! You can upgrade or downgrade anytime. When upgrading, you\'ll be charged the prorated difference. When downgrading, the remaining balance carries over.' },
    { category: 'reminders', q: 'How do push notifications work?', a: 'Once you add an asset with a renewal date, our system automatically schedules push notifications at 30, 15, 7, 3, and 1 day before the deadline. You can customize these intervals.' },
    { category: 'reminders', q: 'Will I get SMS reminders?', a: 'SMS reminders are available on Basic, Standard, and Premium plans. You\'ll receive text messages for critical deadlines even when you\'re not connected to the internet.' },
    { category: 'reminders', q: 'Can I customize reminder timing?', a: 'Yes! In your settings, you can choose when to receive reminders — from 90 days before to 1 day before. You can set multiple reminder intervals for the same asset.' },
    { category: 'assets', q: 'What types of assets can I track?', a: 'Vehicles (bluebook, road tax, fitness), land/property (revenue, property tax), PAN/VAT, driving licenses, insurance policies, loans, business registrations, agreements, and more.' },
    { category: 'assets', q: 'Can I upload documents for my assets?', a: 'Yes! You can upload photos and PDFs of your documents. Basic plan offers 100MB, Standard offers 1GB, and Premium offers unlimited storage with AES-256 encryption.' },
    { category: 'assets', q: 'How does family sharing work?', a: 'Standard and Premium users can invite family members to view and manage shared assets. Each member gets their own login but can see shared renewal deadlines and receive reminders.' },
    { category: 'technical', q: 'Is my data secure?', a: 'We use AES-256 encryption for all stored data, SSL/TLS for data in transit, and regular security audits. Your documents are stored on enterprise-grade cloud servers with 99.9% uptime.' },
    { category: 'technical', q: 'Does the app work offline?', a: 'Basic features work offline. Any changes you make will sync automatically when you reconnect to the internet. Push notifications require an internet connection.' },
    { category: 'technical', q: 'Which devices are supported?', a: 'Sajilo Renew is available as an Android app, iOS app, and web dashboard. Your data syncs seamlessly across all platforms in real-time.' },
    { category: 'technical', q: 'How do I contact support?', a: 'You can reach us via email at support@sajilorenew.com, call +977-9800000000, or use the in-app chat feature. Premium users get dedicated support with priority response.' },
  ];

  const filtered = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' ||
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-20">
      <SEO
        title="Frequently Asked Questions"
        description="Get answers to all your questions about vehicle bluebook renewal, property tax payments, security, notifications, and using the Sajilo Renew app."
        keywords="faq bluebook renewal nepal, how to pay road tax online nepal, sajilo renew help"
      />
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" /> Help Center
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Find answers to common questions about Sajilo Renew
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search for answers..."
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories + FAQ List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setOpenFaq(null); }}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {filtered.length === 0 ? (
              <div className="text-center py-12">
                <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No matching questions found. Try a different search term.</p>
              </div>
            ) : (
              filtered.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-gray-200 overflow-hidden hover:border-primary-200 transition-colors">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                    {openFaq === i ? <ChevronUp className="w-5 h-5 text-primary-600 flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 text-gray-600 leading-relaxed animate-fade-in">{faq.a}</div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Still need help */}
          <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Can't find what you're looking for? Our support team is here to help.</p>
            <button
              onClick={() => navigate('/contact')}
              className="px-6 py-3 font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg transition-all cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
