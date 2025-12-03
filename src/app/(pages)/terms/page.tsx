import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/shared/PageHeader';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms and conditions for using the Suncity Solar website and services.',
};

export default function TermsPage() {
  return (
    <>
      <PageHeader title="Terms & Conditions" breadcrumb="Terms & Conditions" />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <article className="max-w-4xl mx-auto">
            <div className="card-premium p-8 md:p-12">
              <p className="text-gray-500 text-sm mb-8">
                Last updated:{' '}
                {new Date().toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>

              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-bold text-navy-600 mb-4">1. Introduction</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Welcome to Suncity Solar ("Company", "we", "our", "us"). These Terms and
                    Conditions ("Terms") govern your use of our website located at suncitysolar.in
                    (the "Service") and any related services provided by Suncity Solar. By
                    accessing or using our Service, you agree to be bound by these Terms. If you
                    disagree with any part of the terms, then you may not access the Service.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-600 mb-4">2. Use of Service</h2>
                  <p className="text-gray-600 leading-relaxed">
                    You agree to use the Service in compliance with all applicable local, state,
                    national, and international laws, rules, and regulations. You shall not
                    authorize or encourage any third party to use the Service to upload, transmit
                    or otherwise distribute any content that is unlawful, defamatory, harassing,
                    abusive, fraudulent, obscene, contains viruses, or is otherwise objectionable.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-600 mb-4">3. Products and Services</h2>
                  <p className="text-gray-600 leading-relaxed">
                    All information displayed on the Service is subject to change without notice.
                    We reserve the right to modify, suspend, or discontinue any product or service
                    without prior notice. Prices for our products are subject to change without
                    notice.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-600 mb-4">4. Quotations and Orders</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Any quotation provided by us is not an offer and is subject to change. An order
                    is not binding on us until we have provided written confirmation. The scope of
                    work, system specifications, and final pricing will be as detailed in the final
                    agreement signed between you and Suncity Solar.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-600 mb-4">5. Intellectual Property</h2>
                  <p className="text-gray-600 leading-relaxed">
                    The Service and its original content, features, and functionality are and will
                    remain the exclusive property of Suncity Solar and its licensors. The Service
                    is protected by copyright, trademark, and other laws of both India and foreign
                    countries.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-600 mb-4">6. Limitation of Liability</h2>
                  <p className="text-gray-600 leading-relaxed">
                    In no event shall Suncity Solar, nor its directors, employees, partners, agents,
                    suppliers, or affiliates, be liable for any indirect, incidental, special,
                    consequential, or punitive damages, including without limitation, loss of
                    profits, data, use, goodwill, or other intangible losses.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-600 mb-4">7. Governing Law</h2>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms shall be governed and construed in accordance with the laws of
                    India. All disputes arising out of or in connection with these Terms shall be
                    subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-600 mb-4">8. Changes to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We reserve the right, at our sole discretion, to modify or replace these Terms
                    at any time. By continuing to access or use our Service after those revisions
                    become effective, you agree to be bound by the revised terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-navy-600 mb-4">9. Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed">
                    If you have any questions about these Terms, please{' '}
                    <Link href="/contact" className="text-solar-500 hover:text-solar-600 font-medium">
                      contact us
                    </Link>
                    .
                  </p>
                </section>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
