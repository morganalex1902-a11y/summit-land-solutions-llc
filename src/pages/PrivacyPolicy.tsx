import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Privacy Policy | Summit Land Solutions LLC</title>
        <meta name="description" content="Privacy policy for Summit Land Solutions LLC. Learn how we collect, use, and protect your personal information." />
      </Helmet>

      <TopBar />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground text-lg">Last updated: {new Date().toLocaleDateString()}</p>
          </div>

          <article className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Summit Land Solutions LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may collect on our website includes:
              </p>
              
              <h3 className="text-xl font-semibold mb-3 mt-6">Personal Data</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the website or when you choose to participate in various activities related to the website.
              </p>

              <h3 className="text-xl font-semibold mb-3 mt-6">Form Data</h3>
              <p className="text-muted-foreground leading-relaxed">
                When you submit a quote request, contact form, or service inquiry, we collect information including your name, email, phone number, project location, and project description to better serve your needs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Use of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the website to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Generate an account for you</li>
                <li>Process your quote requests and service inquiries</li>
                <li>Email you regarding your order or other request</li>
                <li>Fulfill and manage your orders, payments, and related transactions</li>
                <li>Contact you regarding your account activity and provide customer support</li>
                <li>Send you marketing and promotional communications (with your consent)</li>
                <li>Monitor and analyze usage and trends to improve your experience with the website</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Disclosure of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to comply with the law</li>
                <li><strong>Service Providers:</strong> We may share your information with third parties that perform services for us, including payment processing, data analysis, email delivery, hosting services, and customer service</li>
                <li><strong>Business Transfers:</strong> If Summit Land Solutions LLC is involved in a merger, acquisition, or sale of assets, your information may be transferred</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Security of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use administrative, technical, and physical security measures to help protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 text-muted-foreground">
                <p>Summit Land Solutions LLC</p>
                <p>Phone: 678-986-6653</p>
                <p>Calhoun, Georgia</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on our website and update the "Last updated" date above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>The right to access your personal information</li>
                <li>The right to request correction of inaccurate data</li>
                <li>The right to request deletion of your information</li>
                <li>The right to opt-out of promotional communications</li>
              </ul>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
