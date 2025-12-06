'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Target,
  Eye,
  Sun,
  BatteryCharging,
  BarChart3,
  Settings,
  Facebook,
  Twitter,
  Youtube,
  Send,
  Quote,
  ArrowRight,
  Award,
} from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  FadeUp,
  FadeUpSmall,
  SlideInLeft,
  SlideInRight,
  ZoomIn,
  StaggerContainer,
  StaggerItem,
  AnimatedCard,
  AnimatedButton,
  AnimatedImage,
  SectionReveal,
  AnimatedCounter,
} from '@/components/animations';

const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-suncity');
const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
const dosImage = PlaceHolderImages.find((img) => img.id === 'dos-training');

const values = [
  {
    number: '01',
    title: 'Sustainability First',
    description: "We're committed to protecting the planet through clean, renewable energy that reduces emissions.",
  },
  {
    number: '02',
    title: 'Innovation with Purpose',
    description: 'We embrace smart technology and forward-thinking design to create lasting impact.',
  },
  {
    number: '03',
    title: 'People-Powered Progress',
    description: 'We empower communities with accessible, affordable, reliable green energy solutions.',
  },
  {
    number: '04',
    title: 'Trust & Transparency',
    description: 'We build strong relationships through honesty and accountability in every project.',
  },
];

const services = [
  {
    icon: Sun,
    title: 'Solar System Design & Installation',
    description: 'Complete turnkey solar solutions from design to commissioning for homes and businesses.',
    bgColor: 'bg-white',
  },
  {
    icon: BatteryCharging,
    title: 'Smart Energy Storage Solutions',
    description: 'Advanced lithium battery systems with intelligent energy management for 24/7 backup.',
    bgColor: 'bg-suncity-green',
  },
  {
    icon: BarChart3,
    title: 'Energy Efficiency Consulting',
    description: 'Expert analysis and recommendations to optimize consumption and maximize savings.',
    bgColor: 'bg-white',
  },
  {
    icon: Settings,
    title: 'Monitoring & Maintenance',
    description: 'Proactive monitoring, regular maintenance, and prompt support for peak performance.',
    bgColor: 'bg-navy-600',
  },
];

const whyChooseUs = [
  {
    number: '01',
    title: 'Future-Ready Technology',
    description: 'We use cutting-edge solar innovations to deliver smarter, scalable solutions.',
  },
  {
    number: '02',
    title: 'Impact-Driven Sustainability',
    description: 'Each project cuts emissions and uplifts communities—protecting our planet.',
  },
  {
    number: '03',
    title: 'Trusted by Thousands',
    description: 'Customers choose us for proven reliability, transparent service, and results.',
  },
];

