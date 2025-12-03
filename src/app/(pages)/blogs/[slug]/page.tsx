'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  Facebook,
  Twitter,
  Linkedin
} from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { getBlogBySlug, blogsData } from '@/lib/data/blogs';
import { Button } from '@/components/ui/button';
import {
  FadeUp,
  FadeUpSmall,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  AnimatedCard,
  AnimatedImage,
  SectionReveal,
} from '@/components/animations';

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const relatedPosts = blogsData
    .filter((b) => b.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={blog.title}
        breadcrumb={`Blog / ${blog.category}`}
      />

      {/* Blog Content Section */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <FadeUp>
              <Link
                href="/blogs"
                className="inline-flex items-center gap-2 text-gray-600 hover:text-solar-500 mb-8 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </FadeUp>

            {/* Meta Info */}
            <FadeUp delay={0.1}>
              <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blog.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blog.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  <span className="px-3 py-1 bg-solar-100 text-solar-600 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
              </div>
            </FadeUp>

            {/* Featured Image */}
            {blog.image && (
              <FadeUp delay={0.2}>
                <AnimatedImage className="mb-12">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={blog.image.imageUrl}
                      alt={blog.title}
                      width={900}
                      height={500}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </AnimatedImage>
              </FadeUp>
            )}

            {/* Blog Content */}
            <article className="prose prose-lg max-w-none">
              {blog.content.map((block, index) => {
                switch (block.type) {
                  case 'paragraph':
                    return (
                      <FadeUpSmall key={index} delay={0.1 * index}>
                        <p className="text-gray-600 leading-relaxed mb-6">{block.text}</p>
                      </FadeUpSmall>
                    );
                  case 'heading':
                    return (
                      <FadeUp key={index} delay={0.1 * index}>
                        <h2 className="text-2xl md:text-3xl font-bold text-navy-600 mt-12 mb-6">
                          {block.text}
                        </h2>
                      </FadeUp>
                    );
                  case 'subheading':
                    return (
                      <FadeUp key={index} delay={0.1 * index}>
                        <h3 className="text-xl md:text-2xl font-bold text-navy-600 mt-8 mb-4">
                          {block.text}
                        </h3>
                      </FadeUp>
                    );
                  case 'list':
                    return (
                      <FadeUpSmall key={index} delay={0.1 * index}>
                        <ul className="space-y-3 mb-6">
                          {block.items?.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <span className="w-2 h-2 bg-solar-500 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-gray-600">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </FadeUpSmall>
                    );
                  case 'quote':
                    return (
                      <FadeUp key={index} delay={0.1 * index}>
                        <blockquote className="bg-gray-50 border-l-4 border-solar-500 rounded-r-xl p-6 my-8">
                          <p className="text-xl text-navy-600 font-medium italic">
                            "{block.text}"
                          </p>
                        </blockquote>
                      </FadeUp>
                    );
                  default:
                    return null;
                }
              })}
            </article>

            {/* Tags */}
            <FadeUp className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-gray-500 font-medium">Tags:</span>
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-solar-100 hover:text-solar-600 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>

            {/* Share */}
            <FadeUp className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <span className="text-gray-500 font-medium">Share:</span>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#1877F2] hover:text-white transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#1DA1F2] hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </SectionReveal>

      {/* CTA Section */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-navy-600 to-navy-500 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to Go <span className="text-gradient-solar">Solar?</span>
                </h2>
              </FadeUp>
              <FadeUpSmall delay={0.1}>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Turn your energy knowledge into action. Get a free consultation from Suncity Solar and start your journey to clean, affordable energy.
                </p>
              </FadeUpSmall>
              <FadeUp delay={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-solar text-white font-semibold px-8 py-4 rounded-full shadow-orange hover:shadow-orange-lg hover:scale-105 transition-all"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Related Posts */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                More <span className="text-gradient-solar">Articles</span>
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {relatedPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <AnimatedCard className="group bg-gray-50 rounded-2xl overflow-hidden h-full">
                  {post.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image.imageUrl}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span className="px-2 py-0.5 bg-solar-100 text-solar-600 rounded-full text-xs">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-navy-600 mb-3 group-hover:text-solar-500 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="inline-flex items-center gap-1 text-solar-500 font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionReveal>
    </>
  );
}

