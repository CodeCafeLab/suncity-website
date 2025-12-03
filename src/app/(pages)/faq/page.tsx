import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowRight, HelpCircle, MessageCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Find answers to common questions about solar energy, Suncity Solar products, installation, and warranties.',
};

const faqs = [
  {
    question: 'What is the best solar system for homes?',
    answer:
      'For most homes in areas with a reliable grid, a hybrid or on-grid system is recommended. An on-grid system offers the fastest return on investment through net metering. A hybrid system provides the added benefit of battery backup, ensuring you have power even during a grid outage.',
  },
  {
    question: 'What is the lifespan of solar panels?',
    answer:
      'Our high-quality Mono-PERC solar panels are built to last. They come with a performance warranty of 35 years and are expected to have a functional lifespan of 35 to 45 years, providing you with long-term energy security.',
  },
  {
    question: 'Do you provide installation services across India?',
    answer:
      'Yes, Suncity Solar has a nationwide network of certified installers and service partners. We provide professional installation and support services across the country.',
  },
  {
    question: 'How much area is required for a 1KW solar system?',
    answer:
      'On average, a 1KW solar system requires about 80 sq. ft. of shadow-free area on your rooftop. The exact area may vary slightly depending on the type of roof and panel wattage.',
  },
  {
    question: 'What is RMS monitoring?',
    answer:
      "RMS stands for Remote Monitoring System. It's a feature available with our smart inverters that allows you and our support team to track your solar system's performance in real-time through a mobile app or web portal. It helps in proactively identifying and resolving any issues.",
  },
  {
    question: 'What are the warranties on your products?',
    answer:
      'We offer industry-leading warranties for your peace of mind: Solar Panels - 35 years performance warranty. Solar Inverter - 3 years standard warranty. Solar Battery - 5 years warranty.',
  },
  {
    question: 'How does net metering work?',
    answer:
      'Net metering allows you to export surplus solar electricity back to the grid and earn credits. During the day, your solar panels may generate more power than you use. This excess is sent to the grid, and your meter runs backwards. At night, you draw power from the grid, and the credits offset your consumption.',
  },
  {
    question: 'Are there government subsidies available for solar?',
    answer:
      'Yes, the Indian government offers subsidies for residential solar installations under the PM Surya Ghar scheme. Subsidy amounts vary by state and system capacity. Our team can guide you through the entire subsidy application process.',
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        breadcrumb="FAQ"
        description="Got questions? We've got answers. Everything you need to know about going solar with Suncity."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <div className="section-subtitle justify-center">Common Questions</div>
            <h2 className="section-title">
              Find Your <span className="text-gradient-solar">Answers</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-premium px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-lg text-navy-600 hover:text-solar-500 hover:no-underline py-6">
                  <span className="flex items-start gap-3">
                    <HelpCircle className="w-5 h-5 text-solar-500 mt-0.5 flex-shrink-0" />
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6 pl-8 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-navy-600 to-navy-500 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-suncity-green/20 rounded-full blur-3xl" />

            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-solar-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
              <p className="text-gray-300 max-w-xl mx-auto mb-8">
                Our solar experts are here to help. Contact us for a free consultation and get all
                your questions answered.
              </p>
              <Link href="/contact" className="btn-solar">
                Contact Our Experts
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
