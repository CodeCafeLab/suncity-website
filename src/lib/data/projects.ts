import { PlaceHolderImages } from '@/lib/placeholder-images';

export interface Project {
  slug: string;
  title: string;
  category: string;
  type: string;
  capacity: string;
  location: string;
  client: string;
  completionDate: string;
  shortDescription: string;
  image: typeof PlaceHolderImages[0] | undefined;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  benefits: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
}

export const projectsData: Project[] = [
  {
    slug: 'brightmall-complex',
    title: 'BrightMall Complex',
    category: 'Commercial',
    type: 'Grid-Tied Solar PV',
    capacity: '500 kWp',
    location: 'Jaipur, Rajasthan',
    client: 'BrightMall Retail Group',
    completionDate: 'March 2024',
    shortDescription: 'Solar rooftop installation across a large-scale shopping mall to reduce grid dependency and promote sustainable retail operations.',
    image: PlaceHolderImages.find((p) => p.id === 'project-industrial-1'),
    overview: 'Suncity Solar partnered with BrightMall to design and implement a comprehensive 500 kWp solar rooftop system across their flagship shopping complex. This project demonstrates our expertise in large-scale commercial solar installations, featuring advanced monitoring systems and seamless grid integration.',
    challenge: 'The mall required a solar solution that could operate during peak shopping hours without any disruption to daily operations. The complex rooftop structure with multiple HVAC units and skylights presented unique installation challenges that needed careful engineering solutions.',
    solution: 'Our team designed a custom mounting system that worked around existing rooftop infrastructure. We utilized high-efficiency monocrystalline panels optimized for the regional climate, combined with smart inverters that ensure maximum power harvest while maintaining grid stability.',
    results: [
      '40% reduction in annual electricity costs',
      'Zero grid dependency during daylight hours',
      '650+ tons of CO2 emissions avoided annually',
      'ROI achieved within 4.5 years',
      'Enhanced brand image as a sustainable retail destination'
    ],
    specifications: [
      { label: 'System Capacity', value: '500 kWp' },
      { label: 'Panel Type', value: 'Monocrystalline 540W' },
      { label: 'Number of Panels', value: '925 panels' },
      { label: 'Inverter Type', value: 'String Inverters (100kW x 5)' },
      { label: 'Annual Generation', value: '750,000 kWh' },
      { label: 'Roof Area Utilized', value: '3,200 sq.m' },
      { label: 'Monitoring System', value: 'Real-time IoT Dashboard' },
      { label: 'Warranty', value: '25 years performance guarantee' }
    ],
    benefits: [
      'Significant reduction in operational costs',
      'Enhanced property value and green certification',
      'Positive environmental impact and CSR compliance',
      'Protection against rising electricity tariffs',
      'Minimal maintenance with remote monitoring'
    ],
    testimonial: {
      quote: 'Suncity Solar transformed our energy consumption pattern completely. The installation was seamless, and we\'re now proud to be one of the greenest malls in Rajasthan.',
      author: 'Vikram Mehta',
      position: 'Operations Director, BrightMall'
    }
  },
  {
    slug: 'suncare-hospital',
    title: 'SunCare Hospital',
    category: 'Healthcare',
    type: 'Solar Hybrid (PV + Battery)',
    capacity: '420 kWp',
    location: 'Ahmedabad, Gujarat',
    client: 'SunCare Healthcare Pvt. Ltd.',
    completionDate: 'January 2024',
    shortDescription: 'Development of a solar-battery hybrid system for uninterrupted power in critical hospital zones.',
    image: PlaceHolderImages.find((p) => p.id === 'project-industrial-2'),
    overview: 'Suncity Solar designed and installed a state-of-the-art hybrid solar system with battery backup for SunCare Hospital, ensuring 24/7 uninterrupted power supply for critical medical equipment and patient care areas.',
    challenge: 'Healthcare facilities require absolutely reliable power supply with zero tolerance for outages. The hospital needed a system that could seamlessly switch between solar, battery, and grid power while maintaining critical load support during emergencies.',
    solution: 'We implemented a sophisticated hybrid system combining 420 kWp solar PV with a 200 kWh lithium-ion battery storage system. The intelligent energy management system prioritizes critical loads and ensures automatic failover within milliseconds.',
    results: [
      '100% uptime for critical medical equipment',
      '55% reduction in electricity bills',
      'Zero diesel generator usage during daytime',
      '500+ tons CO2 reduction per year',
      'Enhanced patient safety and care quality'
    ],
    specifications: [
      { label: 'Solar Capacity', value: '420 kWp' },
      { label: 'Battery Storage', value: '200 kWh Lithium-Ion' },
      { label: 'Panel Type', value: 'Bifacial 545W' },
      { label: 'Backup Duration', value: '4 hours (critical loads)' },
      { label: 'Switchover Time', value: '<10 milliseconds' },
      { label: 'Annual Generation', value: '630,000 kWh' },
      { label: 'System Efficiency', value: '98.5%' },
      { label: 'Monitoring', value: '24/7 Remote Monitoring' }
    ],
    benefits: [
      'Uninterrupted power for life-saving equipment',
      'Reduced dependence on diesel generators',
      'Lower carbon footprint for healthcare',
      'Long-term energy cost savings',
      'Compliance with green building standards'
    ],
    testimonial: {
      quote: 'The reliability of Suncity Solar\'s hybrid system has been exceptional. We haven\'t faced a single power interruption in our ICU since installation.',
      author: 'Dr. Priya Sharma',
      position: 'Medical Director, SunCare Hospital'
    }
  },
  {
    slug: 'ecobank-tower',
    title: 'EcoBank Tower',
    category: 'Corporate',
    type: 'Building Integrated PV',
    capacity: '350 kWp',
    location: 'Mumbai, Maharashtra',
    client: 'EcoBank Financial Services',
    completionDate: 'November 2023',
    shortDescription: 'Solar façade and rooftop system installed on a corporate building integrated with energy-efficient systems.',
    image: PlaceHolderImages.find((p) => p.id === 'project-home-1'),
    overview: 'Suncity Solar delivered an innovative Building Integrated Photovoltaic (BIPV) solution for EcoBank Tower, combining aesthetic design with high-performance solar technology. This landmark project showcases how modern architecture can seamlessly incorporate renewable energy.',
    challenge: 'The client wanted a solar installation that would complement the building\'s modern architecture while maximizing energy generation. Traditional rooftop panels weren\'t sufficient to meet their ambitious net-zero goals.',
    solution: 'Our engineering team designed a comprehensive BIPV system that includes solar glass facades on the south-facing walls, solar canopies over parking areas, and high-efficiency rooftop panels. The integrated design generates power from multiple building surfaces.',
    results: [
      '60% of building energy from solar',
      'LEED Platinum certification achieved',
      'Iconic sustainable corporate landmark',
      '35% reduction in cooling costs',
      'Award-winning green building design'
    ],
    specifications: [
      { label: 'Total Capacity', value: '350 kWp' },
      { label: 'Rooftop System', value: '200 kWp' },
      { label: 'Façade BIPV', value: '100 kWp' },
      { label: 'Solar Carport', value: '50 kWp' },
      { label: 'Annual Generation', value: '490,000 kWh' },
      { label: 'Building Integration', value: 'Glass-Glass Modules' },
      { label: 'Aesthetics', value: 'Custom Bronze Tint' },
      { label: 'Smart Features', value: 'BMS Integration' }
    ],
    benefits: [
      'Enhanced building aesthetics and value',
      'Multiple revenue streams from solar',
      'Green certification and ESG compliance',
      'Reduced heat gain and cooling costs',
      'Corporate sustainability leadership'
    ]
  },
  {
    slug: 'greenforge-factory',
    title: 'GreenForge Factory',
    category: 'Industrial',
    type: 'Ground-Mounted Solar PV',
    capacity: '1.2 MWp',
    location: 'Pune, Maharashtra',
    client: 'GreenForge Manufacturing Ltd.',
    completionDate: 'August 2023',
    shortDescription: 'Large-scale solar installation for a manufacturing plant, optimized to meet industrial energy demand.',
    image: PlaceHolderImages.find((p) => p.id === 'project-home-2'),
    overview: 'Suncity Solar executed a mega-watt scale ground-mounted solar project for GreenForge Factory, one of the largest manufacturing installations in the region. This project demonstrates our capability to handle industrial-scale renewable energy implementations.',
    challenge: 'The factory operates heavy machinery with high power demand throughout daylight hours. The client needed a solution that could significantly offset their massive electricity consumption while meeting strict industrial safety and quality standards.',
    solution: 'We designed a 1.2 MWp ground-mounted system using tracker technology for maximum solar harvest. The installation includes industrial-grade components rated for harsh factory environments and real-time monitoring for predictive maintenance.',
    results: [
      '45% reduction in grid electricity purchase',
      'ROI achieved in 3.8 years',
      '1,400+ tons CO2 avoided annually',
      'Zero production downtime during installation',
      'Enhanced competitiveness through lower costs'
    ],
    specifications: [
      { label: 'System Capacity', value: '1.2 MWp (1,200 kWp)' },
      { label: 'Panel Technology', value: 'Bifacial with Trackers' },
      { label: 'Number of Panels', value: '2,200 panels' },
      { label: 'Land Area', value: '2.5 acres' },
      { label: 'Annual Generation', value: '1,800,000 kWh' },
      { label: 'Tracker Type', value: 'Single-Axis Horizontal' },
      { label: 'Inverter Capacity', value: 'Central Inverter 1.1 MW' },
      { label: 'Grid Connection', value: '11 kV Substation' }
    ],
    benefits: [
      'Massive reduction in energy costs',
      'Industrial-grade reliability',
      'Scalable for future expansion',
      'Compliance with sustainability mandates',
      'Competitive advantage in manufacturing'
    ],
    testimonial: {
      quote: 'Suncity Solar\'s industrial expertise is unmatched. They delivered a complex project on time and within budget, and the system performs beyond our expectations.',
      author: 'Rajesh Kulkarni',
      position: 'Plant Director, GreenForge'
    }
  },
  {
    slug: 'urban-mall-rooftop',
    title: 'Urban Mall Rooftop',
    category: 'Retail',
    type: 'Grid-Tied Solar PV',
    capacity: '300 kWp',
    location: 'Jaipur, Rajasthan',
    client: 'Urban Retail Group',
    completionDate: 'May 2024',
    shortDescription: 'Integration with mall\'s BMS for smart energy usage, real-time monitoring, and optimized performance.',
    image: PlaceHolderImages.find((p) => p.id === 'project-industrial-1'),
    overview: 'Suncity Solar implemented a smart solar solution for Urban Mall, integrating seamlessly with the building management system for intelligent energy optimization and real-time performance tracking.',
    challenge: 'The mall needed a solar system that could integrate with their existing BMS infrastructure and provide actionable insights for energy management across different zones and tenants.',
    solution: 'We deployed a 300 kWp system with advanced IoT sensors and BMS integration, enabling zone-wise energy monitoring, predictive maintenance alerts, and automated load management.',
    results: [
      '35% reduction in common area electricity costs',
      'Real-time visibility into energy consumption',
      'Automated peak load management',
      'Enhanced tenant satisfaction',
      'Green building certification support'
    ],
    specifications: [
      { label: 'System Capacity', value: '300 kWp' },
      { label: 'BMS Integration', value: 'Full Modbus/BACnet' },
      { label: 'Monitoring Points', value: '150+ sensors' },
      { label: 'Dashboard', value: 'Custom Web + Mobile App' },
      { label: 'Annual Generation', value: '450,000 kWh' },
      { label: 'Panel Type', value: 'Half-Cut Mono PERC' },
      { label: 'Inverters', value: 'Smart String Inverters' },
      { label: 'Data Analytics', value: 'AI-Powered Insights' }
    ],
    benefits: [
      'Smart energy management',
      'Reduced operational costs',
      'Enhanced sustainability reporting',
      'Tenant energy billing support',
      'Future-ready infrastructure'
    ]
  },
  {
    slug: 'rural-school-offgrid',
    title: 'Rural School Off-Grid',
    category: 'Education',
    type: 'Off-Grid Solar + Battery',
    capacity: '25 kWp',
    location: 'Rural Rajasthan',
    client: 'Vidya Foundation',
    completionDate: 'December 2023',
    shortDescription: 'System runs independently with zero diesel usage, ensuring uninterrupted learning.',
    image: PlaceHolderImages.find((p) => p.id === 'project-home-1'),
    overview: 'Suncity Solar brought reliable electricity to a rural school through a complete off-grid solar solution, transforming educational opportunities for hundreds of students in an area with unreliable grid connectivity.',
    challenge: 'The school is located in a remote area with frequent power outages and no reliable grid infrastructure. Students and teachers struggled with inadequate lighting and inability to use computers and other educational technology.',
    solution: 'We designed a robust 25 kWp off-grid system with substantial battery storage to ensure 8+ hours of backup. The system powers classrooms, computer labs, lighting, and fans, enabling quality education regardless of grid availability.',
    results: [
      '100% elimination of diesel generator use',
      'Extended school hours with reliable lighting',
      'Digital learning enabled with computers',
      'Improved student attendance and performance',
      'Community empowerment through education'
    ],
    specifications: [
      { label: 'Solar Capacity', value: '25 kWp' },
      { label: 'Battery Storage', value: '100 kWh Lead-Acid' },
      { label: 'Backup Duration', value: '8+ hours' },
      { label: 'Loads Powered', value: '50 lights, 20 fans, 10 computers' },
      { label: 'Annual Generation', value: '37,500 kWh' },
      { label: 'System Type', value: 'Complete Off-Grid' },
      { label: 'Inverter', value: '25 kVA Hybrid' },
      { label: 'Warranty', value: '5 years comprehensive' }
    ],
    benefits: [
      'Education access for rural students',
      'Zero running fuel costs',
      'Environmental sustainability',
      'Community development',
      'Replicable model for rural electrification'
    ],
    testimonial: {
      quote: 'For the first time, our students can study after sunset and use computers for learning. Suncity Solar has changed lives in our village.',
      author: 'Ramesh Sharma',
      position: 'Principal, Village School'
    }
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projectsData.map((project) => project.slug);
}

