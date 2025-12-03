'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Award,
  ArrowRight,
  Sparkles,
  BatteryCharging,
  Settings,
  Quote,
  MapPin,
  Target,
  Eye,
  BarChart3,
  Send,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Chatbot from '@/components/layout/Chatbot';
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

const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
const aboutImage = PlaceHolderImages.find((img) => img.id === 'about-suncity');

const services = [
  {
    slug: 'solar-system-design-installation',
    icon: Sun,
    title: 'Solar System Design & Installation',
    description: 'Complete turnkey solar solutions from design to commissioning for homes, businesses, and industries.',
  },
  {
    slug: 'smart-energy-storage-solutions',
    icon: BatteryCharging,
    title: 'Smart Energy Storage Solutions',
    description: 'Advanced lithium battery systems with intelligent energy management for 24/7 power backup.',
  },
  {
    slug: 'energy-efficiency-consulting',
    icon: BarChart3,
    title: 'Energy Efficiency Consulting',
    description: 'Expert analysis and recommendations to optimize your energy consumption and maximize savings.',
  },
  {
    slug: 'monitoring-maintenance-services',
    icon: Settings,
    title: 'Monitoring & Maintenance Services',
    description: 'Proactive system monitoring, regular maintenance, and prompt support to ensure peak performance.',
  },
];

const whyChooseUs = [
  {
    number: '01',
    title: 'Future-Ready Technology',
    description: 'We use cutting-edge solar innovations to deliver smarter, scalable, and long-lasting clean energy solutions.',
  },
  {
    number: '02',
    title: 'Impact-Driven Sustainability',
    description: 'Each project cuts emissions and uplifts communities—because true progress means protecting our planet.',
  },
  {
    number: '03',
    title: 'Trusted by Thousands',
    description: 'From homes to industries, customers choose us for our proven reliability and measurable results.',
  },
];

const projects = [
  {
    slug: 'brightmall-complex',
    capacity: '500 kWp',
    category: 'Commercial',
    type: 'Grid-Tied Solar PV',
    title: 'BrightMall Complex',
    location: 'Jaipur, Rajasthan',
    description: 'Solar rooftop installation across a large-scale shopping mall to reduce grid dependency.',
    image: PlaceHolderImages.find((p) => p.id === 'project-industrial-1'),
  },
  {
    slug: 'suncare-hospital',
    capacity: '420 kWp',
    category: 'Healthcare',
    type: 'Solar Hybrid (PV + Battery)',
    title: 'SunCare Hospital',
    location: 'Ahmedabad, Gujarat',
    description: 'Development of a solar-battery hybrid system for uninterrupted power in critical zones.',
    image: PlaceHolderImages.find((p) => p.id === 'project-industrial-2'),
  },
  {
    slug: 'ecobank-tower',
    capacity: '350 kWp',
    category: 'Corporate',
    type: 'Building Integrated PV',
    title: 'EcoBank Tower',
    location: 'Mumbai, Maharashtra',
    description: 'Solar façade and rooftop system installed on a corporate building.',
    image: PlaceHolderImages.find((p) => p.id === 'project-home-1'),
  },
  {
    slug: 'greenforge-factory',
    capacity: '1.2 MWp',
    category: 'Industrial',
    type: 'Solar PV',
    title: 'GreenForge Factory',
    location: 'Pune, Maharashtra',
    description: 'Large-scale solar installation for a manufacturing plant.',
    image: PlaceHolderImages.find((p) => p.id === 'project-home-2'),
  },
];

