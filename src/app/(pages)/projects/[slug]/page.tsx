'use client';

import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Building2, 
  Zap, 
  CheckCircle, 
  Quote,
  ArrowLeft,
  Download,
  Share2
} from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import { getProjectBySlug, projectsData } from '@/lib/data/projects';
import { Button } from '@/components/ui/button';
import {
  FadeUp,
  FadeUpSmall,
  SlideInLeft,
  SlideInRight,
  StaggerContainer,
  StaggerItem,
  AnimatedCard,
  AnimatedImage,
  SectionReveal,
} from '@/components/animations';

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData
    .filter((p) => p.slug !== slug && p.category === project.category)
    .slice(0, 3);

  return (
    <>
      <PageHeader
        title={project.title}
        breadcrumb={`Projects / ${project.title}`}
        description={project.shortDescription}
      />

      {/* Project Overview Section */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <FadeUp>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-solar-500 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Image */}
            <SlideInLeft>
              {project.image && (
                <AnimatedImage>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.image.imageUrl}
                      alt={project.title}
                      width={700}
                      height={500}
                      className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1.5 bg-solar-500 text-white text-sm font-semibold rounded-full">
                        {project.category}
                      </span>
                      <span className="px-3 py-1.5 bg-white text-navy-600 text-sm font-semibold rounded-full">
                        {project.capacity}
                      </span>
                    </div>
                  </div>
                </AnimatedImage>
              )}
            </SlideInLeft>

            {/* Details */}
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                  <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                  {project.type}
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-6">
                  Project Overview
                </h2>
              </FadeUp>

              <FadeUpSmall delay={0.2}>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {project.overview}
                </p>
              </FadeUpSmall>

              {/* Quick Info Cards */}
              <StaggerContainer className="grid grid-cols-2 gap-4 mb-8" staggerDelay={0.1}>
                <StaggerItem>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-solar-500" />
                      <div>
                        <p className="text-xs text-gray-500">Location</p>
                        <p className="font-semibold text-navy-600">{project.location}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-solar-500" />
                      <div>
                        <p className="text-xs text-gray-500">Capacity</p>
                        <p className="font-semibold text-navy-600">{project.capacity}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-solar-500" />
                      <div>
                        <p className="text-xs text-gray-500">Client</p>
                        <p className="font-semibold text-navy-600">{project.client}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
                <StaggerItem>
                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-solar-500" />
                      <div>
                        <p className="text-xs text-gray-500">Completed</p>
                        <p className="font-semibold text-navy-600">{project.completionDate}</p>
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Challenge & Solution Section */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Challenge */}
            <SlideInLeft>
              <AnimatedCard className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="w-14 h-14 bg-navy-600 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-600 mb-4">The Challenge</h3>
                <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
              </AnimatedCard>
            </SlideInLeft>

            {/* Solution */}
            <SlideInRight>
              <AnimatedCard className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="w-14 h-14 bg-gradient-solar rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl text-white">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-600 mb-4">Our Solution</h3>
                <p className="text-gray-600 leading-relaxed">{project.solution}</p>
              </AnimatedCard>
            </SlideInRight>
          </div>
        </div>
      </SectionReveal>

      {/* Results Section */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                Project Results
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                Measurable Impact & <span className="text-gradient-solar">Achievements</span>
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto" staggerDelay={0.1}>
            {project.results.map((result, index) => (
              <StaggerItem key={index}>
                <AnimatedCard className="bg-gray-50 rounded-xl p-6 flex items-start gap-4 h-full">
                  <div className="w-8 h-8 bg-suncity-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-suncity-green" />
                  </div>
                  <p className="text-gray-700 font-medium">{result}</p>
                </AnimatedCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Technical Specifications */}
      <SectionReveal className="py-20 bg-navy-600">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <FadeUp>
              <div className="inline-flex items-center gap-2 text-solar-400 font-semibold text-sm uppercase tracking-wider mb-4">
                <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                Technical Details
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                System <span className="text-gradient-solar">Specifications</span>
              </h2>
            </FadeUp>
          </div>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto" staggerDelay={0.05}>
            {project.specifications.map((spec, index) => (
              <StaggerItem key={index}>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                  <p className="text-white/60 text-sm mb-1">{spec.label}</p>
                  <p className="text-white font-bold text-lg">{spec.value}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </SectionReveal>

      {/* Benefits Section */}
      <SectionReveal className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp>
                <div className="inline-flex items-center gap-2 text-solar-500 font-semibold text-sm uppercase tracking-wider mb-4">
                  <span className="w-8 h-0.5 bg-solar-500 rounded-full" />
                  Client Benefits
                </div>
              </FadeUp>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-600 mb-6">
                  Why This Solution <span className="text-gradient-solar">Works</span>
                </h2>
              </FadeUp>
              <StaggerContainer className="space-y-4" staggerDelay={0.1}>
                {project.benefits.map((benefit, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-suncity-green/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <CheckCircle className="w-4 h-4 text-suncity-green" />
                      </div>
                      <p className="text-gray-600">{benefit}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Testimonial */}
            {project.testimonial && (
              <SlideInRight>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <Quote className="w-12 h-12 text-solar-400 mb-6" />
                  <p className="text-xl text-navy-600 font-medium italic mb-6 leading-relaxed">
                    "{project.testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-navy-600">{project.testimonial.author}</p>
                    <p className="text-gray-500">{project.testimonial.position}</p>
                  </div>
                </div>
              </SlideInRight>
            )}
          </div>
        </div>
      </SectionReveal>

      {/* CTA Section */}
      <SectionReveal className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-navy-600 to-navy-500 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-solar-500/20 rounded-full blur-3xl" />
            <div className="relative">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready for a Similar <span className="text-gradient-solar">Solution?</span>
                </h2>
              </FadeUp>
              <FadeUpSmall delay={0.1}>
                <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                  Let Suncity Solar design a custom solar solution for your business. Get a free consultation and detailed project proposal.
                </p>
              </FadeUpSmall>
              <FadeUp delay={0.2}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-solar text-white font-semibold px-8 py-4 rounded-full shadow-orange hover:shadow-orange-lg hover:scale-105 transition-all"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </FadeUp>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <SectionReveal className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <FadeUp>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-600">
                  Related <span className="text-gradient-solar">Projects</span>
                </h2>
              </FadeUp>
            </div>

            <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.1}>
              {relatedProjects.map((relProject, index) => (
                <StaggerItem key={relProject.slug}>
                  <AnimatedCard className="group bg-gray-50 rounded-2xl overflow-hidden h-full">
                    {relProject.image && (
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={relProject.image.imageUrl}
                          alt={relProject.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-600/80 to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-2 py-1 bg-solar-500 text-white text-xs font-semibold rounded">
                            {relProject.capacity}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-navy-600 mb-2">{relProject.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relProject.shortDescription}</p>
                      <Link
                        href={`/projects/${relProject.slug}`}
                        className="inline-flex items-center gap-1 text-solar-500 font-semibold text-sm hover:gap-2 transition-all"
                      >
                        View Project
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </AnimatedCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionReveal>
      )}
    </>
  );
}

