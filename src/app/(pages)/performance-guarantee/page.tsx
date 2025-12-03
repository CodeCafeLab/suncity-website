import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { Shield, Zap, Battery, Wrench, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Performance Guarantee Policy',
  description:
    'Understand the Suncity Solar performance guarantee and warranty policies for our solar products and systems.',
};

const warranties = [
  {
    icon: Zap,
    title: 'Solar Panel Performance Warranty',
    duration: '35 Years',
    description:
      'Our solar panels come with a 35-year linear performance warranty guaranteeing optimal output.',
    details: [
      'At least 90% rated power output for the first 12 years',
      'No more than 0.5% annual decline thereafter',
      'Minimum 80% rated power by year 35',
      '12-year product warranty against manufacturing defects',
    ],
  },
  {
    icon: Shield,
    title: 'Inverter Warranty',
    duration: '3 Years',
    description:
      'The solar inverter is covered by a standard 3-year product warranty against defects.',
    details: [
      'Covers defects in materials and workmanship',
      'Free repair or replacement',
      'Extended warranty available on select models',
      'Remote diagnostics included',
    ],
  },
  {
    icon: Battery,
    title: 'Battery Warranty',
    duration: '5 Years',
    description:
      'For systems with battery storage, batteries are covered by a 5-year product warranty.',
    details: [
      'Subject to operating within specified parameters',
      'Covers manufacturing defects',
      'Proper usage as per product manual required',
      'Cycle life guarantee included',
    ],
  },
  {
    icon: Wrench,
    title: 'Workmanship Warranty',
    duration: '1 Year',
    description:
      'Our installation workmanship warranty covers any defects from the installation process.',
    details: [
      'Covers mounting, wiring, and connections',
      'Defect-free installation guarantee',
      'Conforms to industry standards',
      'Free re-work if issues arise',
    ],
  },
];

const exclusions = [
  'Force majeure events (lightning, floods, fire, acts of nature)',
  'Vandalism, theft, or accidental damage',
  'Unauthorized modifications or repairs',
  'Failure to follow recommended maintenance schedule',
  'Damage caused by pests, birds, or animals',
];

const claimSteps = [
  {
    step: 1,
    title: 'Contact Support',
    description: 'Reach out via email at support@suncitysolar.in or call +91-9587211700',
  },
  {
    step: 2,
    title: 'Provide Details',
    description: 'Share system details, proof of purchase, and issue description with RMS data',
  },
  {
    step: 3,
    title: 'Diagnosis',
    description: 'Our technical team will diagnose remotely or schedule a site visit',
  },
  {
    step: 4,
    title: 'Resolution',
    description: 'Defective components under warranty will be repaired or replaced',
  },
];

export default function PerformanceGuaranteePage() {
  return (
    <>
      <PageHeader
        title="Performance Guarantee Policy"
        breadcrumb="Policy"
        description="Your investment is secure with our comprehensive warranty and performance guarantees."
      />

      {/* Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="section-subtitle justify-center">Our Promise</div>
            <h2 className="section-title">
              Industry-Leading <span className="text-gradient-solar">Warranties</span>
            </h2>
            <p className="text-gray-600 text-lg">
              At Suncity Solar, we stand behind the quality and longevity of our products. Our
              Performance Guarantee Policy ensures your investment is secure and will deliver the
              expected returns.
            </p>
          </div>

          {/* Warranty Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {warranties.map((warranty) => (
              <div key={warranty.title} className="card-premium p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-solar flex items-center justify-center flex-shrink-0 shadow-orange">
                    <warranty.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-navy-600">{warranty.title}</h3>
                    <span className="badge-solar mt-1">{warranty.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{warranty.description}</p>
                <ul className="space-y-2">
                  {warranty.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-suncity-green mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claim Process */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="section-subtitle justify-center">Easy Process</div>
            <h2 className="section-title">
              How to <span className="text-gradient-solar">File a Claim</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {claimSteps.map((item, i) => (
              <div key={item.step} className="text-center relative">
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-solar" />
                )}
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-solar flex items-center justify-center mx-auto mb-4 shadow-orange relative z-10">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                </div>
                <h3 className="font-bold text-lg text-navy-600 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exclusions */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="card-premium p-8 md:p-10 border-l-4 border-solar-500">
              <div className="flex items-start gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-solar-500 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-navy-600 mb-2">Exclusions</h2>
                  <p className="text-gray-600">
                    This guarantee does not cover damage or performance degradation resulting from:
                  </p>
                </div>
              </div>
              <ul className="grid md:grid-cols-2 gap-3 ml-12">
                {exclusions.map((exclusion, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-solar-500 mt-2 flex-shrink-0" />
                    {exclusion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-navy-600 to-navy-500 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Questions About Our Warranty?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Our team is here to help you understand our comprehensive warranty coverage and
                answer any questions you may have.
              </p>
              <Link href="/contact" className="btn-solar">
                Contact Our Team
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
