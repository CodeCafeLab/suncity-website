import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Zap, Shield, Award } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';

export const metadata: Metadata = {
  title: 'Our Products',
  description:
    "Explore Suncity Solar's wide range of high-quality, Make in India solar products, including panels, inverters, pumps, and complete systems.",
};

const products = [
  {
    category: 'Solar Panels',
    id: 'solar-panels',
    items: [
      {
        title: 'Mono & Mono-PERC Half-Cut Panels',
        range: '3W – 550W',
        description:
          'Our high-efficiency solar panels are the cornerstone of any solar power system, built to perform in Indian conditions with a 35-year performance warranty.',
        features: [
          'High-efficiency PERC cells',
          'Positive power tolerance',
          'Excellent low-light performance',
          'PID resistant technology',
        ],
        benefits: ['Maximum energy generation', 'Long-term reliability', 'Faster ROI', 'Durable and weather-resistant'],
        applications: ['Residential rooftops', 'Commercial buildings', 'Solar farms', 'Industrial facilities'],
        specs: ['Up to 21% efficiency', '35-Year Performance Warranty', 'Half-cut cell technology'],
      },
    ],
  },
  {
    category: 'Solar Inverters & Lithium PCUs',
    id: 'solar-inverters',
    items: [
      {
        title: 'On-Grid, Off-Grid & Hybrid Inverters',
        range: '1KW – 11KW',
        description:
          'The brain of your solar system. Our advanced inverters with MPPT technology and lithium compatibility ensure optimal energy conversion and management.',
        features: [
          'High-efficiency MPPT',
          'Pure sine wave output',
          'Lithium battery compatibility',
          'Built-in Wi-Fi for remote monitoring',
        ],
        benefits: [
          'Maximizes solar energy harvest',
          'Protects your appliances',
          'Future-ready for energy storage',
          'Easy performance tracking',
        ],
        applications: ['Homes', 'Offices', 'Shops', 'Small industries'],
        specs: ['98% Max Efficiency', 'Smart cooling system', 'IP65 protection', '3-Year Warranty'],
      },
    ],
  },
  {
    category: 'Solar Street Lights',
    id: 'solar-street-lights',
    items: [
      {
        title: 'All-in-One Solar Street Light',
        range: '12W LED',
        description:
          'Illuminate public spaces reliably and sustainably. Our integrated street lights feature high-quality components for long-lasting, automated operation.',
        features: [
          'High-lumen Osram LED chip',
          'Integrated LiFePO4 battery',
          'Smart dusk-to-dawn controller',
          'Durable aluminum alloy body',
        ],
        benefits: [
          'Zero electricity cost',
          'Automated and maintenance-free',
          'Easy installation',
          'Vandal and theft-proof design',
        ],
        applications: ['Roads & Highways', 'Housing societies', 'Parks & public areas', 'Campus lighting'],
        specs: ['160 lumens/watt', '3-day battery backup', 'IP66 waterproof rating'],
      },
    ],
  },
  {
    category: 'Solar Water Heaters',
    id: 'solar-water-heaters',
    items: [
      {
        title: 'ETC Solar Water Heater',
        range: '200 & 500 LPD',
        description:
          'Get hot water round-the-clock using the power of the sun. Our heaters are designed for efficiency and durability, perfect for Indian households.',
        features: [
          'Evacuated Tube Collector (ETC)',
          'Glass-lined inner tank for corrosion resistance',
          'High-density PUF insulation',
          'Durable powder-coated outer tank',
        ],
        benefits: [
          'Reduces electricity/gas bills',
          'Hot water even on cloudy days',
          'Long lifespan',
          'Eco-friendly solution',
        ],
        applications: ['Homes', 'Apartments', 'Hostels', 'Hospitals'],
        specs: ['Maintains heat for up to 72 hours', 'UV resistant coating'],
      },
    ],
  },
  {
    category: 'Solar Pumps',
    id: 'solar-pumps',
    items: [
      {
        title: 'AC/DC Solar Water Pumps',
        range: '3HP – 10HP',
        description:
          'A revolutionary solution for agriculture. Our solar pumps provide reliable water supply for irrigation, reducing dependency on grid power and diesel.',
        features: [
          'High-efficiency submersible/surface pumps',
          'Advanced VFD controller',
          'Can operate on solar and grid power',
          'Dry run protection',
        ],
        benefits: [
          'Zero running cost',
          'Increased crop yield',
          'Operational in remote areas',
          'Eligible for government subsidies',
        ],
        applications: ['Farm irrigation', 'Drinking water supply', 'Community water projects', 'Livestock watering'],
        specs: ["Up to 1,50,000 liters/day discharge", 'Durable stainless steel construction'],
      },
    ],
  },
  {
    category: 'Complete Solar Systems',
    id: 'complete-solar-systems',
    items: [
      {
        title: 'Off-Grid Systems',
        range: '1KW – 3KW+',
        description:
          'Achieve complete energy independence. Ideal for areas with frequent power cuts or no grid access, with lithium batteries and remote monitoring.',
        features: [
          'Solar panels, inverter, and battery storage',
          'Lithium battery option for longer life',
          'RMS for remote performance tracking',
          'Customizable to your needs',
        ],
        benefits: ['24/7 uninterrupted power', 'Freedom from electricity bills', 'Scalable and modular'],
        applications: ['Remote homes', 'Farms', 'Small clinics', 'Telecom towers'],
      },
      {
        title: 'Hybrid Systems',
        range: '3.3KW – 11KW',
        description:
          'The ultimate solar solution combining grid-tie benefits with battery backup, ensuring you have power during outages while also saving on bills.',
        features: [
          'On-grid inverter with battery storage',
          'Automatic switchover during power cuts',
          'Prioritizes solar usage',
          'Net metering applicable',
        ],
        benefits: ['Best of both on-grid and off-grid', 'Energy security and savings', 'Reduces grid dependency'],
        applications: ['Homes & offices', 'Hotels & resorts', 'Hospitals & clinics', 'Critical load applications'],
      },
      {
        title: 'On-Grid Systems',
        range: '3KW – 25KW',
        description:
          'The most popular choice for urban areas. Generate your own electricity and export surplus to the grid, earning credits through net metering.',
        features: [
          'High-efficiency panels and grid-tie inverter',
          'Net metering to reduce bills to zero',
          'No batteries, lower initial cost',
          'Minimal maintenance',
        ],
        benefits: ['Fastest ROI', 'Lower carbon footprint', 'Hassle-free operation'],
        applications: ['Urban homes', 'Commercial establishments', 'Schools & colleges', 'Factories'],
      },
    ],
  },
];

