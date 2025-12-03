'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { blogsData } from '@/lib/data/blogs';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import {
  FadeUp,
  FadeUpSmall,
  StaggerContainer,
  StaggerItem,
  AnimatedCard,
  SectionReveal,
} from '@/components/animations';

export default function BlogsPage() {
  const featuredPost = blogsData[0];
  const otherPosts = blogsData.slice(1);

  return (
    <>
      <PageHeader
        title="Blog & Insights"
        breadcrumb="Blog"
        description="Stay informed with the latest solar industry insights, tips, and news from Suncity Solar experts."
      />

      {/* Featured Post */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeUp className="mb-8">
            <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider">
              <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
              Featured Article
            </div>
          </FadeUp>

          <Link href={`/blogs/${featuredPost.slug}`}>
            <AnimatedCard className="grid lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden group cursor-pointer">
              {featuredPost.image && (
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <Image
                    src={featuredPost.image.imageUrl}
                    alt={featuredPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <span className="px-3 py-1 bg-solar-100 text-solar-600 rounded-full font-medium">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-600 mb-4 group-hover:text-solar-500 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                <span className="inline-flex items-center gap-2 text-solar-500 font-semibold group-hover:gap-3 transition-all">
                  Read Full Article
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </AnimatedCard>
          </Link>
        </div>
      </SectionReveal>

      {/* All Posts */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4 justify-center">
                <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                Latest Articles
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                Solar <span className="text-gradient-solar">Knowledge Hub</span>
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {otherPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <Link href={`/blogs/${post.slug}`}>
                  <AnimatedCard className="group bg-white rounded-2xl overflow-hidden shadow-lg h-full cursor-pointer">
                    {post.image && (
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.image.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 text-navy-600 text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="font-bold text-xl text-navy-600 mb-3 group-hover:text-solar-500 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-1 text-solar-500 font-semibold text-sm group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </AnimatedCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Newsletter CTA */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-navy-600 to-navy-500 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Stay Updated with <span className="text-gradient-solar">Solar Insights</span>
                </h2>
              </FadeUp>
              <FadeUpSmall delay={0.1}>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Subscribe to our newsletter for the latest solar industry news, tips, and exclusive offers.
                </p>
              </FadeUpSmall>
              <FadeUp delay={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-solar text-white font-semibold px-8 py-4 rounded-full shadow-orange hover:shadow-orange-lg hover:scale-105 transition-all"
                >
                  Subscribe Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
