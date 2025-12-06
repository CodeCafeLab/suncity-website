import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, MapPin, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Projects',
  description:
    "View Suncity Solar's portfolio of successful solar installations for homes, industries, agriculture, and communities across India.",
};

const projects = {
  home: [
    { title: 'Modern Villa', location: 'Jaipur, Rajasthan', capacity: '5KW', image: PlaceHolderImages.find((p) => p.id === 'project-home-1') },
    { title: 'Apartment Complex', location: 'Pune, Maharashtra', capacity: '25KW', image: PlaceHolderImages.find((p) => p.id === 'project-home-2') },
  ],
  industrial: [
    { title: 'Textile Factory', location: 'Surat, Gujarat', capacity: '100KW', image: PlaceHolderImages.find((p) => p.id === 'project-industrial-1') },
    { title: 'Warehouse', location: 'Gurgaon, Haryana', capacity: '50KW', image: PlaceHolderImages.find((p) => p.id === 'project-industrial-2') },
  ],
  agricultural: [
    { title: 'Farm Irrigation', location: 'Punjab', capacity: '7.5HP', image: PlaceHolderImages.find((p) => p.id === 'project-agri-1') },
    { title: 'Community Farm', location: 'Haryana', capacity: '10HP', image: PlaceHolderImages.find((p) => p.id === 'project-agri-2') },
  ],
  street: [
    { title: 'Village Electrification', location: 'Odisha', capacity: '50 Lights', image: PlaceHolderImages.find((p) => p.id === 'project-street-1') },
  ],
  hybrid: [
    { title: 'Resort Power Backup', location: 'Goa', capacity: '11KW', image: PlaceHolderImages.find((p) => p.id === 'project-hybrid-1') },
  ],
};

const tabs = [
  { value: 'all', label: 'All' },
  { value: 'home', label: 'Rooftop' },
  { value: 'industrial', label: 'Industrial' },
  { value: 'agricultural', label: 'Pumps' },
  { value: 'street', label: 'Street Lights' },
  { value: 'hybrid', label: 'Hybrid' },
];

type Project = {
  title: string;
  location: string;
  capacity: string;
  image?: typeof PlaceHolderImages[0];
};

const ProjectCard = ({ project }: { project: Project }) => (
  <div className="card-premium overflow-hidden group">
    {project.image && (
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image.imageUrl}
          alt={project.title}
          data-ai-hint={project.image.imageHint}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-700/80 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="badge-solar mb-2">
            <Zap className="w-3 h-3" />
            {project.capacity}
          </div>
          <h3 className="font-bold text-lg text-white">{project.title}</h3>
          <p className="text-white/80 text-sm flex items-center gap-1">
            <MapPin className="w-3 h-3" />
            {project.location}
          </p>
        </div>
      </div>
    )}
  </div>
);

export default function ProjectsPage() {
  const allProjects = Object.values(projects).flat();

  return (
    <>
      <PageHeader
        title="Our Projects"
        breadcrumb="Projects"
        description="Witness the impact of solar energy through our diverse portfolio of successfully completed projects across India."
      />

      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-10">
            <div className="section-subtitle justify-center">Portfolio</div>
            <h2 className="section-title">
              Our <span className="text-gradient-solar">Success Stories</span>
            </h2>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8 md:mb-10">
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
            </div>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project, index) => project.image && <ProjectCard key={index} project={project} />)}
              </div>
            </TabsContent>

            <TabsContent value="home">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.home.map((project, index) => project.image && <ProjectCard key={index} project={project} />)}
              </div>
            </TabsContent>

            <TabsContent value="industrial">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.industrial.map((project, index) => project.image && <ProjectCard key={index} project={project} />)}
              </div>
            </TabsContent>

            <TabsContent value="agricultural">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.agricultural.map((project, index) => project.image && <ProjectCard key={index} project={project} />)}
              </div>
            </TabsContent>

            <TabsContent value="street">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.street.map((project, index) => project.image && <ProjectCard key={index} project={project} />)}
              </div>
            </TabsContent>

            <TabsContent value="hybrid">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.hybrid.map((project, index) => project.image && <ProjectCard key={index} project={project} />)}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Installations' },
              { number: '15MW+', label: 'Capacity Installed' },
              { number: '28', label: 'States Covered' },
              { number: '100%', label: 'Customer Satisfaction' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient-solar mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-navy-700 to-navy-600 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Want Your Project Featured Here?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                Join our growing list of satisfied customers. Get started with a free consultation today!
              </p>
              <Link href="/contact" className="btn-solar">
                Start Your Solar Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
