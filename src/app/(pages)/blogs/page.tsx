import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blogs',
  description:
    'Read the latest news, insights, and guides on solar energy from the experts at Suncity Solar.',
};

const blogPosts = [
  {
    title: 'How Solar Rooftop Systems Reduce Electricity Bills',
    summary:
      'Discover how rooftop solar systems can cut your electricity bills by up to 60% through smart energy generation and government benefits.',
    image: PlaceHolderImages.find((p) => p.id === 'blog-future') || PlaceHolderImages[0],
    slug: '#',
    date: 'December 5, 2024',
    readTime: '6 min read',
    category: 'Energy Savings',
    content: `As electricity prices continue to rise across India, more homeowners and businesses are turning toward solar rooftop solutions to gain financial independence. A well-designed system can reduce monthly bills by 40–60%, depending on energy usage and system size.

Solar energy doesn\'t just cut costs—it allows users to fix their electricity expenses for years, protecting them from tariff hikes. With subsidies, net-metering, and advanced panel efficiency, solar has become a reliable, affordable, long-term asset that saves money while protecting the environment.`,
  },
  {
    title: 'Why Solar Is the Smartest Investment for Homes & Industries',
    summary:
      'Solar energy offers long-term savings, stability, and high ROI for both homeowners and industrial users.',
    image: PlaceHolderImages.find((p) => p.id === 'blog-choose') || PlaceHolderImages[0],
    slug: '#',
    date: 'November 28, 2024',
    readTime: '7 min read',
    category: 'Industry Insights',
    content: `Solar power is now a strategic financial investment instead of just an eco-friendly choice. With predictable returns, low maintenance, and rising grid prices, solar guarantees long-term savings.

Industrial facilities benefit even more—reduced operational costs, tax benefits, and faster depreciation. Modern Solar EPC companies ensure seamless installation, reliable service, and strong performance monitoring.

Going solar is a future-proof decision that delivers strong financial and environmental benefits.`,
  },
  {
    title: 'Why Choosing the Right Solar EPC Partner Matters',
    summary:
      'Your solar project\'s performance depends on the quality of your EPC partner. Here\'s why choosing the right one is critical.',
    image: PlaceHolderImages.find((p) => p.id === 'blog-metering') || PlaceHolderImages[0],
    slug: '#',
    date: 'November 20, 2024',
    readTime: '8 min read',
    category: 'Guides',
    content: `An EPC (Engineering, Procurement, Construction) partner handles everything from system design to maintenance. The right EPC ensures maximum generation, faster ROI, and long-term reliability.

Experienced EPC companies conduct accurate shadow analysis, design optimized systems, use certified components, and follow compliance standards. Selecting the right partner ensures your solar system performs efficiently for 25+ years.`,
  },
  {
    title: 'Solar Myths vs Facts – What Most People Get Wrong',
    summary:
      'Many homeowners still believe myths about solar. Here are the facts that will help you make an informed decision.',
    image: PlaceHolderImages.find((p) => p.id === 'blog-farmer') || PlaceHolderImages[0],
    slug: '#',
    date: 'November 15, 2024',
    readTime: '6 min read',
    category: 'Guides',
    content: `Despite widespread adoption, solar energy is surrounded by myths—like panels not working on cloudy days, or being expensive to maintain. In reality, modern panels work efficiently even in low sunlight, and maintenance costs are minimal.

Today\'s high-efficiency panels also work with compact rooftop spaces, making them suitable for almost any home or business.

Understanding the facts helps customers experience the real benefits of clean, reliable solar energy.`,
  },
  {
    title: 'Government Subsidies & Net Metering Explained',
    summary:
      'Learn how Indian government subsidies and net metering can significantly lower installation costs and boost ROI.',
    image: PlaceHolderImages.find((p) => p.id === 'blog-battery') || PlaceHolderImages[0],
    slug: '#',
    date: 'November 10, 2024',
    readTime: '7 min read',
    category: 'Guides',
    content: `Government incentives make solar extremely affordable. Benefits include:

• Direct subsidies for homeowners
• Net-metering to export electricity back to the grid
• Accelerated depreciation for industries
• Easy financing options

Subsidies can cover up to 40% of total system cost, making solar cheaper than ever. Knowing these policies helps customers save more and maximize investment return.`,
  },
  {
    title: 'Solar Energy & Sustainability – A Cleaner Future',
    summary:
      'Solar power is essential for building a greener, more sustainable future for India and the world.',
    image: PlaceHolderImages.find((p) => p.id === 'blog-future'),
    slug: '#',
    date: 'November 5, 2024',
    readTime: '6 min read',
    category: 'Sustainability',
    content: `Solar power plays a major role in reducing greenhouse gases, improving air quality, and making India energy independent.

By adopting solar energy, homeowners and industries reduce fossil-fuel dependency and support a cleaner, healthier environment.

Solar is not just a technology—it is the foundation of a sustainable and resilient future for the next generation.`,
  },
];

export default function BlogsPage() {
  return (
    <>
      <PageHeader
        title="Suncity Solar Blog"
        breadcrumb="Blogs"
        description="Your source for insights, guides, and news on the world of solar energy."
      />

      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-10">
            <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
              Latest Articles
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-600 mb-3">
              Solar Energy <span className="text-gradient-gold">Insights</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Expert insights, guides, and industry updates on solar energy solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="bg-white rounded-xl overflow-hidden shadow-card border border-gray-100 group hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                {post.image && post.image.imageUrl && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image.imageUrl}
                      alt={post.title}
                      data-ai-hint={post.image.imageHint || ''}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center px-2.5 py-1 bg-gold-500 text-navy-600 text-xs font-semibold rounded-md shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-5">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-bold text-lg text-navy-600 mb-2 line-clamp-2 group-hover:text-gold-500 transition-colors duration-300">
                    {post.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">{post.summary}</p>

                  {/* Read More */}
                  <Link
                    href={post.slug}
                    className="inline-flex items-center gap-1 text-gold-500 font-semibold text-sm hover:gap-2 transition-all group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-navy-600 to-navy-500 rounded-xl p-6 md:p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-400/20 rounded-full blur-3xl" />

            <div className="relative max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Stay Updated on Solar
              </h2>
              <p className="text-gray-300 mb-6 text-sm md:text-base">
                Subscribe to our newsletter for the latest solar energy news, tips, and exclusive
                offers.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-gold-400 flex-1 max-w-md text-sm"
                />
                <button
                  type="submit"
                  className="bg-gradient-gold text-navy-600 font-semibold px-6 py-3 rounded-full shadow-gold hover:shadow-gold-lg transition-all whitespace-nowrap text-sm"
                >
                  Subscribe
                  <ArrowRight className="w-4 h-4 inline-block ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
