'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  Shield,
  Award,
  Truck,
  Phone,
  FileText
} from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { getProductBySlug, productsData } from '@/lib/data/products';
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

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData
    .filter((p) => p.slug !== slug && p.category === product.category)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={product.name}
        breadcrumb={`Products / ${product.category}`}
        description={product.shortDescription}
      />

      {/* Product Overview Section */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <FadeUp>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-solar-500 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Image */}
            <SlideInLeft>
              {product.image && (
                <AnimatedImage>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                    <Image
                      src={product.image.imageUrl}
                      alt={product.name}
                      width={700}
                      height={500}
                      className="w-full h-[450px] object-cover"
                    />
                    {product.madeInIndia && (
                      <div className="absolute top-4 left-4 flex items-center gap-2 bg-suncity-green text-white px-4 py-2 rounded-full">
                        <span className="text-lg">🇮🇳</span>
                        <span className="font-semibold text-sm">Made in India</span>
                      </div>
                    )}
                  </div>
                </AnimatedImage>
              )}
            </SlideInLeft>

            {/* Details */}
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                  <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                  {product.category}
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-4">
                  {product.name}
                </h2>
              </FadeUp>

              {product.price && (
                <FadeUp delay={0.15}>
                  <p className="text-3xl font-bold text-gradient-solar mb-6">{product.price}</p>
                </FadeUp>
              )}

              <FadeUpSmall delay={0.2}>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {product.overview}
                </p>
              </FadeUpSmall>

              {/* Quick Features */}
              <StaggerContainer className="grid grid-cols-2 gap-3 mb-8" staggerDelay={0.05}>
                {product.features.slice(0, 6).map((feature, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-suncity-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              {/* CTA Buttons */}
              <FadeUp delay={0.3} className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-solar text-white font-semibold px-8 py-4 rounded-full shadow-orange hover:shadow-orange-lg hover:scale-105 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Get Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-navy-600 text-white font-semibold px-8 py-4 rounded-full hover:bg-navy-500 transition-all"
                >
                  <FileText className="w-5 h-5" />
                  Request Datasheet
                </Link>
              </FadeUp>

              {/* Trust Badges */}
              <FadeUp delay={0.4} className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Shield className="w-5 h-5 text-suncity-green" />
                    <span className="text-sm">Warranty Included</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Award className="w-5 h-5 text-suncity-green" />
                    <span className="text-sm">Quality Certified</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Truck className="w-5 h-5 text-suncity-green" />
                    <span className="text-sm">Pan-India Delivery</span>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Technical Specifications */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                Technical Details
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                Product <span className="text-gradient-solar">Specifications</span>
              </h2>
            </FadeUp>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <StaggerContainer staggerDelay={0.03}>
                {product.specifications.map((spec, index) => (
                  <StaggerItem key={index}>
                    <div className={`flex items-center justify-between p-5 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <span className="text-gray-600 font-medium">{spec.label}</span>
                      <span className="text-navy-600 font-bold">{spec.value}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Benefits Section */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                  <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                  Key Benefits
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-6">
                  Why Choose This <span className="text-gradient-solar">Product</span>
                </h2>
              </FadeUp>
              <FadeUpSmall delay={0.2}>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {product.whyChoose}
                </p>
              </FadeUpSmall>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {product.benefits.map((benefit, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-suncity-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-suncity-green" />
                      </div>
                      <p className="text-gray-600">{benefit}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Applications */}
            <SlideInRight>
              <div className="bg-navy-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Applications</h3>
                <ul className="space-y-4">
                  {product.applications.map((app, index) => (
                    <li key={index} className="flex items-center gap-3 text-white/80">
                      <span className="w-2 h-2 bg-solar-400 rounded-full" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </SlideInRight>
          </div>
        </div>
      </SectionReveal>

      {/* Warranty & Certification */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <SlideInLeft>
              <AnimatedCard className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="w-14 h-14 bg-suncity-green/20 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-suncity-green" />
                </div>
                <h3 className="text-xl font-bold text-navy-600 mb-4">Warranty</h3>
                <p className="text-gray-600">{product.warranty}</p>
              </AnimatedCard>
            </SlideInLeft>

            <SlideInRight>
              <AnimatedCard className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="w-14 h-14 bg-solar-100 rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-7 h-7 text-solar-500" />
                </div>
                <h3 className="text-xl font-bold text-navy-600 mb-4">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {product.certification.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1.5 bg-gray-100 text-navy-600 rounded-full text-sm font-medium"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </AnimatedCard>
            </SlideInRight>
          </div>
        </div>
      </SectionReveal>

      {/* CTA Section */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-navy-600 to-navy-500 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Interested in This <span className="text-gradient-solar">Product?</span>
                </h2>
              </FadeUp>
              <FadeUpSmall delay={0.1}>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Get expert advice on whether this product is right for your needs. Our team will provide a detailed quote and installation estimate.
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

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <SectionReveal className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                  Related <span className="text-gradient-solar">Products</span>
                </h2>
              </FadeUp>
            </div>

            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
              {relatedProducts.map((relProduct) => (
                <StaggerItem key={relProduct.slug}>
                  <AnimatedCard className="group bg-white rounded-2xl overflow-hidden shadow-lg h-full">
                    {relProduct.image && (
                      <div className="relative h-48 overflow-hidden bg-gray-100">
                        <Image
                          src={relProduct.image.imageUrl}
                          alt={relProduct.name}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <span className="text-xs text-solar-500 font-semibold">{relProduct.category}</span>
                      <h3 className="font-bold text-lg text-navy-600 mt-1 mb-2">{relProduct.name}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relProduct.shortDescription}</p>
                      <Link
                        href={`/products/${relProduct.slug}`}
                        className="inline-flex items-center gap-1 text-solar-500 font-semibold text-sm hover:gap-2 transition-all"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionReveal>
      )}
    </>
  );
}

