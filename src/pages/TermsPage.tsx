import { FileText } from 'lucide-react';
import SEO from '../components/SEO';

export default function TermsPage() {
  return (
    <div className="pt-20">
      <SEO
        title="Terms and Conditions"
        description="Read the Terms and Conditions of using the Sajilo Renew app and website. By using our service, you agree to these terms."
        keywords="terms and conditions sajilo renew, terms of service"
      />
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6">
            <FileText className="w-4 h-4" /> Legal
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>
          <p className="text-gray-600">Last updated: January 1, 2026</p>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {[
            { title: '1. Acceptance of Terms', content: 'By accessing or using Sajilo Renew (the "Service"), you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use the Service. These terms apply to all users, including visitors, registered users, and subscribers.' },
            { title: '2. Account Registration', content: 'To use certain features, you must create an account. You agree to provide accurate, current, and complete information during registration. You are responsible for maintaining the confidentiality of your account credentials. You must notify us immediately of any unauthorized access to your account.' },
            { title: '3. Subscription Plans & Billing', content: 'Sajilo Renew offers Free Trial, Basic, Standard, and Premium plans. Paid subscriptions are billed monthly or annually as selected. Prices are in Nepali Rupees (NPR) and may change with 30 days notice. Your subscription auto-renews unless cancelled before the renewal date. You can upgrade, downgrade, or cancel your subscription at any time from your account settings.' },
            { title: '4. Refund Policy', content: 'We offer a 7-day money-back guarantee for all new paid subscriptions. Refund requests must be made within 7 days of initial purchase. Refunds are processed to the original payment method within 5-10 business days. No refunds are available after the 7-day period or for subscription renewals.' },
            { title: '5. User Responsibilities', content: 'You agree to: use the Service only for lawful purposes, provide accurate information about your assets and renewal dates, not share your account with unauthorized persons, not attempt to reverse-engineer or hack the Service, not upload malicious content or malware, and comply with all applicable Nepali laws.' },
            { title: '6. Service Availability', content: 'We strive for 99.9% uptime but do not guarantee uninterrupted service. We may perform scheduled maintenance with advance notice. We are not liable for missed reminders due to technical issues, incorrect data entered by users, or factors outside our control (network outages, etc.).' },
            { title: '7. Intellectual Property', content: 'All content, trademarks, and technology of Sajilo Renew are our exclusive property. You may not copy, modify, distribute, or create derivative works from our content. User-uploaded documents remain your property — we claim no ownership.' },
            { title: '8. Limitation of Liability', content: 'Sajilo Renew is a reminder and document management tool. We are NOT responsible for: actual renewal processes or payments to government bodies, accuracy of government fees or deadlines, consequences of missed renewals, or any direct or indirect damages arising from use of the Service.' },
            { title: '9. Termination', content: 'We may suspend or terminate your account if you violate these Terms, engage in fraudulent activity, or fail to pay subscription fees. You may delete your account at any time from Settings. Upon termination, your data will be deleted within 30 days.' },
            { title: '10. Governing Law', content: 'These Terms are governed by the laws of Nepal. Any disputes shall be resolved in the courts of Kathmandu, Nepal. By using the Service, you consent to the jurisdiction of Nepali courts.' },
            { title: '11. Changes to Terms', content: 'We reserve the right to modify these Terms at any time. Material changes will be communicated via email and in-app notification at least 30 days in advance. Continued use after changes constitutes acceptance.' },
            { title: '12. Contact', content: 'For questions about these Terms, contact us at: legal@sajilorenew.com or +977-9800000000. Sajilo Renew Pvt. Ltd., Jhapa, Nepal.' },
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
