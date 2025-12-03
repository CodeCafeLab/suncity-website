'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CONTACT_DETAILS } from '@/lib/constants';
import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from 'lucide-react';
import PageHeader from '@/components/shared/PageHeader';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const mapImage = PlaceHolderImages.find((p) => p.id === 'contact-map');

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  phone: z.string().min(10, { message: 'Phone number must be at least 10 digits.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactPage() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: 'Message Sent!',
      description: 'Thank you for contacting us. We will get back to you shortly.',
    });
    form.reset();
  }

  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumb="Contact"
        description="We're here to help you on your solar journey. Reach out to us with your questions."
      />

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-solar flex items-center justify-center flex-shrink-0 shadow-orange">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-600 mb-2">Head Office</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{CONTACT_DETAILS.address}</p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-solar flex items-center justify-center flex-shrink-0 shadow-orange">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-600 mb-2">Phone</h3>
                    <a href={`tel:${CONTACT_DETAILS.phone}`} className="text-solar-500 hover:text-solar-600 font-medium">
                      {CONTACT_DETAILS.phone}
                    </a>
                    <p className="text-gray-500 text-sm mt-1">24/7 Customer Support</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-suncity-green flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-600 mb-2">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${CONTACT_DETAILS.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-suncity-green hover:text-suncity-green-dark font-medium"
                    >
                      Chat with us
                    </a>
                    <p className="text-gray-500 text-sm mt-1">Quick responses guaranteed</p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="card-premium p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-navy-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-600 mb-2">Business Hours</h3>
                    <p className="text-gray-600 text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Email Links */}
              <div className="card-premium p-6">
                <h3 className="font-bold text-navy-600 mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-solar-500" />
                  Email Us
                </h3>
                <div className="space-y-3">
                  {CONTACT_DETAILS.emails.slice(0, 3).map((email) => (
                    <div key={email.label}>
                      <p className="text-xs text-gray-500">{email.label}</p>
                      <a href={`mailto:${email.address}`} className="text-sm text-solar-500 hover:text-solar-600">
                        {email.address}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-premium p-8 md:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-navy-600 mb-2">Send us a Message</h2>
                  <p className="text-gray-600">Fill out the form below, and our team will get back to you within 24 hours.</p>
                </div>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy-600 font-medium">Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your Name"
                                className="h-12 rounded-xl border-gray-200 focus:border-solar-400 focus:ring-solar-400"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy-600 font-medium">Email Address</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your.email@example.com"
                                className="h-12 rounded-xl border-gray-200 focus:border-solar-400 focus:ring-solar-400"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy-600 font-medium">Phone Number</FormLabel>
                            <FormControl>
                              <Input
                                type="tel"
                                placeholder="Your Phone Number"
                                className="h-12 rounded-xl border-gray-200 focus:border-solar-400 focus:ring-solar-400"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-navy-600 font-medium">Subject</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Reason for contacting"
                                className="h-12 rounded-xl border-gray-200 focus:border-solar-400 focus:ring-solar-400"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-navy-600 font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how we can help you..."
                              className="min-h-[150px] rounded-xl border-gray-200 focus:border-solar-400 focus:ring-solar-400 resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="w-full h-14 bg-gradient-solar hover:bg-gradient-solar-hover text-white font-semibold rounded-xl shadow-orange hover:shadow-lg transition-all"
                      disabled={form.formState.isSubmitting}
                    >
                      {form.formState.isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          Send Message
                          <Send className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0">
        <div className="container mx-auto px-4 pb-24">
          <div className="text-center mb-10">
            <div className="section-subtitle justify-center">Find Us</div>
            <h2 className="section-title">
              Our <span className="text-gradient-solar">Location</span>
            </h2>
          </div>
          {mapImage && (
            <div className="aspect-[16/5] w-full rounded-2xl overflow-hidden relative shadow-card">
              <Image src={mapImage.imageUrl} alt={mapImage.description} data-ai-hint={mapImage.imageHint} fill className="object-cover" />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
