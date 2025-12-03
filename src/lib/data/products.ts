import { PlaceHolderImages } from '@/lib/placeholder-images';

export interface Product {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  image: typeof PlaceHolderImages[0] | undefined;
  price?: string;
  overview: string;
  features: string[];
  specifications: {
    label: string;
    value: string;
  }[];
  benefits: string[];
  applications: string[];
  warranty: string;
  certification: string[];
  madeInIndia: boolean;
  whyChoose: string;
}

export const productsData: Product[] = [
  {
    slug: 'monocrystalline-solar-panel-540w',
    name: 'Monocrystalline Solar Panel 540W',
    category: 'Solar Panels',
    shortDescription: 'High-efficiency monocrystalline panels with 21% efficiency for maximum power generation.',
    image: PlaceHolderImages.find((p) => p.id === 'product-solar-panels'),
    price: '₹18,500/panel',
    overview: 'The Suncity Solar 540W Monocrystalline Panel represents the pinnacle of solar technology, delivering exceptional efficiency and durability for residential, commercial, and industrial applications. Manufactured to the highest quality standards, these panels offer superior performance in diverse Indian weather conditions.',
    features: [
      'Premium Grade A+ monocrystalline cells',
      '21%+ module efficiency',
      'Half-cut cell technology for better shade tolerance',
      'Anti-reflective tempered glass coating',
      'Robust anodized aluminum frame',
      'IP68 rated junction box',
      'PID-free performance guarantee',
      'Low light performance optimization'
    ],
    specifications: [
      { label: 'Power Output', value: '540W (±3%)' },
      { label: 'Cell Type', value: 'Mono PERC Half-Cut' },
      { label: 'Module Efficiency', value: '21.2%' },
      { label: 'Dimensions', value: '2279 x 1134 x 35mm' },
      { label: 'Weight', value: '28.5 kg' },
      { label: 'Maximum System Voltage', value: '1500V DC' },
      { label: 'Temperature Coefficient', value: '-0.35%/°C' },
      { label: 'Operating Temperature', value: '-40°C to +85°C' },
      { label: 'Front Glass', value: '3.2mm Tempered' },
      { label: 'Frame', value: 'Anodized Aluminum' },
      { label: 'Junction Box', value: 'IP68 with 3 Bypass Diodes' },
      { label: 'Connector', value: 'MC4 Compatible' }
    ],
    benefits: [
      'Maximum power output per square meter',
      'Excellent performance in high temperatures',
      'Superior low-light and cloudy day performance',
      'Enhanced durability against harsh weather',
      '25-year linear performance warranty',
      'Reduced installation costs per watt'
    ],
    applications: [
      'Residential rooftop installations',
      'Commercial building solar systems',
      'Industrial ground-mounted arrays',
      'Solar carports and canopies',
      'Agricultural pump systems',
      'Off-grid and hybrid systems'
    ],
    warranty: '12 years product warranty, 25 years linear performance warranty (guaranteed 84.8% output at year 25)',
    certification: ['BIS', 'IEC 61215', 'IEC 61730', 'ISO 9001', 'ISO 14001'],
    madeInIndia: true,
    whyChoose: 'Suncity Solar partners with Tier-1 manufacturers meeting the strictest quality standards. Our 540W panels deliver industry-leading efficiency backed by comprehensive warranties and local technical support throughout India.'
  },
  {
    slug: 'bifacial-solar-panel-550w',
    name: 'Bifacial Solar Panel 550W',
    category: 'Solar Panels',
    shortDescription: 'Dual-sided power generation for up to 30% additional energy from reflected light.',
    image: PlaceHolderImages.find((p) => p.id === 'product-solar-panels'),
    price: '₹21,000/panel',
    overview: 'The Suncity Solar 550W Bifacial Panel is designed for maximum energy harvest by capturing sunlight from both front and rear surfaces. Ideal for ground-mounted installations and elevated rooftop systems where reflected light can be captured, these panels deliver exceptional value for commercial and utility-scale projects.',
    features: [
      'Dual glass construction for bifacial generation',
      'Up to 30% bifacial gain in optimal conditions',
      'Transparent backsheet for rear-side light capture',
      'N-type TOPCon cell technology',
      'Zero LID (Light Induced Degradation)',
      'Enhanced durability with glass-glass design',
      'Lower temperature coefficient',
      'Salt mist and ammonia resistant'
    ],
    specifications: [
      { label: 'Front Power Output', value: '550W' },
      { label: 'Bifacial Factor', value: '70%' },
      { label: 'Cell Type', value: 'N-Type TOPCon' },
      { label: 'Module Efficiency', value: '21.5%' },
      { label: 'Dimensions', value: '2278 x 1134 x 30mm' },
      { label: 'Weight', value: '32 kg' },
      { label: 'Maximum System Voltage', value: '1500V DC' },
      { label: 'Temperature Coefficient', value: '-0.30%/°C' },
      { label: 'Glass Type', value: '2mm+2mm Dual Glass' },
      { label: 'Frame', value: 'Optional Frameless' },
      { label: 'Warranty Period', value: '30 years' }
    ],
    benefits: [
      'Additional 10-30% energy from rear side',
      'Superior performance in snow and sandy environments',
      'Lower LCOE (Levelized Cost of Energy)',
      'Extended 30-year performance warranty',
      'Better aesthetics with frameless option',
      'Ideal for tracker installations'
    ],
    applications: [
      'Ground-mounted utility scale projects',
      'Elevated rooftop installations',
      'Carport and canopy systems',
      'Single-axis tracker systems',
      'Floating solar installations',
      'Agrivoltaic applications'
    ],
    warranty: '15 years product warranty, 30 years linear performance warranty',
    certification: ['BIS', 'IEC 61215', 'IEC 61730', 'UL 61730', 'ISO 9001'],
    madeInIndia: true,
    whyChoose: 'Bifacial technology offers the best return on investment for projects where rear-side generation is possible. Suncity Solar\'s bifacial panels are optimized for Indian conditions and backed by our industry-leading 30-year warranty.'
  },
  {
    slug: 'on-grid-solar-inverter-10kw',
    name: 'On-Grid Solar Inverter 10kW',
    category: 'Inverters',
    shortDescription: 'High-efficiency string inverter with smart monitoring and grid management features.',
    image: PlaceHolderImages.find((p) => p.id === 'product-inverters'),
    price: '₹85,000',
    overview: 'The Suncity Solar 10kW On-Grid Inverter is engineered for reliable performance in demanding Indian conditions. Featuring advanced MPPT technology, comprehensive monitoring, and robust grid management capabilities, this inverter ensures maximum solar harvest while meeting all utility requirements.',
    features: [
      'Dual MPPT for flexible array design',
      '98.6% peak conversion efficiency',
      'Wide MPPT voltage range',
      'Integrated AC/DC disconnect',
      'Built-in Wi-Fi monitoring',
      'IP65 outdoor rated enclosure',
      'Active cooling with smart fan',
      'Anti-islanding protection'
    ],
    specifications: [
      { label: 'Rated AC Power', value: '10 kW' },
      { label: 'Max DC Input Power', value: '13 kW' },
      { label: 'Max Efficiency', value: '98.6%' },
      { label: 'MPPT Efficiency', value: '99.9%' },
      { label: 'Number of MPPTs', value: '2' },
      { label: 'DC Input Voltage Range', value: '200-850V' },
      { label: 'AC Output Voltage', value: '230V / 400V' },
      { label: 'Grid Frequency', value: '50Hz' },
      { label: 'THD', value: '<3%' },
      { label: 'Operating Temperature', value: '-25°C to +60°C' },
      { label: 'Protection Rating', value: 'IP65' },
      { label: 'Weight', value: '25 kg' }
    ],
    benefits: [
      'Maximum energy harvest with dual MPPT',
      'Remote monitoring via mobile app',
      'Compact design for easy installation',
      'Silent operation for residential use',
      'Comprehensive fault diagnosis',
      'OTA firmware updates'
    ],
    applications: [
      'Residential rooftop systems',
      'Small commercial installations',
      'Grid-tied solar systems',
      'Net metering applications',
      'Self-consumption optimization'
    ],
    warranty: '5 years standard warranty, extendable to 10/15/25 years',
    certification: ['BIS', 'IEC 62109', 'IEEE 1547', 'CEA Technical Standards'],
    madeInIndia: true,
    whyChoose: 'Suncity Solar inverters combine global technology with local support. Our inverters are tested for Indian grid conditions and backed by pan-India service network for quick resolution of any issues.'
  },
  {
    slug: 'hybrid-inverter-5kw-battery',
    name: 'Hybrid Inverter 5kW with Battery',
    category: 'Energy Storage',
    shortDescription: 'All-in-one hybrid solution with integrated lithium battery for energy independence.',
    image: PlaceHolderImages.find((p) => p.id === 'product-batteries'),
    price: '₹2,75,000',
    overview: 'The Suncity Solar 5kW Hybrid System combines a sophisticated hybrid inverter with high-capacity lithium battery storage for complete energy independence. Perfect for areas with frequent power cuts or for maximizing self-consumption of solar energy, this system ensures you have power when you need it.',
    features: [
      'Integrated 10kWh lithium battery',
      'Seamless grid-to-battery switching',
      'Multiple operating modes',
      'Time-of-use optimization',
      'Generator integration capability',
      'Smart load management',
      'Cloud-based monitoring',
      'UPS functionality (<10ms switchover)'
    ],
    specifications: [
      { label: 'Inverter Rating', value: '5 kW' },
      { label: 'Battery Capacity', value: '10 kWh (usable)' },
      { label: 'Battery Type', value: 'LiFePO4' },
      { label: 'Cycle Life', value: '6000+ cycles' },
      { label: 'Depth of Discharge', value: '95%' },
      { label: 'Backup Duration', value: '4-8 hours (load dependent)' },
      { label: 'Solar Input', value: '6.5 kW max' },
      { label: 'AC Output', value: '5 kW continuous' },
      { label: 'Surge Power', value: '10 kW (5 seconds)' },
      { label: 'Round-trip Efficiency', value: '95%' },
      { label: 'Warranty', value: '10 years' }
    ],
    benefits: [
      'Uninterrupted power supply during outages',
      'Maximize self-consumption of solar',
      'Reduce grid dependency',
      'Peak shaving for commercial users',
      'Expandable battery capacity',
      'Future-ready for time-of-use tariffs'
    ],
    applications: [
      'Residential backup power',
      'Small business UPS replacement',
      'Rural electrification',
      'Medical equipment backup',
      'Home automation systems',
      'EV charging with solar'
    ],
    warranty: '5 years inverter warranty, 10 years battery warranty (6000 cycles)',
    certification: ['BIS', 'IEC 62619', 'UN38.3', 'ISO 9001'],
    madeInIndia: true,
    whyChoose: 'Suncity Solar hybrid systems are designed for Indian homes and businesses. With intelligent energy management and reliable battery technology, our hybrid solutions provide true energy independence with minimal maintenance.'
  },
  {
    slug: 'solar-mounting-structure-residential',
    name: 'Solar Mounting Structure (Residential)',
    category: 'Mounting Systems',
    shortDescription: 'Corrosion-resistant aluminum mounting system designed for Indian rooftops.',
    image: PlaceHolderImages.find((p) => p.id === 'product-mounting'),
    price: '₹4,500/kW',
    overview: 'Suncity Solar\'s residential mounting structures are engineered for durability and ease of installation on diverse Indian roof types. Our aluminum and galvanized steel structures withstand extreme weather conditions while providing optimal panel tilt for maximum energy generation.',
    features: [
      'Hot-dip galvanized steel or anodized aluminum',
      'Pre-assembled components for fast installation',
      'Adjustable tilt angle (5° to 30°)',
      'Compatible with all major panel brands',
      'Ballasted option for flat roofs',
      'Wind load rated up to 150 km/h',
      'Corrosion resistant for coastal areas',
      'Cable management channels'
    ],
    specifications: [
      { label: 'Material Options', value: 'HDG Steel / Aluminum' },
      { label: 'Coating', value: 'Hot-dip galvanized / Anodized' },
      { label: 'Tilt Angle Range', value: '5° - 30°' },
      { label: 'Wind Load', value: 'Up to 150 km/h' },
      { label: 'Snow Load', value: 'Up to 1.5 kN/m²' },
      { label: 'Design Life', value: '25+ years' },
      { label: 'Roof Compatibility', value: 'RCC, Metal, Tile' },
      { label: 'Ground Clearance', value: '150mm standard' }
    ],
    benefits: [
      'Quick and secure installation',
      'No roof penetration options available',
      'Minimal maintenance required',
      'Optimized for local wind conditions',
      'Aesthetic integration with building',
      'Long-term structural warranty'
    ],
    applications: [
      'RCC flat rooftops',
      'Sloped tile roofs',
      'Metal sheet roofs',
      'Ground-mounted arrays',
      'Carport structures',
      'Elevated installations'
    ],
    warranty: '10 years structural warranty',
    certification: ['IS 875', 'ISO 1461 (HDG)', 'ISO 9001'],
    madeInIndia: true,
    whyChoose: 'Suncity Solar structures are designed specifically for Indian conditions – from coastal humidity to desert heat. Our engineering team ensures every installation is structurally sound and optimized for your location.'
  },
  {
    slug: 'solar-water-pump-5hp',
    name: 'Solar Water Pump 5HP',
    category: 'Agricultural Solutions',
    shortDescription: 'Efficient solar pumping system for agriculture with KUSUM subsidy benefits.',
    image: PlaceHolderImages.find((p) => p.id === 'product-solar-panels'),
    price: '₹2,80,000 (before subsidy)',
    overview: 'The Suncity Solar 5HP Water Pump system is designed for Indian farmers, providing reliable irrigation without electricity bills or diesel costs. Eligible for up to 90% subsidy under PM-KUSUM, this system offers exceptional value for agricultural applications.',
    features: [
      'AC submersible pump technology',
      'Variable frequency drive (VFD) for efficiency',
      'Dry run protection',
      'Automatic sunrise/sunset operation',
      'Mobile app monitoring',
      'Compatible with existing borewells',
      'KUSUM scheme approved',
      'Direct solar operation (no batteries)'
    ],
    specifications: [
      { label: 'Motor Rating', value: '5 HP (3.7 kW)' },
      { label: 'Solar Array', value: '5.5 kW' },
      { label: 'Pump Type', value: 'AC Submersible' },
      { label: 'Head Range', value: 'Up to 100 meters' },
      { label: 'Flow Rate', value: 'Up to 150 LPM' },
      { label: 'Borewell Diameter', value: '4" or 6"' },
      { label: 'Controller', value: 'MPPT VFD' },
      { label: 'Operating Hours', value: '6-8 hours/day' }
    ],
    benefits: [
      'Zero electricity/diesel costs',
      'Up to 90% subsidy under KUSUM',
      'Reliable irrigation year-round',
      'Low maintenance requirements',
      'Mobile monitoring of pump status',
      '5-year comprehensive warranty'
    ],
    applications: [
      'Agricultural irrigation',
      'Drip irrigation systems',
      'Sprinkler systems',
      'Livestock water supply',
      'Fish pond aeration',
      'Community water supply'
    ],
    warranty: '5 years comprehensive warranty on pump, motor, and controller',
    certification: ['BIS', 'MNRE Approved', 'KUSUM Compliant'],
    madeInIndia: true,
    whyChoose: 'Suncity Solar is an empaneled vendor under PM-KUSUM with extensive experience in agricultural solar solutions. We handle the complete process from application to installation, ensuring farmers receive maximum subsidy benefits.'
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((product) => product.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return productsData.map((product) => product.slug);
}

