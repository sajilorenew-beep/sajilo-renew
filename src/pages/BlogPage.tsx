import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';

export default function BlogPage() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const categories = ['all', 'Vehicle', 'Property', 'Insurance', 'Tips', 'News'];

  const posts = [
    {
      id: 1, category: 'Vehicle',
      title: 'Complete Guide: How to Renew Bluebook in Nepal (2026)',
      excerpt: 'Step-by-step guide to renewing your vehicle bluebook in Nepal. Learn about required documents, fees, online process, and tips to avoid long queues at Yatayat offices.',
      content: `Renewing your vehicle bluebook (registration certificate) in Nepal is a mandatory annual process. Here's everything you need to know:\n\n**Required Documents:**\n- Original bluebook\n- Vehicle insurance certificate (valid)\n- Pollution test certificate\n- Road tax receipt\n- Owner's citizenship copy\n\n**Process:**\n1. Get your vehicle pollution tested at an authorized center\n2. Pay road tax at the designated bank\n3. Renew vehicle insurance\n4. Visit the Yatayat Byabastha Karyalaya (Transport Management Office)\n5. Submit all documents and pay the renewal fee\n6. Collect your renewed bluebook\n\n**Fees:** The renewal fee varies by vehicle type, typically ranging from Rs. 500 to Rs. 5,000.\n\n**Pro Tip:** Use Sajilo Renew to set reminders 30 days before your bluebook expires, so you have ample time to gather documents and complete the process without rush.`,
      date: 'Jan 15, 2026', readTime: '8 min', gradient: 'from-blue-500 to-cyan-500', emoji: '📋'
    },
    {
      id: 2, category: 'Vehicle',
      title: 'Vehicle Road Tax in Nepal: Rates, Deadlines & How to Pay',
      excerpt: 'Everything you need to know about vehicle road tax in Nepal — tax rates by vehicle type, payment methods, deadlines, and penalties for late payment.',
      content: `Vehicle road tax is an annual obligation for all vehicle owners in Nepal. Here's a comprehensive guide:\n\n**Tax Rates (Annual):**\n- Motorcycle: Rs. 1,500 - 3,000\n- Car: Rs. 7,500 - 15,000\n- Jeep/SUV: Rs. 10,000 - 20,000\n- Bus: Rs. 15,000 - 25,000\n- Truck: Rs. 12,000 - 22,000\n\n**Payment Methods:**\n- Bank deposit (designated banks)\n- Online banking\n- eSewa/Khalti (selected municipalities)\n\n**Deadline:** Road tax must be paid within the first 3 months of the fiscal year (Shrawan to Ashwin). Late payments incur a 10% penalty per quarter.\n\n**With Sajilo Renew**, you'll never miss your road tax deadline. Our app sends reminders well in advance, giving you time to budget and pay on time.`,
      date: 'Jan 10, 2026', readTime: '6 min', gradient: 'from-emerald-500 to-teal-500', emoji: '🚗'
    },
    {
      id: 3, category: 'Property',
      title: 'Property Tax in Nepal: A Complete Homeowner\'s Guide',
      excerpt: 'Understanding property tax in Nepal — calculation methods, payment process, deadlines, and how to use digital tools to track your property tax obligations.',
      content: `Property tax is levied by local municipalities in Nepal. Here's what every property owner should know:\n\n**How It's Calculated:**\n- Based on land area and location\n- Building structure and floors\n- Commercial vs residential use\n- Municipal tax rates\n\n**Payment Process:**\n1. Visit your local municipality office or ward office\n2. Get your property tax assessment\n3. Pay at the designated bank or municipality counter\n4. Collect your receipt\n\n**Digital Payment:** Many municipalities now accept online payments through banking apps and digital wallets.\n\n**Sajilo Renew Tip:** Add your property to the app with the annual tax deadline. We'll remind you every year so you never face penalties.`,
      date: 'Jan 5, 2026', readTime: '7 min', gradient: 'from-amber-500 to-orange-500', emoji: '🏠'
    },
    {
      id: 4, category: 'Insurance',
      title: 'Vehicle Insurance in Nepal: Types, Costs & Renewal Tips',
      excerpt: 'A comprehensive guide to vehicle insurance in Nepal — types of coverage, premium rates, claim process, and smart renewal strategies.',
      content: `Vehicle insurance is mandatory in Nepal. Here's your complete guide:\n\n**Types of Insurance:**\n1. **Third Party Liability** - Covers damage to others (mandatory)\n2. **Comprehensive** - Covers your vehicle + third party\n3. **Fire & Theft** - Covers fire damage and theft only\n\n**Premium Rates (Approximate):**\n- Motorcycle (Third Party): Rs. 1,500 - 2,500/year\n- Car (Comprehensive): Rs. 8,000 - 20,000/year\n- SUV (Comprehensive): Rs. 15,000 - 30,000/year\n\n**Renewal Tips:**\n- Renew before expiry to avoid coverage gaps\n- Compare quotes from multiple insurers\n- Consider comprehensive coverage for newer vehicles\n- Keep your insurance documents safe (upload to Sajilo Renew!)\n\n**Did you know?** Driving without valid insurance can result in fines up to Rs. 10,000 and vehicle impoundment.`,
      date: 'Dec 28, 2025', readTime: '6 min', gradient: 'from-red-500 to-rose-500', emoji: '🛡️'
    },
    {
      id: 5, category: 'Tips',
      title: '5 Common Renewal Mistakes Nepali Vehicle Owners Make',
      excerpt: 'Avoid these costly mistakes when renewing your vehicle documents. Learn from common errors and save time and money on your next renewal.',
      content: `Don't make these common mistakes:\n\n**1. Waiting Until the Last Day**\nRenewing on the deadline day means long queues and stress. Start the process at least 2 weeks early.\n\n**2. Forgetting Insurance**\nYou can't renew your bluebook without valid insurance. Renew insurance first!\n\n**3. Missing the Pollution Test**\nPollution test certificates are required. Don't forget this step.\n\n**4. Not Keeping Digital Copies**\nPhysical documents can be lost. Always keep digital copies using apps like Sajilo Renew.\n\n**5. Ignoring Penalties**\nLate renewal penalties add up quickly. A Rs. 500 renewal can become Rs. 5,000 with accumulated late fees.\n\n**Solution:** Use Sajilo Renew to track all your renewal dates and get timely reminders. Prevention is always cheaper than penalties!`,
      date: 'Dec 20, 2025', readTime: '5 min', gradient: 'from-purple-500 to-indigo-500', emoji: '⚠️'
    },
    {
      id: 6, category: 'News',
      title: 'Sajilo Renew Launches New Family Sharing Feature',
      excerpt: 'Now share your renewal records with family members. Everyone stays informed about upcoming deadlines with our new family sharing capability.',
      content: `We're excited to announce the launch of our Family Sharing feature!\n\n**What's New:**\n- Share renewal records with up to 10 family members\n- Each member gets their own login\n- View combined family dashboard\n- Receive shared notifications\n- Role-based access control\n\n**How to Get Started:**\n1. Go to Settings > Family Sharing\n2. Tap "Invite Family Member"\n3. Enter their phone number or email\n4. They'll receive an invitation to join\n\n**Pricing:**\n- Standard Plan: Up to 3 family members\n- Premium Plan: Up to 10 family members\n\nFamily sharing means no one in your household will ever miss a renewal deadline again. Whether it's your spouse's vehicle insurance or your parents' property tax — everyone stays informed.`,
      date: 'Dec 15, 2025', readTime: '4 min', gradient: 'from-pink-500 to-fuchsia-500', emoji: '👨‍👩‍👧‍👦'
    },
  ];

  const filtered = posts.filter(
    p => activeCategory === 'all' || p.category === activeCategory
  );

  if (selectedPost !== null) {
    const post = posts.find(p => p.id === selectedPost);
    if (!post) return null;
    return (
      <div className="pt-20">
        <article className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <button onClick={() => setSelectedPost(null)} className="flex items-center gap-2 text-primary-600 font-medium mb-8 hover:text-primary-700 cursor-pointer">
              ← Back to Blog
            </button>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-medium">{post.category}</span>
              <span className="text-sm text-gray-500 flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
              <span className="text-sm text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime} read</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
            <div className={`w-full h-64 sm:h-80 rounded-2xl mb-8 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
              <span className="text-7xl">{post.emoji}</span>
            </div>
            <div className="prose max-w-none">
              {post.content.split('\n').map((line, i) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <h3 key={i} className="text-xl font-bold text-gray-900 mt-6 mb-3">{line.replace(/\*\*/g, '')}</h3>;
                }
                if (line.startsWith('**')) {
                  return <p key={i} className="text-gray-700 mb-2"><strong>{line.replace(/\*\*/g, '')}</strong></p>;
                }
                if (line.match(/^\d+\./)) {
                  return <p key={i} className="text-gray-700 ml-4 mb-1">{line}</p>;
                }
                if (line.startsWith('- ')) {
                  return <p key={i} className="text-gray-700 ml-6 mb-1">• {line.slice(2)}</p>;
                }
                if (line.trim() === '') return <br key={i} />;
                return <p key={i} className="text-gray-700 mb-3 leading-relaxed">{line}</p>;
              })}
            </div>
            <div className="mt-12 p-6 bg-primary-50 rounded-2xl text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Never Miss a Renewal Again</h3>
              <p className="text-gray-600 mb-4">Try Sajilo Renew free and stay on top of all your deadlines.</p>
              <button onClick={() => navigate('/download')} className="px-6 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors cursor-pointer">
                Start Free Trial
              </button>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <SEO
        title="Guides, Tips & News"
        description="Read our latest articles on bluebook renewal processes, Yatayat tax rates in Nepal, property management tips, and general renewal guides."
        keywords="bluebook renewal guide nepal, vehicle road tax rates nepal, sajilo renew blog"
      />
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Sajilo Renew <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tips, guides, and news about vehicle renewal, property tax, insurance, and more in Nepal.
          </p>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat === 'all' ? 'All Posts' : cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map(post => (
              <article key={post.id} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all cursor-pointer" onClick={() => setSelectedPost(post.id)}>
                <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${post.gradient} flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300`}>
                  <span className="text-5xl">{post.emoji}</span>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur text-xs font-medium text-primary-700 flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="text-xs text-gray-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">{post.title}</h2>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <span className="text-sm font-semibold text-primary-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CTA */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated on Nepal's Renewal Process</h2>
          <p className="text-primary-100 mb-8">Get the latest tips and guides delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-900 outline-none"
            />
            <button className="px-6 py-3 bg-white text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
