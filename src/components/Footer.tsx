import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Mail, Phone, MapPin, ChevronDown, ArrowRight,
  Home, Zap, CreditCard, Users, HelpCircle,
  MessageSquare, Shield, FileText, Download
} from 'lucide-react';

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [footerEmail, setFooterEmail] = useState('');
  const navigate = useNavigate();

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerEmail.trim()) return;

    window.dispatchEvent(
      new CustomEvent('open-waitlist', {
        detail: { email: footerEmail.trim() },
      })
    );
    setFooterEmail('');
  };

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const linkSections = [
    {
      id: 'pages',
      title: 'Pages',
      links: [
        { label: 'Home', path: '/', icon: Home },
        { label: 'Features', path: '/features', icon: Zap },
        { label: 'Pricing', path: '/pricing', icon: CreditCard },
        { label: 'About Us', path: '/about', icon: Users },
        // { label: 'Blog', path: '/blog', icon: BookOpen },
        { label: 'Contact', path: '/contact', icon: MessageSquare },
      ],
    },
    {
      id: 'support',
      title: 'Support & Legal',
      links: [
        { label: 'FAQ', path: '/faq', icon: HelpCircle },
        { label: 'Privacy Policy', path: '/privacy', icon: Shield },
        { label: 'Terms & Conditions', path: '/terms', icon: FileText },
        { label: 'Download', path: '/download', icon: Download },
      ],
    },
  ];

  return (
    <footer className="bg-[#d9f5ef] text-slate-900 relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent" />

      {/* ─── Top: Newsletter / Waitlist CTA ─── */}
      <div className="border-b border-slate-300/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display tracking-tight">
                Stay updated on our launch
              </h3>
              <p className="text-sm text-slate-700 mt-1.5 leading-relaxed">
                Join the waitlist — be first to know when Sajilo Renew goes live.
              </p>
            </div>
            <form
              onSubmit={handleFooterSubmit}
              className="flex flex-col sm:flex-row gap-3 w-full md:w-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                className="flex-1 md:w-64 px-4 py-3 bg-white/80 border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-500 text-sm focus:outline-none focus:border-slate-400 transition-all"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-600/20 transition-all flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                Join Waitlist
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ─── Main Footer Content ─── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Desktop / Tablet: Grid layout */}
        {/* Mobile: Stacked with collapsible sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6">

          {/* ── Brand Column ── */}
          <div className="sm:col-span-2 lg:col-span-4 lg:pr-6">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1 cursor-pointer"
            >
              <div className="w-10 h-10 xl flex items-center justify-center ">
                <img src='/images/logo.png' alt='Sajilo Renew' />
              </div>
              <span className='bg-linear-to-r from-green-700 to-blue-800 bg-clip-text text-transparent font-bold text-xl'>Sajilo Renew</span>
            </Link>
            <p className="text-sm text-slate-700 leading-relaxed max-w-xs mb-5">
              Nepal's upcoming #1 vehicle renewal, property tax, and document expiry reminder platform. Launching&nbsp;soon!
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400" />
              </span>
              <span className="text-[11px] font-medium text-amber-400 tracking-wide">Coming Soon</span>
            </div>
            {/* Social */}
            <div className="flex gap-2.5">
              {[
                { label: 'Facebook', path: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z', href: "https://www.facebook.com/profile.php?id=61590066971096" },
                {
                  label: 'LinkedIn', path: 'M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.119 20.452H3.56V9h3.559v11.452zM5.339 7.433a2.063 2.063 0 110-4.126 2.063 2.063 0 010 4.126zM20.452 20.452h-3.558v-5.569c0-1.328-.026-3.037-1.851-3.037-1.853 0-2.136 1.447-2.136 2.941v5.665H9.349V9h3.414v1.561h.049c.476-.9 1.637-1.851 3.37-1.851 3.604 0 4.27 2.372 4.27 5.456v6.286z', href: 'https://www.linkedin.com/company/sajilo-renew/',
                },
                {
                  label: 'Instagram', path: 'M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm8.875 2.125a.875.875 0 11-1.75 0 .875.875 0 011.75 0zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z', href: 'https://www.instagram.com/sajilo_renew/'
                },
                {
                  label: 'TikTok', path: 'M12 0C5.373 0 0 5.373 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12C24 5.373 18.627 0 12 0zm3.847 6.144v3.394c0 1.312-.173 2.466-.49 3.44a5.034 5.034 0 01-1.322 1.886 4.953 4.953 0 01-1.923 1.159 7.7 7.7 0 01-2.593.406c-1.785 0-3.404-.597-4.683-1.634l1.034-1.675a8.8 8.8 0 003.182 1.393c1.691.449 3.411.086 4.832-1.005.27-.203.55-.43.823-.696V6.144h1.46zM6.301 8.667a5.042 5.042 0 00-.106 1.996 5.145 5.145 0 001.397 3.358 4.85 4.85 0 003.173 1.357 4.976 4.976 0 001.726-.294 3.8 3.8 0 001.397-1.046c.507-.5.897-1.104 1.135-1.775l.023.01v2.104c0 .232-.01.464-.03.694-.11 1.1-.45 2.148-1.02 3.058a6.2 6.2 0 01-2.23 2.172 6.483 6.483 0 01-2.72.63 6.09 6.09 0 01-2.737-.687 6.112 6.112 0 01-2.202-1.82A6.092 6.092 0 013.43 14.47a5.988 5.988 0 01-.312-2.35 6.127 6.127 0 01.653-2.625l2.53 1.19zm5.352 7.782c1.65-.74 2.907-2.11 3.53-3.832.17-.43.28-.89.32-1.36h1.53c.01.24.01.48 0 .72a6.848 6.848 0 01-.6 2.11 5.71 5.71 0 01-1.45 2.27 5.308 5.308 0 01-1.83 1.33 4.78 4.78 0 01-1.99.44 6.8 6.8 0 01-3.08-.71 5.664 5.664 0 01-1.92-1.35 5.366 5.366 0 01-1.18-1.78 5.154 5.154 0 01-.33-2.15h1.5c.04 1.22.62 2.4 1.7 3.27a4.202 4.202 0 003.45.88z', href: 'https://www.tiktok.com/@sajilo.renew'
                }
              ].map((social, i) => (
                <a key={i} href={social.href} aria-label={social.label} className="w-9 h-9 rounded-lg bg-white/15 border border-white/25 hover:bg-white/25 hover:border-white/40 flex items-center justify-center transition-all duration-200">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d={social.path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Link Columns — Collapsible on mobile ── */}
          {linkSections.map((section) => (
            <div key={section.id} className="lg:col-span-2">
              {/* Mobile: Collapsible header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="sm:hidden w-full flex items-center justify-between py-3 border-b border-slate-300/70 cursor-pointer"
              >
                <h3 className="text-sm font-semibold text-slate-900">{section.title}</h3>
                <ChevronDown className={`w-4 h-4 text-slate-700 transition-transform duration-200 ${openSection === section.id ? 'rotate-180' : ''}`} />
              </button>

              {/* Desktop/Tablet: Always visible heading */}
              <h3 className="hidden sm:block text-xs font-semibold text-slate-700 uppercase tracking-[0.15em] mb-4">
                {section.title}
              </h3>

              {/* Links list — always visible on sm+, toggled on mobile */}
              <ul className={`space-y-1 overflow-hidden transition-all duration-300 ease-in-out ${openSection === section.id ? 'max-h-96 pt-2 pb-3' : 'max-h-0 sm:max-h-none'
                }`}>
                {section.links.map((link) => (
                  <li key={link.path}>
                    <button
                      onClick={() => handleNavigate(link.path)}
                      className="w-full flex items-center gap-2.5 px-2 py-2 rounded-lg text-sm text-slate-700 hover:text-slate-900 hover:bg-slate-200/80 transition-all cursor-pointer group"
                    >
                      <link.icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-slate-900 transition-colors flex-shrink-0" />
                      <span>{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Contact Column ── */}
          <div className="lg:col-span-4">
            {/* Mobile: Collapsible header */}
            <button
              onClick={() => toggleSection('contact')}
              className="sm:hidden w-full flex items-center justify-between py-3 border-b border-slate-300/70 cursor-pointer"
            >
              <h3 className="text-sm font-semibold text-slate-900">Contact Us</h3>
              <ChevronDown className={`w-4 h-4 text-slate-700 transition-transform duration-200 ${openSection === 'contact' ? 'rotate-180' : ''}`} />
            </button>
            <h3 className="hidden sm:block text-xs font-semibold text-slate-700 uppercase tracking-[0.15em] mb-4">
              Contact Us
            </h3>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection === 'contact' ? 'max-h-96 pt-2 pb-3' : 'max-h-0 sm:max-h-none'
              }`}>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-200/70 border border-slate-300/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">Address</p>
                    <p className="text-sm text-slate-800">Birtamode, Jhapa</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-200/70 border border-slate-300/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">Phone</p>
                    <p className="text-sm text-slate-800">+977 9768625652</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-200/70 border border-slate-300/60 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-3.5 h-3.5 text-slate-900" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-600 mb-0.5">Email</p>
                    <p className="text-sm text-slate-800">info@sajilorenew.com</p>
                  </div>
                </li>
              </ul>
              <p className="text-[11px] text-slate-600 uppercase tracking-wider font-medium mb-2.5">Coming soon on</p>
              <div className="flex gap-2">
                <div className="flex-1 sm:flex-none px-4 py-2.5 bg-slate-200/60 border border-slate-300/70 rounded-xl flex items-center justify-center sm:justify-start gap-2.5 opacity-90">
                  <svg className="w-5 h-5 text-slate-700" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-1.04l2.572 1.487c.5.29.5.79 0 1.08l-2.572 1.488-2.537-2.528 2.537-2.527zM5.864 2.658L16.8 8.991l-2.302 2.302-8.634-8.635z" />
                  </svg>
                  <div>
                    <p className="text-[9px] text-slate-600 leading-none">GET IT ON</p>
                    <p className="text-xs font-semibold text-slate-900 leading-tight">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── Bottom Bar ─── */}
      <div className="border-t border-slate-300/60">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-600 order-2 sm:order-1">
              © {new Date().getFullYear()} Sajilo Renew Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4 order-1 sm:order-2">
              <Link to="/privacy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xs text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Privacy</Link>
              <span className="text-slate-400">·</span>
              <Link to="/terms" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-xs text-slate-600 hover:text-slate-900 transition-colors cursor-pointer">Terms</Link>
              <span className="text-slate-400">·</span>
              <span className="text-xs text-slate-600">Made in Nepal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
