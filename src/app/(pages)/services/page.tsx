'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { servicesData } from '@/lib/data/services';
import { ArrowRight, CheckCircle, Sun, BatteryCharging, BarChart3, Settings, Wallet, FileCheck } from 'lucide-react';
import {
  FadeUp,
  FadeUpSmall,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  AnimatedCard,
  SectionReveal,
} from '@/components/animations';

const serviceIcons: { [key: string]: any } = {
  'solar-system-design-installation': Sun,
  'smart-energy-storage-solutions': BatteryCharging,
  'energy-efficiency-consulting': BarChart3,
  'monitoring-maintenance-services': Settings,
  'solar-financing-solutions': Wallet,
  'government-subsidy-assistance': FileCheck,
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        breadcrumb="Services"
        description="End-to-end solar solutions from consultation to installation and beyond. Experience the Suncity Solar difference."
      />

      {/* Services Grid */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4 justify-center">
                <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                What We Offer
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-4">
                Comprehensive <span className="text-gradient-solar">Solar Services</span>
              </h2>
            </FadeUp>
            <FadeUpSmall delay={0.2}>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From initial consultation to ongoing maintenance, Suncity Solar provides complete solar solutions tailored to your needs.
              </p>
            </FadeUpSmall>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
            {servicesData.map((service) => {
              const IconComponent = serviceIcons[service.slug] || Sun;
              return (
                <StaggerItem key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    <AnimatedCard className="group bg-gray-50 rounded-2xl overflow-hidden h-full cursor-pointer hover:shadow-xl transition-all duration-300">
                      {service.image && (
                        <div className="relative h-48 overflow-hidden">
                          <Image
                            src={service.image.imageUrl}
                            alt={service.name}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-600/80 to-transparent" />
                          <div className="absolute bottom-4 left-4">
                            <div className="w-14 h-14 bg-gradient-solar rounded-xl flex items-center justify-center shadow-orange">
                              <IconComponent className="w-7 h-7 text-white" />
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="p-6">
                        <h3 className="font-bold text-xl text-navy-600 mb-3 group-hover:text-solar-500 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                          {service.shortDescription}
                        </p>
                        
                        {/* Quick Features */}
                        <div className="space-y-2 mb-4">
                          {service.features.slice(0, 3).map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-suncity-green flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-xs">{feature}</span>
                            </div>
                          ))}
                        </div>

                        <span className="inline-flex items-center gap-1 text-solar-500 font-semibold text-sm group-hover:gap-2 transition-all">
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </AnimatedCard>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Process Overview */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4 justify-center">
                <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                Our Process
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                How We <span className="text-gradient-solar">Work</span>
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {[
              { step: '01', title: 'Consultation', desc: 'Free site assessment and requirement analysis' },
              { step: '02', title: 'Design', desc: 'Custom system design optimized for your needs' },
              { step: '03', title: 'Installation', desc: 'Professional installation by certified teams' },
              { step: '04', title: 'Support', desc: 'Ongoing monitoring and maintenance' },
            ].map((item, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="text-center p-6 bg-white rounded-2xl shadow-lg h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-solar opacity-10 rounded-bl-full" />
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-solar rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-orange">
                      <span className="text-2xl font-bold text-white">{item.step}</span>
                    </div>
                    <h3 className="font-bold text-xl text-navy-600 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Why Choose Us */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SlideInLeft>
              <div>
                <FadeUp>
                  <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                    <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                    Why Suncity Solar
                  </div>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-6">
                    Trusted by <span className="text-gradient-solar">Thousands</span>
                  </h2>
                </FadeUp>
                <FadeUpSmall delay={0.2}>
                  <p className="text-gray-600 mb-8">
                    With over 5 years of experience and 500+ successful installations, Suncity Solar is the trusted name in solar solutions across Rajasthan and beyond.
                  </p>
                </FadeUpSmall>
                <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                  {[
                    'MNRE empaneled installer',
                    '25-year performance guarantee',
                    'Local presence for rapid support',
                    'Comprehensive AMC packages',
                    'Financing assistance available',
                  ].map((item, i) => (
                    <StaggerItem key={i}>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-suncity-green/20 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-suncity-green" />
                        </div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </SlideInLeft>

            <SlideInRight>
              <div className="bg-navy-600 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-8">Our Track Record</h3>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { number: '500+', label: 'Installations' },
                    { number: '15MW+', label: 'Capacity' },
                    { number: '5000+', label: 'Happy Customers' },
                    { number: '6+', label: 'Years Experience' },
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-4xl font-bold text-gradient-solar mb-2">{stat.number}</div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </SlideInRight>
          </div>
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
                  Ready to Go <span className="text-gradient-solar">Solar?</span>
                </h2>
              </FadeUp>
              <FadeUpSmall delay={0.1}>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Get a free consultation and customized proposal from our solar experts. Take the first step toward energy independence today.
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
    </>
  );
}