const otherProducts = ['Solar Fans', 'BLDC Fans', 'Solar Lamps', 'Multi Maxima All-in-One Lighting System'];

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        title="Our Solar Products"
        breadcrumb="Products"
        description="High-quality, reliable, and 'Make in India' solar solutions designed for a sustainable future."
      />

      {/* Products Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 space-y-20">
          {products.map((productCategory) => (
            <div key={productCategory.category} id={productCategory.id}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-gradient-solar flex items-center justify-center shadow-orange">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-navy-600">{productCategory.category}</h2>
              </div>

              {/* Products Grid */}
              <div className="space-y-8">
                {productCategory.items.map((item) => (
                  <div key={item.title} className="card-premium overflow-hidden">
                    <div className="p-8 md:p-10">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                        <div>
                          <h3 className="text-xl md:text-2xl font-bold text-navy-600 mb-2">{item.title}</h3>
                          <span className="badge-solar">{item.range}</span>
                        </div>
                      </div>

                      {/* Content Grid */}
                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Features */}
                        <div>
                          <h4 className="font-semibold text-navy-600 mb-4 flex items-center gap-2">
                            <Shield className="w-5 h-5 text-solar-500" />
                            Key Features
                          </h4>
                          <ul className="space-y-3">
                            {item.features.map((feature, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-suncity-green mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Description & Benefits */}
                        <div className="lg:col-span-2 space-y-6">
                          <p className="text-gray-600 leading-relaxed">{item.description}</p>

                          <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-gray-50 rounded-xl p-5">
                              <h4 className="font-semibold text-navy-600 mb-3">Benefits</h4>
                              <p className="text-gray-600 text-sm">{item.benefits.join(', ')}.</p>
                            </div>
                            <div className="bg-gray-50 rounded-xl p-5">
                              <h4 className="font-semibold text-navy-600 mb-3">Applications</h4>
                              <p className="text-gray-600 text-sm">{item.applications.join(', ')}.</p>
                            </div>
                          </div>

                          {'specs' in item && item.specs && (
                            <div className="flex flex-wrap gap-3">
                              {item.specs.map((spec: string, i: number) => (
                                <span key={i} className="badge-navy">
                                  <Award className="w-3 h-3" />
                                  {spec}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Other Products */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-solar flex items-center justify-center shadow-orange">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-600">Other Products</h2>
            </div>
            <div className="card-premium p-8">
              <p className="text-gray-600 mb-6">
                We also offer a variety of other solar and energy-efficient products to complement your lifestyle:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {otherProducts.map((prod) => (
                  <div key={prod} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-solar-50 transition-colors">
                    <CheckCircle className="w-5 h-5 text-suncity-green flex-shrink-0" />
                    <span className="font-medium text-navy-600">{prod}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-navy-600 to-navy-500 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need Help Choosing the Right Product?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Our solar experts are here to help you find the perfect solution for your needs. Get a free consultation
                today!
              </p>
              <Link href="/contact" className="btn-solar">
                Get Expert Advice
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
