import { Shield } from 'lucide-react';
import SEO from '../components/SEO';

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      <SEO
        title="Privacy Policy"
        description="Your privacy and security are our top priorities. Read the Sajilo Renew Privacy Policy to understand how we protect your personal and asset data."
        keywords="privacy policy sajilo renew, data security nepal app"
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" /> Your Privacy Matters
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 1, 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray ">
          {[
            { title: '1. Information We Collect', content: 'We collect information you provide directly to us, including your name, email address, phone number, and documents you upload. We also collect usage data such as app interactions, device information, and IP addresses to improve our services.' },
            { title: '2. How We Use Your Information', content: 'We use your information to: provide and maintain Sajilo Renew services, send renewal reminders and notifications, process payments, improve our app and services, communicate with you about updates and offers, and comply with legal obligations.' },
            { title: '3. Data Storage & Security', content: 'All user data is stored on enterprise-grade cloud servers with AES-256 encryption at rest and SSL/TLS encryption in transit. We conduct regular security audits and penetration testing. Your documents are stored in isolated, encrypted containers. We maintain daily backups with 99.9% uptime guarantee.' },
            { title: '4. Document Security', content: 'Documents you upload (bluebook copies, insurance certificates, property papers, etc.) are encrypted using bank-level AES-256 encryption. Only you and authorized family members can access your documents. Our staff cannot view your document contents without explicit permission.' },
            { title: '5. Data Sharing', content: 'We do NOT sell, rent, or share your personal information with third parties for marketing purposes. We may share data with: payment processors (eSewa, Khalti) for payment processing, cloud service providers for data storage, and law enforcement when legally required.' },
            { title: '6. User Rights', content: 'You have the right to: access, update, or delete your personal data, export your data in a standard format, opt out of marketing communications, request information about how your data is used, and delete your account and all associated data permanently.' },
            { title: '7. Cookies & Tracking', content: 'We use essential cookies for authentication and session management. We use analytics cookies to understand app usage patterns (with your consent). You can disable non-essential cookies in your browser settings.' },
            { title: '8. Children\'s Privacy', content: 'Sajilo Renew is not intended for users under 16 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will delete it immediately.' },
            { title: '9. Changes to This Policy', content: 'We may update this Privacy Policy from time to time. We will notify you of any material changes via email or in-app notification. Continued use of the service after changes constitutes acceptance of the updated policy.' },
            { title: '10. Contact Us', content: 'If you have questions about this Privacy Policy or your data, contact us at: privacy@sajilorenew.com or +977-9800000000. Office: Jhapa Nepal.' },
          ].map((section, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
              <p className="text-gray-600 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