const testimonials = [
  {
    text: "Suncity Solar transformed our energy strategy. Their system cut our electricity costs by 60%, while aligning with our sustainability goals. The team was responsive, professional, and forward-thinking from start to finish.",
    name: 'Rajesh Sharma',
    company: 'NovaSteel Industries',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-1'),
  },
  {
    text: "Thanks to Suncity Solar, our facility now runs on clean energy without compromising performance. Their tech expertise and tailored design made the entire transition smooth and cost-effective.",
    name: 'Priya Patel',
    company: 'GreenSpire Foods',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-2'),
  },
  {
    text: "We partnered with Suncity Solar to power our schools sustainably. Their commitment to community impact and long-term performance is unmatched.",
    name: 'Anil Kumar',
    company: 'BrightPath Education',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-3'),
  },
  {
    text: "From consultation to installation, Suncity Solar impressed us. Their system now powers 80% of our campus operations with zero interruptions.",
    name: 'Sunita Reddy',
    company: 'EduGlobal Foundation',
    image: PlaceHolderImages.find((img) => img.id === 'testimonial-4'),
  },
];

const caseStudies = [
  {
    slug: 'urban-mall-rooftop',
    capacity: '300kWp solar rooftop system',
    title: 'Solar Rooftop for Urban Mall',
    description: 'Integration with mall\'s BMS for smart energy usage, real-time monitoring, and optimized performance.',
    category: 'Urban Mall',
    location: 'Jaipur',
  },
  {
    slug: 'rural-school-offgrid',
    capacity: '25kWp solar + battery storage',
    title: 'Off-Grid Solar for Rural School',
    description: 'System runs independently with zero diesel usage, ensuring uninterrupted learning.',
    category: 'Education',
    location: 'Rajasthan',
  },
  {
    slug: 'greenforge-factory',
    capacity: '1MWp ground-mounted solar',
    title: 'Industrial Solar for Textile Factory',
    description: 'Installed with zero production downtime, full safety compliance, and seamless grid integration.',
    category: 'Industrial',
    location: 'Gujarat',
  },
  {
    slug: 'ecobank-tower',
    capacity: '25kWp solar + battery',
    title: 'Solar Carport for Corporate HQ',
    description: 'Modular design with dual benefit: power & parking, plus enhanced EV charging accessibility.',
    category: 'Corporate',
    location: 'Delhi NCR',
  },
];

