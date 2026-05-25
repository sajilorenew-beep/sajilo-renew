import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Menu, X, Home, Zap, CreditCard, Users,
  HelpCircle, MessageSquare, Bell, ArrowRight, Sparkles,
  ChevronRight, Download
} from 'lucide-react';
import {
  Sheet, SheetTrigger, SheetContent, SheetHeader,
  SheetTitle, SheetDescription,
} from './ui/Sheet';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/', icon: Home, desc: 'Back to homepage' },
    { label: 'Features', path: '/features', icon: Zap, desc: 'What we offer' },
    { label: 'Pricing', path: '/pricing', icon: CreditCard, desc: 'Plans & pricing' },
    { label: 'About', path: '/about', icon: Users, desc: 'Our story & team' },
    // { label: 'Blog', path: '/blog', icon: BookOpen, desc: 'Tips & guides' },
    { label: 'FAQ', path: '/faq', icon: HelpCircle, desc: 'Common questions' },
    { label: 'Contact', path: '/contact', icon: MessageSquare, desc: 'Get in touch' },
  ];

  const transparentOnDark = isHomePage && !scrolled;

  const handleNavigate = (path: string) => {
    navigate(path);
    setSheetOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
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

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all cursor-pointer ${location.pathname === link.path
                    ? transparentOnDark
                      ? 'text-primary-300 bg-white/10'
                      : 'text-primary-700 bg-primary-50'
                    : transparentOnDark
                      ? 'text-gray-300 hover:text-white hover:bg-white/[0.06]'
                      : 'text-gray-600 hover:text-primary-700 hover:bg-gray-50'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setShowWaitlist(true)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-xl transition-all cursor-pointer ${transparentOnDark
                  ? 'text-white bg-white/10 border border-white/15 hover:bg-white/15 shadow-lg backdrop-blur'
                  : 'text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/30'
                  }`}
              >
                Join Waitlist
              </button>
            </div>

            {/* Mobile Menu Trigger — Sheet */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <button
                  className={`lg:hidden p-2 rounded-xl cursor-pointer transition-colors ${transparentOnDark
                    ? 'text-gray-300 hover:bg-white/10'
                    : 'text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>

              <SheetContent>
                <SheetHeader>
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                      <img src='/images/logo.png' alt='sajilo-renew' />
                    </div>
                    <SheetTitle>
                      Sajilo<span className="text-primary-600">Renew</span>
                    </SheetTitle>
                  </div>
                  <SheetDescription>Navigate the site</SheetDescription>
                </SheetHeader>

                {/* Nav Links */}
                <div className="px-4 py-2">
                  <p className="px-2 py-2 text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em]">
                    Menu
                  </p>
                  <nav className="space-y-1">
                    {navLinks.map((link) => {
                      const isActive = location.pathname === link.path;
                      return (
                        <button
                          key={link.path}
                          onClick={() => handleNavigate(link.path)}
                          className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all cursor-pointer group ${isActive
                            ? 'bg-primary-50 text-primary-700'
                            : 'text-gray-700 hover:bg-gray-50'
                            }`}
                        >
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${isActive
                              ? 'bg-primary-100 text-primary-600'
                              : 'bg-gray-100 text-gray-500 group-hover:bg-primary-50 group-hover:text-primary-600'
                              }`}
                          >
                            <link.icon className="w-[18px] h-[18px]" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-sm font-semibold ${isActive ? 'text-primary-700' : 'text-gray-800'
                                }`}
                            >
                              {link.label}
                            </p>
                            <p className="text-[11px] text-gray-400 leading-tight">
                              {link.desc}
                            </p>
                          </div>
                          <ChevronRight
                            className={`w-4 h-4 flex-shrink-0 transition-colors ${isActive ? 'text-primary-400' : 'text-gray-300 group-hover:text-gray-400'
                              }`}
                          />
                        </button>
                      );
                    })}
                  </nav>
                </div>

                {/* Quick Links */}
                <div className="px-4 py-2">
                  <p className="px-2 py-2 text-[10px] font-semibold text-gray-400 uppercase tracking-[0.15em]">
                    Quick Links
                  </p>
                  <div className="space-y-1">
                    <button
                      onClick={() => handleNavigate('/download')}
                      className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all cursor-pointer group text-gray-700 hover:bg-gray-50"
                    >
                      <div className="w-9 h-9 rounded-lg bg-gray-100 text-gray-500 flex items-center justify-center group-hover:bg-amber-50 group-hover:text-amber-600 transition-colors">
                        <Download className="w-[18px] h-[18px]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-800">Download</p>
                        <p className="text-[11px] text-gray-400 leading-tight">Get the app</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0" />
                    </button>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-gray-50/80 backdrop-blur-sm">
                  <button
                    onClick={() => {
                      setSheetOpen(false);
                      setTimeout(() => setShowWaitlist(true), 200);
                    }}
                    className="w-full py-3.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    Join the Waitlist
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] text-gray-400 text-center mt-2.5">
                    Free to join · No spam
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Waitlist Modal */}
      {showWaitlist && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setShowWaitlist(false)}
          />
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 animate-fade-in-up">
            <button
              onClick={() => setShowWaitlist(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 font-display mb-2">
                Coming Soon! 🚀
              </h3>
              <p className="text-gray-600 text-sm">
                Be the first to know when Sajilo Renew launches. Join our
                waitlist for early access and exclusive offers.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowWaitlist(false);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-sm"
                required
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-sm"
                required
              />
              <input
                type="tel"
                placeholder="Phone number (optional)"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none text-sm"
              />
              <button
                type="submit"
                className="w-full py-3.5 font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25 transition-all cursor-pointer text-sm"
              >
                Join the Waitlist
              </button>
            </form>
            <p className="text-xs text-gray-500 text-center mt-4">
              We'll never share your info. Unsubscribe anytime.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
