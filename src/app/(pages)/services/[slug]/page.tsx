'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  ArrowLeft,
  CheckCircle,
  ChevronDown,
  Phone
} from 'lucide-react';
import { useState } from 'react';
import PageHeader from '@/components/shared/PageHeader';
import { getServiceBySlug, servicesData } from '@/lib/data/services';
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
import { motion, AnimatePresence } from 'framer-motion';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = getServiceBySlug(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={service.name}
        breadcrumb={`Services / ${service.name}`}
        description={service.shortDescription}
      />

      {/* Service Overview Section */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <FadeUp>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-solar-500 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <SlideInLeft>
              {service.image && (
                <AnimatedImage>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image.imageUrl}
                      alt={service.name}
                      width={700}
                      height={500}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </AnimatedImage>
              )}
            </SlideInLeft>

            {/* Content */}
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                  <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                  Our Service
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-6">
                  Service Overview
                </h2>
              </FadeUp>

              <FadeUpSmall delay={0.2}>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {service.overview}
                </p>
              </FadeUpSmall>

              <FadeUp delay={0.3}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-solar text-white font-semibold px-8 py-4 rounded-full shadow-orange hover:shadow-orange-lg hover:scale-105 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Request This Service
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Process Section */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                How It Works
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                Our <span className="text-gradient-solar">Process</span>
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" staggerDelay={0.1}>
            {service.process.map((step, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="bg-white rounded-2xl p-6 shadow-lg h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-solar opacity-10 rounded-bl-full" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-solar rounded-xl flex items-center justify-center text-white font-bold text-lg mb-4 shadow-orange">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-navy-600 mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Features Section */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Features */}
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                  <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                  What&apos;s Included
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-8">
                  Service <span className="text-gradient-solar">Features</span>
                </h2>
              </FadeUp>
              <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.05}>
                {service.features.map((feature, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-3 bg-gray-50 rounded-xl p-4">
                      <CheckCircle className="w-5 h-5 text-suncity-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Benefits */}
            <SlideInRight>
              <div className="bg-navy-600 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-solar-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </span>
                      <span className="text-white/90">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SlideInRight>
          </div>
        </div>
      </SectionReveal>

      {/* Applications Section */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                Use Cases
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                <span className="text-gradient-solar">Applications</span>
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto" staggerDelay={0.05}>
            {service.applications.map((app, index) => (
              <StaggerItem key={index}>
                <div className="px-6 py-3 bg-white rounded-full shadow-lg border border-gray-100 text-navy-600 font-medium hover:bg-gradient-solar hover:text-white transition-all cursor-pointer">
                  {app}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Why Choose Us Section */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                Why Suncity Solar
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-6">
                Why Choose <span className="text-gradient-solar">Us</span>
              </h2>
            </FadeUp>
            <FadeUpSmall delay={0.2}>
              <p className="text-lg text-gray-600 leading-relaxed">
                {service.whyChoose}
              </p>
            </FadeUpSmall>
          </div>
        </div>
      </SectionReveal>

      {/* FAQ Section */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                Common Questions
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                Frequently Asked <span className="text-gradient-solar">Questions</span>
              </h2>
            </FadeUp>
          </div>

          <div className="max-w-3xl mx-auto">
            <StaggerContainer className="space-y-4" staggerDelay={0.1}>
              {service.faq.map((item, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span className="font-semibold text-navy-600 pr-4">{item.question}</span>
                      <motion.div
                        animate={{ rotate: openFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5 text-solar-500 flex-shrink-0" />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-gray-600">{item.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
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
                  Ready to Get <span className="text-gradient-solar">Started?</span>
                </h2>
              </FadeUp>
              <FadeUpSmall delay={0.1}>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Let Suncity Solar help you with {service.name.toLowerCase()}. Contact us today for a free consultation and customized proposal.
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

      {/* Related Services */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeUp>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                Other <span className="text-gradient-solar">Services</span>
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
            {relatedServices.map((relService) => (
              <StaggerItem key={relService.slug}>
                <AnimatedCard className="group bg-white rounded-2xl overflow-hidden shadow-lg h-full">
                  {relService.image && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relService.image.imageUrl}
                        alt={relService.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-600/80 to-transparent" />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-navy-600 mb-2">{relService.name}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relService.shortDescription}</p>
                    <Link
                      href={`/services/${relService.slug}`}
                      className="inline-flex items-center gap-1 text-solar-500 font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Learn More
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

