import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Loader2, AlertTriangle } from 'lucide-react';
import { useState } from 'react';
import SEO from '../components/SEO';
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const templateParams = {
    user_name: formData.name,
    user_email: formData.email,
    user_subject: formData.subject,
    user_message: formData.message,
    ...(formData.phone && { user_phone: formData.phone }),
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitted(false);

    const serviceId = "service_cb0x43a";
    const templateId = "template_pha9tgl";
    const publicKey = "dDfZ_-sujk5nfHyAa";

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error: any) {
      console.error('Contact form submission error:', error);
      setSubmitError(
        error?.text || error?.message || 'Failed to send your message. Please check your network connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <SEO
        title="Get in Touch"
        description="Have questions or need support with your bluebook or document renewals? Contact the Sajilo Renew team. We are here to help you 24/7."
        keywords="sajilo renew contact, customer support sajilo renew, nepal document tracker support"
      />
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <MessageSquare className="w-4 h-4" /> Get in Touch
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            We'd Love to <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Hear From You</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about Sajilo Renew? Need help? We're here for you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  {[
                    { icon: MapPin, label: 'Office Address', value: 'Jhapa, Koshi\nNepal 44600' },
                    { icon: Phone, label: 'Phone', value: '+977-9800000000\n+977-01-4000000' },
                    { icon: Mail, label: 'Email', value: 'info@sajilorenew.com\nsupport@sajilorenew.com' },
                    { icon: Clock, label: 'Business Hours', value: 'Sun - Fri: 10:00 AM - 6:00 PM\nSaturday: 10:00 AM - 2:00 PM' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.label}</h4>
                        <p className="text-sm text-gray-600 whitespace-pre-line">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {['Facebook', 'Twitter', 'Instagram', 'LinkedIn'].map((social, i) => (
                    <a key={i} href="#" className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-primary-100 text-sm font-medium text-gray-600 hover:text-primary-700 transition-colors">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                {submitted && (
                  <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-100 text-green-800 font-medium text-sm flex items-center gap-2">
                    <span>✓</span> Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </div>
                )}
                {submitError && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 text-red-700 text-sm flex items-start gap-2.5">
                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{submitError}</span>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all disabled:opacity-50"
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all disabled:opacity-50"
                        placeholder="you@example.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all disabled:opacity-50"
                        placeholder="+977-98XXXXXXXX"
                        disabled={isSubmitting}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <select
                        required
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all disabled:opacity-50"
                        disabled={isSubmitting}
                      >
                        <option value="">Select a topic</option>
                        <option>General Inquiry</option>
                        <option>Technical Support</option>
                        <option>Billing & Payments</option>
                        <option>Feature Request</option>
                        <option>Partnership</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none disabled:opacity-50"
                      placeholder="How can we help you?"
                      disabled={isSubmitting}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3 font-semibold text-white bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl hover:from-primary-700 hover:to-primary-800 shadow-lg shadow-primary-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      {/* <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 bg-gray-200 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-primary-500 mx-auto mb-3" />
              <p className="text-gray-600 font-medium">Putalisadak, Kathmandu, Nepal</p>
              <p className="text-sm text-gray-500">Map integration available with Google Maps API key</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
