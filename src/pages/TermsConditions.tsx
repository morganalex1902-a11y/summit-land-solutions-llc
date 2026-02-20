import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Terms & Conditions | Summit Land Solutions LLC</title>
        <meta name="description" content="Terms and conditions for Summit Land Solutions LLC land clearing and excavation services in Calhoun, GA." />
      </Helmet>

      <TopBar />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-muted-foreground text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <article className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Summit Land Solutions LLC website and services, you accept and agree to be bound by and comply with these terms and conditions. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on Summit Land Solutions LLC's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose, or for any public display (commercial or non-commercial)</li>
                <li>Attempting to decompile or reverse engineer any software contained on Summit Land Solutions LLC's website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials on Summit Land Solutions LLC's website are provided on an 'as is' basis. Summit Land Solutions LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed">
                In no event shall Summit Land Solutions LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Summit Land Solutions LLC's website, even if Summit Land Solutions LLC or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Accuracy of Materials</h2>
              <p className="text-muted-foreground leading-relaxed">
                The materials appearing on Summit Land Solutions LLC's website could include technical, typographical, or photographic errors. Summit Land Solutions LLC does not warrant that any of the materials on its website are accurate, complete, or current. Summit Land Solutions LLC may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Materials and Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                Summit Land Solutions LLC has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Summit Land Solutions LLC of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed">
                Summit Land Solutions LLC may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of the State of Georgia, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Service Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Summit Land Solutions LLC provides land clearing, excavation, and related services. When you request a quote or booking:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>All quotes are estimates and subject to site inspection and confirmation</li>
                <li>Project timelines may vary based on weather conditions and site-specific factors</li>
                <li>We maintain comprehensive insurance coverage for all work performed</li>
                <li>Payment terms will be discussed and agreed upon before work begins</li>
                <li>We adhere to all local, state, and federal regulations and obtain necessary permits</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Summit Land Solutions LLC</p>
                <p>Phone: 678-986-6653</p>
                <p>Calhoun, Georgia</p>
              </div>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsConditions;