const blogPosts = [
  {
    slug: 'how-solar-cuts-business-energy-costs',
    title: 'How Solar Cuts Business Energy Costs',
    date: 'July 15, 2024',
    image: PlaceHolderImages.find((p) => p.id === 'blog-future'),
  },
  {
    slug: 'why-green-energy-matters-more-today',
    title: 'Why Green Energy Matters More Today',
    date: 'July 10, 2024',
    image: PlaceHolderImages.find((p) => p.id === 'blog-choose'),
  },
  {
    slug: 'top-ways-to-maximize-solar-efficiency',
    title: 'Top Ways to Maximize Solar Efficiency',
    date: 'July 5, 2024',
    image: PlaceHolderImages.find((p) => p.id === 'blog-battery'),
  },
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        {/* Hero Section - Solarize Style */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          {heroImage && (
            <motion.div
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          )}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-navy-600/80" />

          {/* Animated Gradient Orbs */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute top-20 right-10 w-96 h-96 bg-solar-500/30 rounded-full blur-[100px] animate-pulse" 
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            className="absolute bottom-20 left-10 w-80 h-80 bg-suncity-green/20 rounded-full blur-[80px] animate-pulse" 
            style={{ animationDelay: '1s' }} 
          />

          {/* Content */}
          <div className="relative container mx-auto px-4 pt-32 pb-20">
            <div className="max-w-4xl">
              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8"
              >
                <Sparkles className="w-4 h-4 text-solar-400" />
                <span className="text-white/90 text-sm font-medium tracking-wide">
                  Let&apos;s Talk Energy
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8"
              >
                Next-Gen Energy for a{' '}
                <span className="text-gradient-solar">Sustainable Future</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-xl md:text-2xl text-white/80 mb-10 max-w-2xl leading-relaxed"
              >
                Clean energy isn&apos;t the future, it&apos;s now. <strong className="text-white">Suncity Solar</strong> delivers smart solar solutions that power progress, cut emissions, and protect the planet for generations to come.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 bg-gradient-solar text-white font-semibold text-lg px-10 py-5 rounded-full shadow-orange-lg hover:shadow-2xl transition-all duration-300"
                  >
                    Go Renewable
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="absolute bottom-0 left-0 right-0"
          >
            <div className="container mx-auto px-4">
              <div className="bg-white rounded-t-3xl shadow-2xl p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  {/* Stats */}
                  <div className="flex items-center gap-12">
                    <div className="text-center md:text-left">
                      <div className="text-4xl md:text-5xl font-bold text-navy-600">
                        <AnimatedCounter to={10} suffix="K+" />
                      </div>
                      <p className="text-gray-500 mt-1">Solar Panels Installed</p>
                    </div>
                    <div className="hidden md:block w-px h-16 bg-gray-200" />
                    <div className="flex items-center gap-4">
                      <div className="flex gap-2">
                        {['ISO', 'BIS', 'CE'].map((cert) => (
                          <span key={cert} className="px-3 py-1.5 bg-suncity-green/10 text-suncity-green text-xs font-semibold rounded-full">
                            {cert}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">Certified Company</span>
                    </div>
                  </div>

                  {/* Discover Button */}
                  <div className="flex items-center gap-4">
                    <span className="text-navy-600 font-medium">Discover Next-Gen Solar Solutions</span>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                      <Link
                        href="/products"
                        className="inline-flex items-center justify-center w-12 h-12 bg-gradient-solar text-white rounded-full shadow-orange"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section - Who We Are */}
        <SectionReveal className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image Side */}
              <SlideInLeft>
                <div className="relative">
                  {aboutImage && (
                    <div className="relative">
                      <div className="absolute -inset-4 bg-gradient-to-br from-solar-400/20 to-suncity-green/20 rounded-3xl blur-2xl" />
                      <AnimatedImage>
                        <Image
                          src={aboutImage.imageUrl}
                          alt={aboutImage.description}
                          width={600}
                          height={500}
                          className="relative rounded-3xl shadow-2xl object-cover w-full"
                        />
                      </AnimatedImage>
                      {/* Floating Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 bg-gradient-solar rounded-xl flex items-center justify-center">
                            <Award className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-navy-600">6+</div>
                            <div className="text-sm text-gray-500">Years Experience</div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}
                </div>
              </SlideInLeft>

              {/* Content Side */}
              <div>
                <FadeUp>
                  <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                    <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                    Who We Are
                  </div>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-4xl md:text-5xl font-bold text-navy-600 mb-6 leading-tight">
                    Creating Impact Through{' '}
                    <span className="text-gradient-solar">Clean Innovation</span>
                  </h2>
                </FadeUp>
                <FadeUpSmall delay={0.2}>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    <strong className="text-navy-600">Suncity Solar</strong> is a renewable energy company committed to driving sustainability through smart solar technology, empowering homes, businesses and communities to transition to a cleaner, more efficient and future-proof energy ecosystem.
                  </p>
                </FadeUpSmall>

                <AnimatedButton delay={0.3}>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 text-solar-500 font-semibold hover:gap-4 transition-all duration-300"
                  >
                    Get to Know Us
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </AnimatedButton>

                {/* Vision & Mission */}
                <StaggerContainer className="grid sm:grid-cols-2 gap-6 mt-10" staggerDelay={0.1} delayChildren={0.4}>
                  <StaggerItem>
                    <AnimatedCard className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                      <div className="w-12 h-12 bg-navy-600 rounded-xl flex items-center justify-center mb-4">
                        <Eye className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-navy-600 text-lg mb-2">Our Vision</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        To build a future where every life is empowered by clean, intelligent energy that drives sustainable progress.
                      </p>
                    </AnimatedCard>
                  </StaggerItem>
                  <StaggerItem>
                    <AnimatedCard className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full">
                      <div className="w-12 h-12 bg-gradient-solar rounded-xl flex items-center justify-center mb-4">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold text-navy-600 text-lg mb-2">Our Mission</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        To deliver innovative solar solutions that empower people, drive progress, and protect the planet.
                      </p>
                    </AnimatedCard>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Services Section - Powering Solutions */}
        <SectionReveal className="py-24 bg-white">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
              <div className="max-w-2xl">
                <FadeUp>
                  <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                    <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                    Powering Solutions
                  </div>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-4xl md:text-5xl font-bold text-navy-600 leading-tight">
                    Revolutionizing Energy for{' '}
                    <span className="text-gradient-solar">Tomorrow&apos;s World</span>
                  </h2>
                </FadeUp>
              </div>
              {/* Stats */}
              <FadeUp delay={0.2} className="flex gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-navy-600">
                    <AnimatedCounter to={15} suffix="MW+" />
                  </div>
                  <p className="text-gray-500 text-sm mt-1">kWh Generated Daily</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-navy-600">
                    <AnimatedCounter to={5000} suffix="+" />
                  </div>
                  <p className="text-gray-500 text-sm mt-1">Homes & Businesses Powered</p>
                </div>
              </FadeUp>
            </div>

            {/* Services Grid */}
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {services.map((service, index) => (
                <StaggerItem key={service.title}>
                  <Link href={`/services/${service.slug}`}>
                    <AnimatedCard
                      index={index}
                      className="group bg-gray-50 rounded-2xl p-8 hover:bg-navy-600 transition-all duration-500 cursor-pointer h-full"
                    >
                      <div className="w-16 h-16 bg-gradient-solar rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-orange">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-xl text-navy-600 mb-3 group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 group-hover:text-white/80 transition-colors leading-relaxed">
                        {service.description}
                      </p>
                    </AnimatedCard>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Awards Badge */}
            <FadeUp delay={0.5} className="mt-12 flex justify-center">
              <div className="inline-flex items-center gap-3 bg-suncity-green/10 rounded-full px-6 py-3">
                <Award className="w-6 h-6 text-suncity-green" />
                <span className="text-suncity-green font-semibold">Top Innovation Awards</span>
                <span className="text-navy-600 font-bold">+</span>
              </div>
            </FadeUp>
          </div>
        </SectionReveal>

        {/* Why Choose Us Section */}
        <SectionReveal className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Content */}
              <div>
                <FadeUp>
                  <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                    <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                    Why Choose Suncity Solar
                  </div>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-4xl md:text-5xl font-bold text-navy-600 mb-6 leading-tight">
                    Where Innovation{' '}
                    <span className="text-gradient-solar">Meets Impact</span>
                  </h2>
                </FadeUp>
                <FadeUpSmall delay={0.2}>
                  <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                    <strong className="text-navy-600">Suncity Solar</strong> combines breakthrough solar technology with real-world sustainability—delivering clean energy solutions that drive progress, reduce emissions, and empower communities.
                  </p>
                </FadeUpSmall>

                {/* Features */}
                <StaggerContainer className="space-y-8" staggerDelay={0.1} delayChildren={0.3}>
                  {whyChooseUs.map((item) => (
                    <StaggerItem key={item.number}>
                      <div className="flex gap-6 group">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex-shrink-0 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-2xl font-bold text-solar-500 group-hover:bg-gradient-solar group-hover:text-white transition-all"
                        >
                          {item.number}
                        </motion.div>
                        <div>
                          <h3 className="font-bold text-xl text-navy-600 mb-2">{item.title}</h3>
                          <p className="text-gray-600">{item.description}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Image/Partners */}
              <SlideInRight>
                <div className="bg-white rounded-3xl p-10 shadow-2xl">
                  <h4 className="text-center text-gray-500 mb-8">We&apos;re Proud to Partner with The Best</h4>
                  <StaggerContainer className="grid grid-cols-3 gap-8" staggerDelay={0.08}>
                    {['ISO', 'BIS', 'CE', 'FICCI', 'ASSOCHAM', 'Make in India'].map((partner, index) => (
                      <StaggerItem key={partner}>
                        <motion.div
                          whileHover={{ scale: 1.05, y: -3 }}
                          className="flex items-center justify-center h-16 bg-gray-50 rounded-xl"
                        >
                          <span className="font-bold text-navy-600/60">{partner}</span>
                        </motion.div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </SlideInRight>
            </div>
          </div>
        </SectionReveal>

        {/* Projects Section */}
        <SectionReveal className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <div>
                <FadeUp>
                  <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                    <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                    Our Projects
                  </div>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-4xl md:text-5xl font-bold text-navy-600 leading-tight">
                    Energizing Communities{' '}
                    <span className="text-gradient-solar">Through Innovation</span>
                  </h2>
                </FadeUp>
              </div>
              <AnimatedButton delay={0.2}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 bg-navy-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-navy-500 transition-colors"
                  >
                    More Projects
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </AnimatedButton>
            </div>

            {/* Projects Grid */}
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {projects.map((project, index) => (
                <StaggerItem key={project.title}>
                  <AnimatedCard
                    index={index}
                    className="group bg-gray-50 rounded-2xl overflow-hidden h-full"
                  >
                    {/* Image */}
                    {project.image && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-600/80 to-transparent" />
                        {/* Tags */}
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-white/90 text-navy-600 text-xs font-semibold rounded">
                            {project.capacity}
                          </span>
                          <span className="px-2 py-1 bg-solar-500 text-white text-xs font-semibold rounded">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    )}
                    {/* Content */}
                    <div className="p-6">
                      <span className="text-xs text-solar-500 font-semibold">{project.type}</span>
                      <h3 className="font-bold text-lg text-navy-600 mt-1 mb-2">{project.title}</h3>
                      <div className="flex items-center gap-1 text-gray-500 text-sm mb-3">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 text-solar-500 font-semibold text-sm hover:gap-2 transition-all"
                      >
                        More Detail
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionReveal>

        {/* Testimonials Section */}
        <section className="py-24 bg-navy-600 relative overflow-hidden">
          {/* Decorative */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-96 h-96 bg-solar-500/10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-suncity-green/10 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <FadeUp>
                <div className="inline-flex items-center gap-2 text-solar-400 font-semibold text-sm uppercase tracking-wider mb-4">
                  <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                  Powered by Trust and Results
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  What Our Clients Say{' '}
                  <span className="text-gradient-solar">Matters</span>
                </h2>
              </FadeUp>
            </div>

            {/* Testimonial Slider */}
            <FadeUp delay={0.2} className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-white/10"
                >
                  <Quote className="w-16 h-16 text-solar-400 mb-6" />
                  <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center gap-4">
                    {testimonials[currentTestimonial].image && (
                      <Image
                        src={testimonials[currentTestimonial].image.imageUrl}
                        alt={testimonials[currentTestimonial].name}
                        width={60}
                        height={60}
                        className="rounded-full border-2 border-solar-400"
                      />
                    )}
                    <div>
                      <div className="font-bold text-white text-lg">{testimonials[currentTestimonial].name}</div>
                      <div className="text-white/60">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    whileHover={{ scale: 1.2 }}
                    className={`h-3 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-solar-500 w-8' : 'bg-white/30 w-3'
                    }`}
                  />
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Case Studies Section */}
        <SectionReveal className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <FadeUp>
                <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4 justify-center">
                  <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                  Case Studies
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-4xl md:text-5xl font-bold text-navy-600 leading-tight">
                  Powering Success Through{' '}
                  <span className="text-gradient-solar">Renewable Projects</span>
                </h2>
              </FadeUp>
            </div>

            {/* Case Studies Grid */}
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
              {caseStudies.map((study, index) => (
                <StaggerItem key={study.title}>
                  <AnimatedCard
                    index={index}
                    className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 h-full"
                  >
                    <span className="text-xs text-solar-500 font-semibold">{study.capacity}</span>
                    <h3 className="font-bold text-lg text-navy-600 mt-2 mb-3">{study.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">{study.category}</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">{study.location}</span>
                      </div>
                    </div>
                    <Link
                      href={`/projects/${study.slug}`}
                      className="inline-flex items-center gap-1 text-solar-500 font-semibold text-sm mt-4 hover:gap-2 transition-all"
                    >
                      Read Detail
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionReveal>

        {/* CTA Section */}
        <SectionReveal className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-br from-navy-600 to-navy-500 rounded-3xl p-10 md:p-16 relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/20 rounded-full blur-3xl" />

              <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <FadeUp>
                    <div className="inline-flex items-center gap-2 text-solar-400 font-semibold text-sm uppercase tracking-wider mb-4">
                      <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                      Powered by Trust and Results
                    </div>
                  </FadeUp>
                  <FadeUp delay={0.1}>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                      Ready to switch to solar?{' '}
                      <span className="text-gradient-solar">Let&apos;s start the journey.</span>
                    </h2>
                  </FadeUp>
                  <FadeUpSmall delay={0.2}>
                    <p className="text-lg text-white/80 mb-8">
                      With <strong className="text-white">Suncity Solar</strong>, solar isn&apos;t complicated. It&apos;s reliable, intelligent, and built to perform. Let&apos;s bring clean energy to life together.
                    </p>
                  </FadeUpSmall>
                  <AnimatedButton delay={0.3}>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-gradient-solar text-white font-semibold px-8 py-4 rounded-full shadow-orange hover:shadow-orange-lg transition-all"
                      >
                        Start The Journey
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  </AnimatedButton>
                </div>

                {/* Form */}
                <SlideInRight className="bg-white rounded-2xl p-8 shadow-xl">
                  <FadeUp>
                    <h3 className="text-2xl font-bold text-navy-600 mb-6">Get Your Free Consultation</h3>
                  </FadeUp>
                  <form className="space-y-4">
                    <FadeUpSmall delay={0.1}>
                      <Input placeholder="Your Name" className="h-12 rounded-xl" />
                    </FadeUpSmall>
                    <FadeUpSmall delay={0.15}>
                      <Input type="email" placeholder="Your Email" className="h-12 rounded-xl" />
                    </FadeUpSmall>
                    <FadeUpSmall delay={0.2}>
                      <Input type="tel" placeholder="Phone Number" className="h-12 rounded-xl" />
                    </FadeUpSmall>
                    <AnimatedButton delay={0.25}>
                      <Button className="w-full h-12 bg-gradient-solar text-white font-semibold rounded-xl shadow-orange hover:shadow-orange-lg">
                        Get Free Quote
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </AnimatedButton>
                  </form>
                </SlideInRight>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Blog Section */}
        <SectionReveal className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <div>
                <FadeUp>
                  <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                    <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                    Suncity Solar Blog
                  </div>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-4xl md:text-5xl font-bold text-navy-600 leading-tight">
                    Green Insights,{' '}
                    <span className="text-gradient-solar">Real Impact</span>
                  </h2>
                </FadeUp>
              </div>
              <AnimatedButton delay={0.2}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 bg-navy-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-navy-500 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </AnimatedButton>
            </div>

            {/* Blog Grid */}
            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
              {blogPosts.map((post, index) => (
                <StaggerItem key={post.title}>
                  <AnimatedCard
                    index={index}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg h-full"
                  >
                    {post.image && (
                      <div className="relative h-56 overflow-hidden">
                        <Image
                          src={post.image.imageUrl}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <h3 className="font-bold text-xl text-navy-600 mt-2 mb-4 group-hover:text-solar-500 transition-colors">
                        {post.title}
                      </h3>
                      <Link
                        href={`/blogs/${post.slug}`}
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
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}
