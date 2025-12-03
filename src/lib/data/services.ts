import { PlaceHolderImages } from '@/lib/placeholder-images';

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  image: typeof PlaceHolderImages[0] | undefined;
  overview: string;
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  features: string[];
  benefits: string[];
  applications: string[];
  whyChoose: string;
  faq: {
    question: string;
    answer: string;
  }[];
}

export const servicesData: Service[] = [
  {
    slug: 'solar-system-design-installation',
    name: 'Solar System Design & Installation',
    shortDescription: 'Complete turnkey solar solutions from design to commissioning for homes, businesses, and industries.',
    image: PlaceHolderImages.find((p) => p.id === 'project-industrial-1'),
    overview: 'Suncity Solar provides end-to-end solar installation services, handling every aspect from initial consultation to final commissioning. Our experienced team designs custom solutions optimized for your specific requirements, ensuring maximum energy generation and return on investment.',
    process: [
      {
        step: 1,
        title: 'Site Assessment',
        description: 'Our engineers conduct a detailed assessment of your site including roof/ground survey, shadow analysis, structural evaluation, and electrical load study.'
      },
      {
        step: 2,
        title: 'Custom System Design',
        description: 'Based on assessment findings, we design an optimized system considering your energy needs, budget, and site constraints using advanced simulation tools.'
      },
      {
        step: 3,
        title: 'Approvals & Documentation',
        description: 'We handle all regulatory approvals including DISCOM applications, net metering registration, and subsidy documentation.'
      },
      {
        step: 4,
        title: 'Professional Installation',
        description: 'Our trained installation teams execute the project following strict safety protocols and quality standards.'
      },
      {
        step: 5,
        title: 'Testing & Commissioning',
        description: 'Comprehensive testing of all components followed by system commissioning and performance verification.'
      },
      {
        step: 6,
        title: 'Handover & Training',
        description: 'Complete system handover with user training, documentation, and activation of monitoring services.'
      }
    ],
    features: [
      'Free site assessment and consultation',
      'Custom-designed systems for optimal performance',
      'Tier-1 components from trusted manufacturers',
      'MNRE-certified installation teams',
      'Complete documentation and approvals handling',
      'Real-time monitoring system included',
      '25-year performance guarantee',
      'Dedicated project manager'
    ],
    benefits: [
      'Reduce electricity bills by 40-90%',
      'Hedge against rising energy costs',
      'Increase property value',
      'Contribute to environmental sustainability',
      'Low maintenance requirements',
      'Long-term reliable performance'
    ],
    applications: [
      'Residential rooftops (1-10 kW)',
      'Commercial buildings (10-500 kW)',
      'Industrial facilities (100 kW - 10 MW)',
      'Educational institutions',
      'Healthcare facilities',
      'Government buildings'
    ],
    whyChoose: 'With over 500 successful installations and 15+ MW capacity deployed, Suncity Solar brings unmatched expertise to every project. Our in-house teams ensure quality control at every stage, and our local presence means responsive support whenever you need it.',
    faq: [
      {
        question: 'How long does installation take?',
        answer: 'Residential installations typically take 2-3 weeks from approval to commissioning. Commercial projects may take 4-8 weeks depending on scale.'
      },
      {
        question: 'Do you handle net metering applications?',
        answer: 'Yes, we handle all documentation and approvals including net metering registration with your local DISCOM.'
      },
      {
        question: 'What warranties are provided?',
        answer: 'We provide 10-12 years product warranty on panels, 5-10 years on inverters, and 25 years performance guarantee.'
      }
    ]
  },
  {
    slug: 'smart-energy-storage-solutions',
    name: 'Smart Energy Storage Solutions',
    shortDescription: 'Advanced lithium battery systems with intelligent energy management for 24/7 power backup.',
    image: PlaceHolderImages.find((p) => p.id === 'product-batteries'),
    overview: 'Suncity Solar\'s energy storage solutions combine cutting-edge lithium battery technology with intelligent management systems to provide reliable backup power and maximize self-consumption of solar energy. Our hybrid systems ensure you have power when you need it most.',
    process: [
      {
        step: 1,
        title: 'Load Analysis',
        description: 'Detailed analysis of your critical loads, backup duration requirements, and consumption patterns to size the optimal storage system.'
      },
      {
        step: 2,
        title: 'System Architecture',
        description: 'Design of storage system architecture including battery capacity, inverter sizing, and integration with existing solar/grid infrastructure.'
      },
      {
        step: 3,
        title: 'Equipment Selection',
        description: 'Selection of appropriate battery chemistry (LiFePO4, Li-ion) and hybrid inverter based on application requirements.'
      },
      {
        step: 4,
        title: 'Installation & Integration',
        description: 'Professional installation with seamless integration into your electrical system and solar PV array.'
      },
      {
        step: 5,
        title: 'Programming & Optimization',
        description: 'Configuration of operating modes, time-of-use settings, and backup priorities based on your preferences.'
      },
      {
        step: 6,
        title: 'Monitoring Setup',
        description: 'Activation of cloud monitoring with mobile app access for real-time visibility and control.'
      }
    ],
    features: [
      'LiFePO4 battery technology (6000+ cycles)',
      'Millisecond switchover time',
      'Multiple operating modes',
      'Scalable storage capacity',
      'Smart load management',
      'Time-of-use optimization',
      'Mobile app monitoring',
      'Generator integration'
    ],
    benefits: [
      'Uninterrupted power supply',
      'Maximum solar self-consumption',
      'Protection against grid outages',
      'Reduced demand charges',
      'Energy arbitrage savings',
      'Future-ready for evolving tariffs'
    ],
    applications: [
      'Residential backup power',
      'Commercial UPS replacement',
      'Medical facility backup',
      'Data center power',
      'Rural off-grid systems',
      'Industrial critical loads'
    ],
    whyChoose: 'Suncity Solar is at the forefront of energy storage deployment in India. Our systems use proven LiFePO4 technology with industry-leading warranties. We design systems that balance performance, safety, and value for your specific needs.',
    faq: [
      {
        question: 'How long do batteries last?',
        answer: 'Our LiFePO4 batteries are rated for 6000+ cycles, equivalent to 15-20 years of typical use with 95% depth of discharge.'
      },
      {
        question: 'Can I add more battery capacity later?',
        answer: 'Yes, our systems are designed to be modular. You can add additional battery modules to increase capacity as your needs grow.'
      },
      {
        question: 'How long can batteries provide backup?',
        answer: 'Backup duration depends on your load and battery capacity. A typical 10kWh system provides 4-8 hours for average homes.'
      }
    ]
  },
  {
    slug: 'energy-efficiency-consulting',
    name: 'Energy Efficiency Consulting',
    shortDescription: 'Expert analysis and recommendations to optimize your energy consumption and maximize savings.',
    image: PlaceHolderImages.find((p) => p.id === 'project-home-1'),
    overview: 'Suncity Solar\'s energy efficiency consulting helps businesses and industries identify opportunities to reduce energy consumption and costs. Our comprehensive audits and actionable recommendations deliver measurable savings beyond solar installation.',
    process: [
      {
        step: 1,
        title: 'Preliminary Assessment',
        description: 'Initial review of utility bills, facility information, and energy consumption patterns to identify audit scope.'
      },
      {
        step: 2,
        title: 'Detailed Energy Audit',
        description: 'On-site audit including equipment inventory, power quality analysis, thermal imaging, and operational assessment.'
      },
      {
        step: 3,
        title: 'Data Analysis',
        description: 'Comprehensive analysis of energy data to identify waste, inefficiencies, and optimization opportunities.'
      },
      {
        step: 4,
        title: 'Recommendations Report',
        description: 'Detailed report with prioritized recommendations, estimated savings, implementation costs, and payback periods.'
      },
      {
        step: 5,
        title: 'Implementation Support',
        description: 'Assistance with implementation of recommended measures including equipment selection and vendor coordination.'
      },
      {
        step: 6,
        title: 'Verification & Monitoring',
        description: 'Post-implementation verification of savings and ongoing monitoring to ensure sustained performance.'
      }
    ],
    features: [
      'Certified energy auditors',
      'Advanced monitoring equipment',
      'Thermal imaging analysis',
      'Power quality assessment',
      'BEE compliance support',
      'Benchmark comparisons',
      'ROI-based recommendations',
      'Implementation support'
    ],
    benefits: [
      'Identify hidden energy waste',
      'Reduce operational costs',
      'Improve equipment performance',
      'Meet compliance requirements',
      'Enhance sustainability credentials',
      'Optimize solar system sizing'
    ],
    applications: [
      'Manufacturing facilities',
      'Commercial buildings',
      'Hotels and hospitality',
      'Healthcare facilities',
      'Educational institutions',
      'Retail chains'
    ],
    whyChoose: 'Our energy efficiency team includes BEE-certified auditors with extensive experience across industries. We combine solar expertise with efficiency consulting to deliver comprehensive energy solutions that maximize your savings.',
    faq: [
      {
        question: 'What savings can I expect?',
        answer: 'Typical energy efficiency measures deliver 10-30% reduction in energy consumption. Combined with solar, total savings can exceed 50%.'
      },
      {
        question: 'Is an energy audit mandatory?',
        answer: 'Large consumers (connected load >1 MW) are required to conduct energy audits under BEE regulations. We help ensure compliance.'
      },
      {
        question: 'How long does an audit take?',
        answer: 'A comprehensive audit typically takes 1-2 weeks including site work and report preparation.'
      }
    ]
  },
  {
    slug: 'monitoring-maintenance-services',
    name: 'Monitoring & Maintenance Services',
    shortDescription: 'Proactive system monitoring, regular maintenance, and prompt support to ensure peak performance.',
    image: PlaceHolderImages.find((p) => p.id === 'project-industrial-2'),
    overview: 'Suncity Solar\'s comprehensive O&M services ensure your solar investment delivers optimal returns throughout its lifetime. Our remote monitoring, preventive maintenance, and rapid response support keep your system performing at its best.',
    process: [
      {
        step: 1,
        title: 'System Onboarding',
        description: 'Configuration of monitoring systems, baseline performance establishment, and documentation of system details.'
      },
      {
        step: 2,
        title: '24/7 Remote Monitoring',
        description: 'Continuous monitoring of system performance with automated alerts for any anomalies or underperformance.'
      },
      {
        step: 3,
        title: 'Preventive Maintenance',
        description: 'Scheduled visits for cleaning, inspection, and preventive maintenance as per AMC terms.'
      },
      {
        step: 4,
        title: 'Performance Analysis',
        description: 'Regular performance reports comparing actual vs expected generation with recommendations for optimization.'
      },
      {
        step: 5,
        title: 'Corrective Maintenance',
        description: 'Rapid response to any issues with guaranteed response times and comprehensive spare parts support.'
      },
      {
        step: 6,
        title: 'Annual Health Check',
        description: 'Detailed annual inspection including thermal imaging, I-V curve testing, and safety checks.'
      }
    ],
    features: [
      '24/7 remote monitoring',
      'Dedicated monitoring dashboard',
      'Automated alert system',
      'Scheduled cleaning services',
      'Preventive maintenance visits',
      'Performance guarantee support',
      'Priority response times',
      'Comprehensive spare parts'
    ],
    benefits: [
      'Maximize system uptime',
      'Ensure optimal generation',
      'Early fault detection',
      'Extend equipment life',
      'Protect your warranty',
      'Peace of mind'
    ],
    applications: [
      'Residential solar systems',
      'Commercial rooftop plants',
      'Industrial solar installations',
      'Ground-mounted systems',
      'Solar water pumps',
      'Hybrid/storage systems'
    ],
    whyChoose: 'Suncity Solar\'s O&M team brings the same expertise that installed your system to its ongoing care. Our local presence across Rajasthan ensures rapid response, while our monitoring center provides round-the-clock vigilance.',
    faq: [
      {
        question: 'How often should panels be cleaned?',
        answer: 'In dusty areas, monthly cleaning is recommended. In cleaner environments, quarterly cleaning may suffice. Our AMC plans include appropriate cleaning schedules.'
      },
      {
        question: 'What is the response time for issues?',
        answer: 'Our standard AMC guarantees 24-hour response for critical issues and 72-hour response for non-critical issues in covered areas.'
      },
      {
        question: 'Can you maintain systems installed by others?',
        answer: 'Yes, we offer O&M services for solar systems installed by other vendors after a comprehensive system audit.'
      }
    ]
  },
  {
    slug: 'solar-financing-solutions',
    name: 'Solar Financing Solutions',
    shortDescription: 'Flexible financing options including loans, leases, and PPAs to make solar accessible.',
    image: PlaceHolderImages.find((p) => p.id === 'project-home-2'),
    overview: 'Suncity Solar partners with leading financial institutions to offer flexible financing solutions that make solar accessible to everyone. Whether you prefer to own your system outright or pay through savings, we have options to suit your needs.',
    process: [
      {
        step: 1,
        title: 'Requirement Assessment',
        description: 'Understanding your financial preferences, system requirements, and eligibility for various financing options.'
      },
      {
        step: 2,
        title: 'Option Evaluation',
        description: 'Presentation of available financing options with detailed comparison of costs, benefits, and terms.'
      },
      {
        step: 3,
        title: 'Documentation Support',
        description: 'Assistance with all documentation required for loan/lease applications including financials and property documents.'
      },
      {
        step: 4,
        title: 'Approval Processing',
        description: 'Coordination with financial partners to expedite approval and disbursement.'
      },
      {
        step: 5,
        title: 'System Installation',
        description: 'Installation proceeds as per standard process once financing is approved.'
      },
      {
        step: 6,
        title: 'Subsidy Adjustment',
        description: 'Processing of government subsidies and adjustment against loan principal where applicable.'
      }
    ],
    features: [
      'Multiple financing partners',
      'Zero down payment options',
      'Attractive interest rates',
      'Tenure up to 7 years',
      'Quick approval process',
      'Subsidy integration',
      'PPA/RESCO models',
      'Lease options'
    ],
    benefits: [
      'Go solar with zero upfront cost',
      'Positive cash flow from day one',
      'Preserve capital for core business',
      'Off-balance sheet options (PPA)',
      'Tax benefits on interest',
      'Flexible repayment terms'
    ],
    applications: [
      'Residential solar loans',
      'Commercial project financing',
      'Industrial solar PPAs',
      'Agricultural solar (KUSUM)',
      'Housing society solar',
      'Lease-to-own programs'
    ],
    whyChoose: 'Suncity Solar\'s financing partnerships and expertise in subsidy processing ensure you get the best possible terms for your solar investment. We handle the complexity so you can focus on enjoying the benefits of solar energy.',
    faq: [
      {
        question: 'What is the minimum credit score required?',
        answer: 'Requirements vary by partner, but typically a CIBIL score of 650+ is preferred for personal solar loans.'
      },
      {
        question: 'Can EMI be less than current electricity bill?',
        answer: 'Yes, many financing options are structured so that monthly EMI is lower than your current electricity bill, resulting in immediate savings.'
      },
      {
        question: 'What is a Solar PPA?',
        answer: 'A Power Purchase Agreement allows you to benefit from solar without ownership. We install and maintain the system; you simply pay for the power generated at a fixed rate.'
      }
    ]
  },
  {
    slug: 'government-subsidy-assistance',
    name: 'Government Subsidy Assistance',
    shortDescription: 'Complete support for availing solar subsidies under PM-SURYA GHAR, KUSUM, and state schemes.',
    image: PlaceHolderImages.find((p) => p.id === 'about-suncity'),
    overview: 'Navigating government solar subsidies can be complex. Suncity Solar\'s subsidy assistance service ensures you receive all benefits you\'re entitled to under various central and state schemes, maximizing your savings on solar investment.',
    process: [
      {
        step: 1,
        title: 'Eligibility Assessment',
        description: 'Evaluation of your eligibility for various subsidy schemes based on consumer category, location, and system specifications.'
      },
      {
        step: 2,
        title: 'Scheme Selection',
        description: 'Recommendation of the most beneficial scheme(s) considering subsidy amount, process complexity, and timeline.'
      },
      {
        step: 3,
        title: 'Portal Registration',
        description: 'Assistance with registration on national portal (PM-SURYA GHAR) and state DISCOM portals.'
      },
      {
        step: 4,
        title: 'Documentation',
        description: 'Preparation and submission of all required documents including ID proof, property documents, and electricity bills.'
      },
      {
        step: 5,
        title: 'Approval Follow-up',
        description: 'Regular follow-up with authorities to expedite approvals and resolve any queries.'
      },
      {
        step: 6,
        title: 'Subsidy Disbursement',
        description: 'Coordination for inspection, verification, and final subsidy credit to your bank account.'
      }
    ],
    features: [
      'Expert knowledge of all schemes',
      'Complete documentation support',
      'Portal registration assistance',
      'Application tracking',
      'Issue resolution',
      'Inspection coordination',
      'Direct bank credit processing',
      'Post-disbursement support'
    ],
    benefits: [
      'Up to 40% subsidy on system cost',
      'Avoid application rejections',
      'Faster processing',
      'Maximum benefit realization',
      'Hassle-free experience',
      'Single point of contact'
    ],
    applications: [
      'PM-SURYA GHAR (Residential)',
      'PM-KUSUM (Agricultural)',
      'State rooftop schemes',
      'Housing society subsidies',
      'MSME incentives',
      'Accelerated depreciation'
    ],
    whyChoose: 'Suncity Solar has processed hundreds of subsidy applications with a near-100% success rate. Our deep understanding of scheme requirements and established relationships with authorities ensures smooth processing of your subsidy.',
    faq: [
      {
        question: 'How much subsidy can I get?',
        answer: 'Under PM-SURYA GHAR, residential consumers can get ₹18,000/kW for up to 3 kW and ₹9,000/kW for 3-10 kW capacity.'
      },
      {
        question: 'How long does subsidy processing take?',
        answer: 'Typically 4-8 weeks from installation completion to subsidy credit, depending on DISCOM processing times.'
      },
      {
        question: 'Is subsidy available for commercial installations?',
        answer: 'Central subsidies are primarily for residential. However, commercial users benefit from accelerated depreciation and state-specific incentives.'
      }
    ]
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}

