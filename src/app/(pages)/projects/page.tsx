'use client';

import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { projectsData } from '@/lib/data/projects';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, MapPin, Zap } from 'lucide-react';
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
  AnimatedCard,
  SectionReveal,
  AnimatedCounter,
} from '@/components/animations';

const tabs = [
  { value: 'all', label: 'All' },
  { value: 'Commercial', label: 'Commercial' },
  { value: 'Healthcare', label: 'Healthcare' },
  { value: 'Corporate', label: 'Corporate' },
  { value: 'Industrial', label: 'Industrial' },
  { value: 'Education', label: 'Education' },
];

export default function ProjectsPage() {
  const filterProjects = (category: string) => {
    if (category === 'all') return projectsData;
    return projectsData.filter((p) => p.category === category);
  };

  return (
    <>
      <PageHeader
        title="Our Projects"
        breadcrumb="Projects"
        description="Witness the impact of solar energy through our diverse portfolio of successfully completed projects across India."
      />

      <SectionReveal className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4 justify-center">
                <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                Portfolio
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                Our <span className="text-gradient-solar">Success Stories</span>
              </h2>
            </FadeUp>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <FadeUp delay={0.2} className="flex justify-center mb-12">
              <TabsList className="bg-gray-100 p-1.5 rounded-full h-auto flex-wrap gap-1">
                {tabs.map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="rounded-full px-6 py-2.5 data-[state=active]:bg-gradient-solar data-[state=active]:text-white data-[state=active]:shadow-orange transition-all"
                  >
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </FadeUp>

            {tabs.map((tab) => (
              <TabsContent key={tab.value} value={tab.value}>
                <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerDelay={0.1}>
                  {filterProjects(tab.value).map((project) => project.image && (
                    <StaggerItem key={project.slug}>
                      <Link href={`/projects/${project.slug}`}>
                        <AnimatedCard className="card-premium overflow-hidden group cursor-pointer h-full">
                          <div className="relative h-64 overflow-hidden">
                            <Image
                              src={project.image.imageUrl}
                              alt={project.title}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-700/80 via-transparent to-transparent" />
                            <div className="absolute top-4 left-4 flex gap-2">
                              <span className="px-3 py-1 bg-solar-500 text-white text-xs font-semibold rounded-full">
                                {project.category}
                              </span>
                            </div>
                            <div className="absolute bottom-4 left-4 right-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Zap className="w-4 h-4 text-solar-400" />
                                <span className="text-white font-semibold">{project.capacity}</span>
                              </div>
                              <h3 className="font-bold text-lg text-white">{project.title}</h3>
                              <p className="text-white/80 text-sm flex items-center gap-1 mt-1">
                                <MapPin className="w-3 h-3" />
                                {project.location}
                              </p>
                            </div>
                          </div>
                          <div className="p-6 bg-white">
                            <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.shortDescription}</p>
                            <span className="inline-flex items-center gap-1 text-solar-500 font-semibold text-sm group-hover:gap-2 transition-all">
                              View Details
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </AnimatedCard>
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </SectionReveal>

      {/* Stats */}
      <SectionReveal className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
            {[
              { number: 10000, suffix: '+', label: 'Installations' },
              { number: 15, suffix: 'MW+', label: 'Capacity Installed' },
              { number: 28, suffix: '', label: 'States Covered' },
              { number: 100, suffix: '%', label: 'Customer Satisfaction' },
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient-solar mb-2">
                    <AnimatedCounter to={stat.number} suffix={stat.suffix} />
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-navy-700 to-navy-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Want Your Project Featured Here?
                </h2>
              </FadeUp>
              <FadeUp delay={0.1}>
                <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                  Join our growing list of satisfied customers. Get started with a free consultation today!
                </p>
              </FadeUp>
              <FadeUp delay={0.2}>
                <Link href="/contact" className="btn-solar">
                  Start Your Solar Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
