import { Target, Heart, Shield, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function AboutPage() {
  const navigate = useNavigate();
  const team = [
    { name: 'Rajesh Shrestha', role: 'Founder & CEO', avatar: 'RS' },
    { name: 'Anita Maharjan', role: 'CTO', avatar: 'AM' },
    { name: 'Sunil Tamang', role: 'Head of Product', avatar: 'ST' },
    { name: 'Priya Adhikari', role: 'Lead Designer', avatar: 'PA' },
  ];

  return (
    <div className="pt-20">
      <SEO
        title="Our Story & Mission"
        description="Learn about Sajilo Renew, our mission to simplify asset management and renewals in Nepal, and meet the team behind Nepal's leading reminder platform."
        keywords="sajilo renew story, sajilo renew team, vehicle renewal app nepal, tech startup nepal"
      />
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" /> Our Story
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Making Renewals{' '}
              <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Sajilo</span>{' '}
              for Nepal
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Sajilo Renew was born from a simple frustration — missing renewal deadlines, paying late fees, and losing track of important documents. We built this app to solve these problems for every Nepali citizen.
            </p>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The Problem We Solve</h2>
              <div className="space-y-4">
                {[
                  'Thousands of Nepali vehicle owners pay late fees every year for missed bluebook renewals',
                  'Property tax deadlines are hard to track across multiple municipalities',
                  'Insurance policies expire without notice, leaving families unprotected',
                  'Business owners lose track of PAN/VAT renewal and registration dates',
                  'Important documents get lost or damaged without proper digital backup',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-red-500 text-xs font-bold">✕</span>
                    </div>
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <div className="space-y-4">
                {[
                  'Automatic push notifications, SMS, and email reminders before any deadline',
                  'One dashboard for all your vehicles, properties, documents, and insurance',
                  'Secure cloud storage for all your important documents',
                  'Family sharing so everyone stays informed',
                  'Simple, affordable subscription plans starting with a free trial',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-primary-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To ensure no Nepali citizen ever misses an important renewal deadline by providing smart, timely reminders and easy document management.' },
              { icon: Heart, title: 'Our Values', desc: 'We believe in simplicity, security, and accessibility. Every feature we build is designed to make life easier for everyday Nepali people.' },
              { icon: Shield, title: 'Our Promise', desc: 'Your data is safe with us. We use bank-level encryption, never share your information, and give you full control over your documents.' },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="w-14 h-14 rounded-2xl bg-primary-100 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Passionate people building Nepal's best renewal app</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="text-center group">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-all">
                  {member.avatar}
                </div>
                <h3 className="font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { num: '10,000+', label: 'Active Users' },
              { num: '50,000+', label: 'Reminders Sent' },
              { num: '99.9%', label: 'Uptime' },
              { num: '4.9★', label: 'User Rating' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-3xl sm:text-4xl font-black text-white mb-2">{stat.num}</p>
                <p className="text-primary-200 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 mb-8">Join thousands of users who trust Sajilo Renew</p>
          <button
            onClick={() => navigate('/download')}
            className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl hover:from-primary-700 hover:to-primary-800 shadow-xl shadow-primary-500/25 transition-all flex items-center gap-2 mx-auto cursor-pointer"
          >
            Start Free Trial <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
