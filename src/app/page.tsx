'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sun,
  Award,
  ArrowRight,
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
    icon: Sun,
    title: 'Solar System Design & Installation',
    description: 'Complete turnkey solar solutions from design to commissioning for homes, businesses, and industries.',
  },
  {
    icon: BatteryCharging,
    title: 'Smart Energy Storage Solutions',
    description: 'Advanced lithium battery systems with intelligent energy management for 24/7 power backup.',
  },
  {
    icon: BarChart3,
    title: 'Energy Efficiency Consulting',
    description: 'Expert analysis and recommendations to optimize your energy consumption and maximize savings.',
  },
  {
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
    capacity: '500 kWp',
    category: 'Commercial',
    type: 'Grid-Tied Solar PV',
    title: 'BrightMall Complex',
    location: 'Jaipur, Rajasthan',
    description: 'Solar rooftop installation across a large-scale shopping mall to reduce grid dependency.',
    image: PlaceHolderImages.find((p) => p.id === 'project-industrial-1'),
  },
  {
    capacity: '420 kWp',
    category: 'Healthcare',
    type: 'Solar Hybrid (PV + Battery)',
    title: 'SunCare Hospital',
    location: 'Ahmedabad, Gujarat',
    description: 'Development of a solar-battery hybrid system for uninterrupted power in critical zones.',
    image: PlaceHolderImages.find((p) => p.id === 'project-industrial-2'),
  },
  {
    capacity: '350 kWp',
    category: 'Corporate',
    type: 'Building Integrated PV',
    title: 'EcoBank Tower',
    location: 'Mumbai, Maharashtra',
    description: 'Solar façade and rooftop system installed on a corporate building.',
    image: PlaceHolderImages.find((p) => p.id === 'project-home-1'),
  },
  {
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
    capacity: '300kWp solar rooftop system',
    title: 'Solar Rooftop for Urban Mall',
    description: 'Integration with mall\'s BMS for smart energy usage, real-time monitoring, and optimized performance.',
    category: 'Urban Mall',
    location: 'Jaipur',
  },
  {
    capacity: '25kWp solar + battery storage',
    title: 'Off-Grid Solar for Rural School',
    description: 'System runs independently with zero diesel usage, ensuring uninterrupted learning.',
    category: 'Education',
    location: 'Rajasthan',
  },
  {
    capacity: '1MWp ground-mounted solar',
    title: 'Industrial Solar for Textile Factory',
    description: 'Installed with zero production downtime, full safety compliance, and seamless grid integration.',
    category: 'Industrial',
    location: 'Gujarat',
  },
  {
    capacity: '25kWp solar + battery',
    title: 'Solar Carport for Corporate HQ',
    description: 'Modular design with dual benefit: power & parking, plus enhanced EV charging accessibility.',
    category: 'Corporate',
    location: 'Delhi NCR',
  },
];