const teamMembers = [
  {
    name: 'Rajendra Kumar',
    role: 'CEO of Suncity Solar',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-1'),
  },
  {
    name: 'Priya Sharma',
    role: 'COO of Suncity Solar',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-2'),
  },
  {
    name: 'Anil Gupta',
    role: 'CTO of Suncity Solar',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-3'),
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        breadcrumb="About Us"
      />

      {/* ===== WHO WE ARE SECTION ===== */}
      <SectionReveal className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-10 md:mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full px-5 py-2.5">
                <span className="w-2 h-2 bg-solar-500 rounded-full" />
                <span className="text-navy-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              </div>
            </FadeUp>
            <div className="max-w-3xl">
              <FadeUp delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-600 leading-tight mb-6">
                  Creating Impact Through{' '}
                  <span className="text-gradient-solar">Clean Innovation</span>
                </h2>
              </FadeUp>
              <FadeUpSmall delay={0.2}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  <strong className="text-navy-600">Suncity Solar</strong> is a renewable energy company committed to driving global sustainability through smart solar technology, empowering homes, businesses and communities to transition to a cleaner, more efficient future.
                </p>
              </FadeUpSmall>
            </div>
          </div>

          {/* Image with Vision/Mission Cards */}
          <div className="relative">
            {/* Main Image */}
            {aboutImage && (
              <AnimatedImage>
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={1200}
                    height={600}
                    className="w-full h-[500px] object-cover"
                  />
                </div>
              </AnimatedImage>
            )}

            {/* Vision & Mission Cards - Positioned on right side */}
            <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 w-80">
              {/* Vision Card */}
              <SlideInRight delay={0.3}>
                <div className="bg-navy-600 rounded-2xl p-6 text-white shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                      <Eye className="w-6 h-6 text-solar-400" />
                    </div>
                    <h3 className="font-bold text-xl">Our Vision</h3>
                  </div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    To build a future where every life is empowered by clean, intelligent energy that drives sustainable progress across the planet.
                  </p>
                </div>
              </SlideInRight>

              {/* Mission Card */}
              <SlideInRight delay={0.4}>
                <div className="bg-suncity-green rounded-2xl p-6 text-white shadow-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-bold text-xl">Our Mission</h3>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    To deliver innovative solar solutions that empower people, drive progress, and protect the planet for generations.
                  </p>
                </div>
              </SlideInRight>
            </div>
          </div>

          {/* Mobile Vision/Mission Cards */}
          <StaggerContainer className="grid sm:grid-cols-2 gap-4 mt-8 lg:hidden">
            <StaggerItem>
              <div className="bg-navy-600 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                    <Eye className="w-5 h-5 text-solar-400" />
                  </div>
                  <h3 className="font-bold text-lg">Our Vision</h3>
                </div>
                <p className="text-white/80 text-sm">
                  To build a future where every life is empowered by clean, intelligent energy.
                </p>
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="bg-suncity-green rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-lg">Our Mission</h3>
                </div>
                <p className="text-white/90 text-sm">
                  To deliver innovative solar solutions that empower people and protect the planet.
                </p>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* ===== OUR VALUES SECTION ===== */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className="text-center mb-10 md:mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2.5 shadow-sm mb-6">
                <span className="w-2 h-2 bg-solar-500 rounded-full" />
                <span className="text-navy-600 font-semibold text-sm uppercase tracking-wider">Our Value</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-600 leading-tight mb-6">
                Clean Energy,{' '}
                <span className="text-gradient-solar">Clear Commitment</span>
              </h2>
            </FadeUp>
            <FadeUpSmall delay={0.2}>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Our dedication to a greener future goes beyond technology. It&apos;s a promise to deliver reliable, responsible, and forward-thinking energy solutions.
              </p>
            </FadeUpSmall>
          </div>

          {/* Values Grid with Image */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Image with Quote Overlay */}
            <SlideInLeft>
              <div className="relative">
                {dosImage && (
                  <div className="relative rounded-[2rem] overflow-hidden">
                    <Image
                      src={dosImage.imageUrl}
                      alt="Solar Innovation"
                      width={600}
                      height={700}
                      className="w-full h-[600px] object-cover"
                    />
                    {/* Dark Overlay with Quote */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-600/90 via-navy-600/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <div className="bg-navy-600/80 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                        <Quote className="w-10 h-10 text-suncity-green mb-4" />
                        <p className="text-xl text-white font-medium italic mb-4">
                          "A greener Bharat begins with one bold decision — yours."
                        </p>
                        <p className="text-suncity-green font-semibold">
                          — Suncity Solar, Leadership Team
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </SlideInLeft>

            {/* Right - Value Cards 2x2 */}
            <StaggerContainer className="grid sm:grid-cols-2 gap-5" staggerDelay={0.1}>
              {values.map((value, index) => (
                <StaggerItem key={value.title}>
                  <AnimatedCard
                    index={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full group"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-xl font-bold text-solar-500 group-hover:bg-gradient-solar group-hover:text-white transition-all">
                        {value.number}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-navy-600 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </SectionReveal>

      {/* ===== CTA SECTION - Ready to Switch ===== */}
      <SectionReveal className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-0 overflow-hidden rounded-[2rem] shadow-2xl">
            {/* Left - Dark CTA */}
            <div className="bg-navy-600 p-10 md:p-14 relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/10 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-suncity-green/10 rounded-full blur-[60px]" />
              
              <div className="relative">
                <FadeUp>
                  <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-4 py-2 mb-6">
                    <span className="w-2 h-2 bg-solar-400 rounded-full" />
                    <span className="text-white/80 font-medium text-sm">Powered by Trust and Results</span>
                  </div>
                </FadeUp>
                
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                    Ready to switch to solar?{' '}
                    <span className="text-gradient-solar">Let&apos;s start the journey.</span>
                  </h2>
                </FadeUp>
                
                <FadeUpSmall delay={0.2}>
                  <p className="text-white/70 text-lg mb-8 leading-relaxed">
                    With <strong className="text-white">Suncity Solar</strong>, solar isn&apos;t complicated. It&apos;s reliable, intelligent, and built to perform.
                  </p>
                </FadeUpSmall>
                
                <AnimatedButton delay={0.3}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-gradient-solar text-white font-semibold px-8 py-4 rounded-full shadow-orange hover:shadow-orange-lg hover:scale-105 transition-all"
                  >
                    Start The Journey
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </AnimatedButton>
              </div>
            </div>

            {/* Right - Form */}
            <SlideInRight className="bg-gray-50 p-10 md:p-14">
              <FadeUp>
                <h3 className="text-2xl md:text-3xl font-bold text-navy-600 mb-8">Get Your Free Consultation</h3>
              </FadeUp>
              <form className="space-y-5">
                <FadeUpSmall delay={0.1}>
                  <Input
                    placeholder="Your Name"
                    className="h-14 rounded-xl border-gray-200 bg-white shadow-sm focus:border-solar-400 focus:ring-solar-400 text-base"
                  />
                </FadeUpSmall>
                <FadeUpSmall delay={0.15}>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    className="h-14 rounded-xl border-gray-200 bg-white shadow-sm focus:border-solar-400 focus:ring-solar-400 text-base"
                  />
                </FadeUpSmall>
                <FadeUpSmall delay={0.2}>
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    className="rounded-xl border-gray-200 bg-white shadow-sm focus:border-solar-400 focus:ring-solar-400 text-base resize-none"
                  />
                </FadeUpSmall>
                <AnimatedButton delay={0.25}>
                  <Button className="w-full h-14 bg-gradient-solar text-white font-semibold text-lg rounded-xl shadow-orange hover:shadow-orange-lg transition-all">
                    Submit Request
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </AnimatedButton>
              </form>
            </SlideInRight>
          </div>
        </div>
      </SectionReveal>

      {/* ===== SERVICES SECTION ===== */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header with Stats */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 md:mb-12">
            <div className="max-w-2xl">
              <FadeUp>
                <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2.5 shadow-sm mb-6">
                  <span className="w-2 h-2 bg-solar-500 rounded-full" />
                  <span className="text-navy-600 font-semibold text-sm uppercase tracking-wider">Powering Solutions</span>
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-600 leading-tight">
                  Revolutionizing Energy for{' '}
                  <span className="text-gradient-solar">Tomorrow&apos;s World</span>
                </h2>
              </FadeUp>
              <FadeUpSmall delay={0.2}>
                <p className="text-lg text-gray-600 mt-4 leading-relaxed">
                  At <strong className="text-navy-600">Suncity Solar</strong>, we design and implement clean energy systems that help people, businesses and the planet thrive.
                </p>
              </FadeUpSmall>
            </div>
            
            {/* Stats */}
            <FadeUp delay={0.2} className="flex gap-10">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-navy-600">
                  <AnimatedCounter to={15} suffix="k" />
                </div>
                <p className="text-gray-500 mt-1">kWh Generated Daily</p>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-navy-600">
                  <AnimatedCounter to={5000} suffix="+" />
                </div>
                <p className="text-gray-500 mt-1">Homes & Businesses</p>
              </div>
            </FadeUp>
          </div>

          {/* Service Cards */}
          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.1}>
            {services.map((service, index) => {
              const isGreen = service.bgColor === 'bg-suncity-green';
              const isDark = service.bgColor === 'bg-navy-600';
              const isLight = service.bgColor === 'bg-white';
              
              return (
                <StaggerItem key={service.title}>
                  <AnimatedCard
                    index={index}
                    className={`${service.bgColor} rounded-2xl p-7 h-full ${
                      isLight ? 'shadow-lg border border-gray-100' : 'shadow-xl'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                      isGreen || isDark ? 'bg-white/20' : 'bg-gradient-solar shadow-orange'
                    }`}>
                      <service.icon className={`w-7 h-7 ${isGreen || isDark ? 'text-white' : 'text-white'}`} />
                    </div>
                    <h3 className={`font-bold text-lg mb-3 ${isGreen || isDark ? 'text-white' : 'text-navy-600'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${isGreen || isDark ? 'text-white/80' : 'text-gray-600'}`}>
                      {service.description}
                    </p>
                  </AnimatedCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          {/* Awards Badge */}
          <FadeUp delay={0.5} className="mt-12 flex justify-center">
            <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg">
              <Award className="w-6 h-6 text-suncity-green" />
              <span className="text-navy-600 font-semibold">Top Innovation Awards</span>
              <span className="w-8 h-8 bg-suncity-green rounded-full flex items-center justify-center text-white font-bold text-sm">+</span>
            </div>
          </FadeUp>
        </div>
      </SectionReveal>

      {/* ===== WHY CHOOSE US SECTION ===== */}
      <SectionReveal className="py-10 md:py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <SlideInLeft className="relative order-2 lg:order-1">
              {heroImage && (
                <AnimatedImage>
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                    <Image
                      src={heroImage.imageUrl}
                      alt="Solar Installation"
                      width={600}
                      height={500}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </AnimatedImage>
              )}
            </SlideInLeft>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <FadeUp>
                <div className="inline-flex items-center gap-3 bg-gray-100 rounded-full px-5 py-2.5 mb-6">
                  <span className="w-2 h-2 bg-solar-500 rounded-full" />
                  <span className="text-navy-600 font-semibold text-sm uppercase tracking-wider">Why Choose Suncity Solar</span>
                </div>
              </FadeUp>
              
              <FadeUp delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-600 leading-tight mb-6">
                  Where Innovation{' '}
                  <span className="text-gradient-solar">Meets Impact</span>
                </h2>
              </FadeUp>
              
              <FadeUpSmall delay={0.2}>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  <strong className="text-navy-600">Suncity Solar</strong> combines breakthrough solar technology with real-world sustainability—delivering clean energy solutions that drive progress.
                </p>
              </FadeUpSmall>

              {/* Feature Cards */}
              <StaggerContainer className="space-y-4" staggerDelay={0.1} delayChildren={0.3}>
                {whyChooseUs.map((item) => (
                  <StaggerItem key={item.number}>
                    <AnimatedCard
                      hoverEffect={false}
                      className="bg-navy-600 rounded-2xl p-5 flex gap-5 group hover:bg-navy-500 transition-colors"
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-solar rounded-xl flex items-center justify-center text-xl font-bold text-white shadow-orange">
                        {item.number}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-white mb-1">{item.title}</h3>
                        <p className="text-white/70 text-sm">{item.description}</p>
                      </div>
                    </AnimatedCard>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* ===== TEAM SECTION ===== */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-3 bg-white rounded-full px-5 py-2.5 shadow-sm mb-6">
                <span className="w-2 h-2 bg-solar-500 rounded-full" />
                <span className="text-navy-600 font-semibold text-sm uppercase tracking-wider">Our Expert Team</span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-bold text-navy-600 leading-tight mb-4">
                Experts Behind Every{' '}
                <span className="text-gradient-solar">Solar Solution</span>
              </h2>
            </FadeUp>
            <FadeUpSmall delay={0.2}>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Emphasizes the skill, knowledge, and dedication each team member brings to every project.
              </p>
            </FadeUpSmall>
          </div>

          {/* Team Grid */}
          <StaggerContainer className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto" staggerDelay={0.15}>
            {teamMembers.map((member, index) => (
              <StaggerItem key={member.name}>
                <AnimatedCard index={index} className="group">
                  {/* Card with image and overlay */}
                  <div className="relative rounded-[1.5rem] overflow-hidden shadow-xl">
                    {/* Image */}
                    {member.image && (
                      <ZoomIn>
                        <div className="relative h-80">
                          <Image
                            src={member.image.imageUrl}
                            alt={member.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </ZoomIn>
                    )}
                    
                    {/* Dark green bottom overlay with info */}
                    <div className="bg-suncity-green p-6">
                      <h3 className="font-bold text-xl text-white mb-1">{member.name}</h3>
                      <p className="text-white/80 text-sm mb-4">{member.role}</p>
                      
                      {/* Social Icons */}
                      <div className="flex gap-2">
                        <a
                          href="#"
                          className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-suncity-green transition-all"
                        >
                          <Facebook className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-suncity-green transition-all"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                        <a
                          href="#"
                          className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-suncity-green transition-all"
                        >
                          <Youtube className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
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
