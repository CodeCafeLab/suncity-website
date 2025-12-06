import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import {
  HardHat,
  Compass,
  Wrench,
  GraduationCap,
  CheckCircle,
  ArrowRight,
  Droplets,
  Flame,
  Settings,
  Phone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    "Discover Suncity Solar's end-to-end services, from consultation and installation to maintenance and our pioneering DOS training program.",
};

const services = [
  {
    icon: HardHat,
    title: 'Solar Rooftop Installation',
    description:
      'We provide turnkey rooftop installation services for on-grid, off-grid, and hybrid systems. Our expert team ensures a seamless and efficient installation process.',
    points: ['Residential, Commercial, & Industrial', 'On-Grid, Off-Grid, & Hybrid', 'Net Metering Assistance', 'Highest Safety Standards'],
    color: 'from-solar-400 to-solar-600',
  },
  {
    icon: Droplets,
    title: 'Solar Pump Installation',
    description:
      "Empowering India's agriculture with our specialized solar water pump installation services. We help farmers select the right pump and guide them through subsidy processes.",
    points: ['For Agriculture & Drinking Water', 'AC/DC Pump Systems', 'Surface & Submersible Pumps', 'Govt. Subsidy Scheme Guidance'],
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: Flame,
    title: 'Solar Water Heater Installation',
    description:
      'Enjoy hot water powered by the sun. Our team installs high-quality solar water heaters for homes, hotels, and hospitals with optimal placement.',
    points: ['For Residential & Commercial Use', 'ETC & FPC Systems', 'Plumbing Integration', 'Fast & Clean Installation'],
    color: 'from-red-400 to-red-600',
  },
  {
    icon: Settings,
    title: 'AMC & Maintenance',
    description:
      'Protect your solar investment with our Annual Maintenance Contracts (AMC). We offer proactive maintenance and prompt troubleshooting.',
    points: ['Regular System Health Checks', 'Panel Cleaning Services', 'Inverter & Battery Servicing', '24/7 Support'],
    color: 'from-green-400 to-green-600',
  },
  {
    icon: Compass,
    title: 'Consultation & Site Survey',
    description:
      'Every successful solar project begins with a plan. Our experts provide free consultations, conduct detailed site surveys, and design optimal solutions.',
    points: ['Free Solar Consultation', 'Detailed Site Analysis', 'Energy Load Calculation', 'Customized System Design'],
    color: 'from-purple-400 to-purple-600',
  },
  {
    icon: GraduationCap,
    title: 'DOS Training Program',
    description:
      'Our vision of "Employment for All" comes to life through the DOS—Discovery of Success GURUKUL. We train individuals to become certified solar entrepreneurs.',
    points: ['Technical & Business Training', 'Hands-On Practical Sessions', 'Entrepreneurship Development', 'Certification & Post-Training Support'],
    color: 'from-amber-400 to-amber-600',
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Solar Services"
        breadcrumb="Services"
        description="End-to-end solutions to power your journey towards energy independence."
      />

      {/* Services Grid */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <div className="section-subtitle justify-center">What We Offer</div>
            <h2 className="section-title">
              Comprehensive <span className="text-gradient-solar">Solar Services</span>
            </h2>
            <p className="text-gray-600">
              From initial consultation to long-term maintenance, we provide complete solar solutions tailored to your
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="card-premium p-8 group">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl text-navy-600 mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{service.description}</p>

                {/* Points */}
                <ul className="space-y-3">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-suncity-green flex-shrink-0" />
                      <span className="text-sm text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
            <div className="section-subtitle justify-center">Our Process</div>
            <h2 className="section-title">
              How We <span className="text-gradient-solar">Work</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Free consultation to understand your energy needs' },
              { step: '02', title: 'Site Survey', desc: 'Detailed analysis of your property and requirements' },
              { step: '03', title: 'Installation', desc: 'Professional installation by certified technicians' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and 24/7 customer support' },
            ].map((item, i) => (
              <div key={item.step} className="text-center relative">
                {/* Connector Line */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-solar" />
                )}
                {/* Step Circle */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-solar flex items-center justify-center mx-auto mb-6 shadow-orange relative z-10">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-navy-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-navy-600 to-navy-500 rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-suncity-green/20 rounded-full blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Go Solar?</h2>
                <p className="text-gray-300 mb-8 text-lg">
                  Let our experts guide you. Get a free, no-obligation consultation and a customized quote for your
                  home or business.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="btn-solar">
                    Request a Free Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="tel:+919587211700"
                    className="btn-outline-white flex items-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Call Us Now
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
                  <div className="text-5xl font-bold text-white mb-2">10,000+</div>
                  <div className="text-gray-400">Successful Installations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
