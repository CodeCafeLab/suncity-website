'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { productsData } from '@/lib/data/products';
import { ArrowRight, CheckCircle, Shield, Award } from 'lucide-react';
import {
  FadeUp,
  FadeUpSmall,
  StaggerContainer,
  StaggerItem,
  AnimatedCard,
  SectionReveal,
} from '@/components/animations';

const categories = [
  { name: 'Solar Panels', description: 'High-efficiency monocrystalline and bifacial panels' },
  { name: 'Inverters', description: 'Grid-tied, hybrid, and off-grid inverters' },
  { name: 'Energy Storage', description: 'Lithium battery solutions for backup power' },
  { name: 'Mounting Systems', description: 'Durable structures for all roof types' },
  { name: 'Agricultural Solutions', description: 'Solar pumps and farm equipment' },
];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Products"
        breadcrumb="Products"
        description="Explore our comprehensive range of premium solar products, from high-efficiency panels to advanced energy storage solutions."
      />

      {/* Categories Overview */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4 justify-center">
                <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                Product Categories
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                Complete Solar <span className="text-gradient-solar">Solutions</span>
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 lg:grid-cols-5 gap-6" staggerDelay={0.1}>
            {categories.map((category, index) => (
              <StaggerItem key={category.name}>
                <AnimatedCard className="bg-gray-50 rounded-2xl p-6 text-center h-full group hover:bg-navy-600 transition-all duration-300">
                  <h3 className="font-bold text-lg text-navy-600 mb-2 group-hover:text-white transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-white/80 transition-colors">
                    {category.description}
                  </p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Products Grid */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4 justify-center">
                <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                Featured Products
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                Premium <span className="text-gradient-solar">Solar Equipment</span>
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {productsData.map((product) => (
              <StaggerItem key={product.slug}>
                <Link href={`/products/${product.slug}`}>
                  <AnimatedCard className="group bg-white rounded-2xl overflow-hidden shadow-lg h-full cursor-pointer">
                    {product.image && (
                      <div className="relative h-56 overflow-hidden bg-gray-100">
                        <Image
                          src={product.image.imageUrl}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-solar-500 text-white text-xs font-semibold rounded-full">
                            {product.category}
                          </span>
                        </div>
                        {product.madeInIndia && (
                          <div className="absolute top-4 right-4 flex items-center gap-1 bg-suncity-green text-white px-3 py-1 rounded-full">
                            <span className="text-sm">🇮🇳</span>
                            <span className="text-xs font-semibold">Made in India</span>
                          </div>
                        )}
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-bold text-xl text-navy-600 mb-2 group-hover:text-solar-500 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.shortDescription}</p>
                      
                      {/* Quick Features */}
                      <div className="space-y-2 mb-4">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-suncity-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        {product.price && (
                          <span className="font-bold text-solar-500">{product.price}</span>
                        )}
                        <span className="inline-flex items-center gap-1 text-navy-600 font-semibold text-sm group-hover:text-solar-500 group-hover:gap-2 transition-all">
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </AnimatedCard>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Trust Badges */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={0.1}>
            <StaggerItem>
              <AnimatedCard className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-suncity-green/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-suncity-green" />
                </div>
                <h3 className="font-bold text-xl text-navy-600 mb-2">Quality Assured</h3>
                <p className="text-gray-600 text-sm">All products come with comprehensive warranties and quality guarantees.</p>
              </AnimatedCard>
            </StaggerItem>
            <StaggerItem>
              <AnimatedCard className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-solar-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-solar-500" />
                </div>
                <h3 className="font-bold text-xl text-navy-600 mb-2">Certified Products</h3>
                <p className="text-gray-600 text-sm">BIS, IEC, and MNRE certified equipment from trusted manufacturers.</p>
              </AnimatedCard>
            </StaggerItem>
            <StaggerItem>
              <AnimatedCard className="text-center p-8 bg-gray-50 rounded-2xl">
                <div className="w-16 h-16 bg-navy-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🇮🇳</span>
                </div>
                <h3 className="font-bold text-xl text-navy-600 mb-2">Made in India</h3>
                <p className="text-gray-600 text-sm">Supporting Atmanirbhar Bharat with locally manufactured solar equipment.</p>
              </AnimatedCard>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-navy-600 to-navy-500 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Need Help Choosing <span className="text-gradient-solar">Products?</span>
                </h2>
              </FadeUp>
              <FadeUpSmall delay={0.1}>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Our experts will help you select the right products for your specific requirements and budget. Get a customized quote today.
                </p>
              </FadeUpSmall>
              <FadeUp delay={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-solar text-white font-semibold px-8 py-4 rounded-full shadow-orange hover:shadow-orange-lg hover:scale-105 transition-all"
                >
                  Get Expert Advice
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