const blogPosts = [
  {
    title: 'How Solar Rooftop Systems Reduce Electricity Bills',
    date: 'December 5, 2024',
    image: PlaceHolderImages.find((p) => p.id === 'blog-future'),
  },
  {
    title: 'Why Solar Is the Smartest Investment for Homes & Industries',
    date: 'November 28, 2024',
    image: PlaceHolderImages.find((p) => p.id === 'blog-choose'),
  },
  {
    title: 'Why Choosing the Right Solar EPC Partner Matters',
    date: 'November 20, 2024',
    image: PlaceHolderImages.find((p) => p.id === 'blog-metering'),
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
          <div className="absolute inset-0 bg-gradient-to-b from-navy-600/90 via-navy-600/80 to-navy-600/90" />

          {/* Content */}
          <div className="relative container mx-auto px-4 pt-28 pb-16">
            <div className="max-w-5xl mx-auto text-center">
              {/* Main Headline - Bold Serif */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-tight mb-4"
              >
                Powering Bharat&apos;s Future with{' '}
                <span className="text-gradient-gold">Clean Solar Energy</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
              >
                Cut electricity costs by up to 70% with India&apos;s most trusted solar EPC solutions. ISO-certified, BIS-approved, and backed by 6+ years of excellence across 5000+ installations.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-gold text-navy-600 font-semibold text-base px-8 py-4 rounded-lg shadow-gold-lg hover:shadow-gold transition-all duration-300"
                  >
                    Get Free Quote
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/products"
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-semibold text-base px-8 py-4 rounded-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300"
                  >
                    Explore Solutions
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Stats Bar - Solis Power Style */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="absolute bottom-0 left-0 right-0"
          >
            <div className="container mx-auto px-4 md:px-6">
              <div className="bg-white rounded-t-[2rem] shadow-premium p-6 md:p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {/* Stat 1 */}
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-serif font-bold text-navy-600 mb-2">
                      <AnimatedCounter to={10} suffix="K+" />
                    </div>
                    <p className="text-gray-600 font-medium">Solar Panels Installed</p>
                  </div>
                  
                  {/* Stat 2 */}
                  <div className="text-center border-y md:border-y-0 md:border-x border-gray-200 py-6 md:py-0">
                    <div className="text-5xl md:text-6xl font-serif font-bold text-navy-600 mb-2">
                      <AnimatedCounter to={15} suffix="MW+" />
                    </div>
                    <p className="text-gray-600 font-medium">Daily Generation</p>
                  </div>
                  
                  {/* Stat 3 */}
                  <div className="text-center">
                    <div className="text-5xl md:text-6xl font-serif font-bold text-navy-600 mb-2">
                      <AnimatedCounter to={5000} suffix="+" />
                    </div>
                    <p className="text-gray-600 font-medium">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* About Section - Solis Power Style */}
        <SectionReveal className="py-8 md:py-12 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
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
                  <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-wider mb-4">
                    About Suncity Solar
                  </span>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-600 mb-6 leading-tight">
                    Empowering Bharat with{' '}
                    <span className="text-gradient-gold">Sustainable Energy</span>
                  </h2>
                </FadeUp>
                <FadeUpSmall delay={0.2}>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    <strong className="text-navy-600">Suncity Solar</strong> is a leading renewable energy company committed to driving sustainability through smart solar technology. We empower homes, businesses, and communities to transition to a cleaner, more efficient, and future-proof energy ecosystem.
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
                    <AnimatedCard className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover border border-gray-100 h-full transition-all">
                      <div className="w-14 h-14 bg-navy-600 rounded-xl flex items-center justify-center mb-5">
                        <Eye className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="font-serif font-bold text-navy-600 text-xl mb-3">Our Vision</h3>
                      <p className="text-gray-600 leading-relaxed">
                        To build a future where every life is empowered by clean, intelligent energy that drives sustainable progress.
                      </p>
                    </AnimatedCard>
                  </StaggerItem>
                  <StaggerItem>
                    <AnimatedCard className="bg-white rounded-2xl p-8 shadow-card hover:shadow-card-hover border border-gray-100 h-full transition-all">
                      <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-5">
                        <Target className="w-7 h-7 text-navy-600" />
                      </div>
                      <h3 className="font-serif font-bold text-navy-600 text-xl mb-3">Our Mission</h3>
                      <p className="text-gray-600 leading-relaxed">
                        To deliver innovative solar solutions that empower people, drive progress, and protect the planet.
                      </p>
                    </AnimatedCard>
                  </StaggerItem>
                </StaggerContainer>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Services Section - Solis Power Style */}
        <SectionReveal className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
              <FadeUp>
                <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-wider mb-4">
                  Our Services
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-navy-600 leading-tight mb-6">
                  Complete Solar Solutions for{' '}
                  <span className="text-gradient-gold">Every Need</span>
                </h2>
              </FadeUp>
              <FadeUpSmall delay={0.2}>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From residential rooftops to industrial power plants, we deliver end-to-end solar solutions.
                </p>
              </FadeUpSmall>
            </div>

            {/* Services Grid - Solis Power Card Style */}
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" staggerDelay={0.1}>
              {services.map((service, index) => (
                <StaggerItem key={service.title}>
                  <AnimatedCard
                    index={index}
                    className="group bg-white rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 h-full border border-gray-100"
                  >
                    <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-gold">
                      <service.icon className="w-7 h-7 text-navy-600" />
                    </div>
                    <h3 className="font-serif font-bold text-lg text-navy-600 mb-2 group-hover:text-gold-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
                    </p>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionReveal>

        {/* Why Choose Us Section */}
        <SectionReveal className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Content */}
              <div>
                <FadeUp>
                  <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-wider mb-4">
                    Why Choose Suncity Solar
                  </span>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-600 mb-4 leading-tight">
                    Where Innovation{' '}
                    <span className="text-gradient-gold">Meets Impact</span>
                  </h2>
                </FadeUp>
                <FadeUpSmall delay={0.2}>
                  <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
                    <strong className="text-navy-600">Suncity Solar</strong> combines breakthrough solar technology with real-world sustainability—delivering clean energy solutions that drive progress, reduce emissions, and empower communities.
                  </p>
                </FadeUpSmall>

                {/* Features */}
                <StaggerContainer className="space-y-6" staggerDelay={0.1} delayChildren={0.3}>
                  {whyChooseUs.map((item) => (
                    <StaggerItem key={item.number}>
                      <div className="flex gap-4 group">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="flex-shrink-0 w-14 h-14 bg-white rounded-xl shadow-card flex items-center justify-center text-xl font-bold text-gold-500 group-hover:bg-gradient-gold group-hover:text-navy-600 transition-all"
                        >
                          {item.number}
                        </motion.div>
                        <div>
                          <h3 className="font-serif font-bold text-lg text-navy-600 mb-1">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>

              {/* Image/Partners */}
              <SlideInRight>
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-premium">
                  <h4 className="text-center text-gray-500 mb-6 text-sm font-medium">We&apos;re Proud to Partner with The Best</h4>
                  <StaggerContainer className="grid grid-cols-3 gap-4 md:gap-6" staggerDelay={0.08}>
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
        <SectionReveal className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12">
              <div>
                <FadeUp>
                  <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-wider mb-4">
                    Our Projects
                  </span>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-600 leading-tight">
                    Energizing Communities{' '}
                    <span className="text-gradient-gold">Through Innovation</span>
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
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" staggerDelay={0.1}>
              {projects.map((project, index) => (
                <StaggerItem key={project.title}>
                  <AnimatedCard
                    index={index}
                    className="group bg-white rounded-xl overflow-hidden h-full shadow-card hover:shadow-card-hover border border-gray-100"
                  >
                    {/* Image */}
                    {project.image && (
                      <div className="relative h-40 overflow-hidden">
                        <Image
                          src={project.image.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-600/80 to-transparent" />
                        {/* Tags */}
                        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-white/90 text-navy-600 text-xs font-semibold rounded">
                            {project.capacity}
                          </span>
                          <span className="px-2 py-1 bg-gold-500 text-navy-600 text-xs font-semibold rounded">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    )}
                    {/* Content */}
                    <div className="p-5">
                      <span className="text-xs text-gold-500 font-semibold">{project.type}</span>
                      <h3 className="font-serif font-bold text-base text-navy-600 mt-1 mb-2">{project.title}</h3>
                      <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                        <MapPin className="w-3 h-3" />
                        {project.location}
                      </div>
                      <p className="text-gray-600 text-xs mb-3 line-clamp-2 leading-relaxed">{project.description}</p>
                      <Link
                        href="/projects"
                        className="inline-flex items-center gap-1 text-gold-500 font-semibold text-xs hover:gap-2 transition-all"
                      >
                        More Detail
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionReveal>

        {/* Testimonials Section */}
        <section className="py-12 md:py-16 bg-navy-600 relative overflow-hidden">
          {/* Decorative */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"
          />

          <div className="container mx-auto px-4 md:px-6 relative">
            <div className="text-center mb-8 md:mb-10">
              <FadeUp>
                <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
                  Powered by Trust and Results
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                  What Our Clients Say{' '}
                  <span className="text-gradient-gold">Matters</span>
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
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-white/10"
                >
                  <Quote className="w-12 h-12 text-gold-400 mb-4" />
                  <p className="text-lg md:text-xl text-white leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  <div className="flex items-center gap-4">
                    {testimonials[currentTestimonial].image && (
                      <Image
                        src={testimonials[currentTestimonial].image.imageUrl}
                        alt={testimonials[currentTestimonial].name}
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-gold-400"
                      />
                    )}
                    <div>
                      <div className="font-bold text-white">{testimonials[currentTestimonial].name}</div>
                      <div className="text-white/60 text-sm">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    whileHover={{ scale: 1.2 }}
                    className={`h-2 rounded-full transition-all ${
                      index === currentTestimonial ? 'bg-gold-500 w-8' : 'bg-white/30 w-2'
                    }`}
                  />
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* Case Studies Section */}
        <SectionReveal className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10 md:mb-12">
              <FadeUp>
                <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-wider mb-4">
                  Case Studies
                </span>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-600 leading-tight">
                  Powering Success Through{' '}
                  <span className="text-gradient-gold">Renewable Projects</span>
                </h2>
              </FadeUp>
            </div>

            {/* Case Studies Grid */}
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" staggerDelay={0.1}>
              {caseStudies.map((study, index) => (
                <StaggerItem key={study.title}>
                  <AnimatedCard
                    index={index}
                    className="group bg-white rounded-xl p-5 shadow-card border border-gray-100 h-full hover:shadow-card-hover"
                  >
                    <span className="text-xs text-gold-500 font-semibold">{study.capacity}</span>
                    <h3 className="font-serif font-bold text-base text-navy-600 mt-2 mb-2">{study.title}</h3>
                    <p className="text-gray-600 text-xs mb-3 leading-relaxed">{study.description}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">{study.category}</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">{study.location}</span>
                      </div>
                    </div>
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1 text-gold-500 font-semibold text-xs mt-3 hover:gap-2 transition-all"
                    >
                      Read Detail
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionReveal>

        {/* CTA Section */}
        <SectionReveal className="py-10 md:py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="bg-gradient-to-br from-navy-600 to-navy-500 rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/20 rounded-full blur-3xl" />

              <div className="relative grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div>
                  <FadeUp>
                    <span className="inline-block text-gold-400 font-semibold text-sm uppercase tracking-wider mb-4">
                      Powered by Trust and Results
                    </span>
                  </FadeUp>
                  <FadeUp delay={0.1}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                      Ready to switch to solar?{' '}
                      <span className="text-gradient-gold">Let&apos;s start the journey.</span>
                    </h2>
                  </FadeUp>
                  <FadeUpSmall delay={0.2}>
                    <p className="text-base md:text-lg text-white/80 mb-6">
                      With <strong className="text-white">Suncity Solar</strong>, solar isn&apos;t complicated. It&apos;s reliable, intelligent, and built to perform. Let&apos;s bring clean energy to life together.
                    </p>
                  </FadeUpSmall>
                  <AnimatedButton delay={0.3}>
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-gradient-gold text-navy-600 font-semibold px-6 py-3 rounded-lg shadow-gold hover:shadow-gold-lg transition-all"
                      >
                        Start The Journey
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  </AnimatedButton>
                </div>

                {/* Form */}
                <SlideInRight className="bg-white rounded-xl p-6 md:p-8 shadow-premium">
                  <FadeUp>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-navy-600 mb-5">Get Your Free Consultation</h3>
                  </FadeUp>
                  <form className="space-y-3">
                    <FadeUpSmall delay={0.1}>
                      <Input placeholder="Your Name" className="h-11 rounded-lg" />
                    </FadeUpSmall>
                    <FadeUpSmall delay={0.15}>
                      <Input type="email" placeholder="Your Email" className="h-11 rounded-lg" />
                    </FadeUpSmall>
                    <FadeUpSmall delay={0.2}>
                      <Input type="tel" placeholder="Phone Number" className="h-11 rounded-lg" />
                    </FadeUpSmall>
                    <AnimatedButton delay={0.25}>
                      <Button className="w-full h-11 bg-gradient-gold text-navy-600 font-semibold rounded-lg shadow-gold hover:shadow-gold-lg">
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
        <SectionReveal className="py-8 md:py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-8 md:mb-10">
              <div>
                <FadeUp>
                  <span className="inline-block text-gold-500 font-semibold text-sm uppercase tracking-wider mb-3">
                    Suncity Solar Blog
                  </span>
                </FadeUp>
                <FadeUp delay={0.1}>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-navy-600 leading-tight">
                    Green Insights,{' '}
                    <span className="text-gradient-gold">Real Impact</span>
                  </h2>
                </FadeUp>
              </div>
              <AnimatedButton delay={0.2}>
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/blogs"
                    className="inline-flex items-center gap-2 bg-navy-600 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-navy-500 transition-colors text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </AnimatedButton>
            </div>

            {/* Blog Grid */}
            <StaggerContainer className="grid md:grid-cols-3 gap-4 md:gap-6" staggerDelay={0.15}>
              {blogPosts.map((post, index) => (
                <StaggerItem key={post.title}>
                  <AnimatedCard
                    index={index}
                    className="group bg-white rounded-xl overflow-hidden shadow-card h-full hover:shadow-card-hover border border-gray-100"
                  >
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
                    <div className="p-5">
                      <span className="text-gray-500 text-xs">{post.date}</span>
                      <h3 className="font-serif font-bold text-lg text-navy-600 mt-2 mb-3 group-hover:text-gold-500 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <Link
                        href="/blogs"
                        className="inline-flex items-center gap-1 text-gold-500 font-semibold text-sm hover:gap-2 transition-all"
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
