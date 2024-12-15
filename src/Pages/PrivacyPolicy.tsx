
const PrivacyPolicy: React.FC = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      
      <div className="bg-black shadow-md rounded-lg p-6">
        <p className="text-sm text-gray-600 text-center mb-6">
          <strong>Effective Date:</strong> {currentDate}
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction and Consent</h2>
          <p className="mb-4">
            Dream Makers Renovation and Construction ("we," "our," or "us") is committed to protecting your personal information 
            in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and 
            applicable provincial privacy legislation.
          </p>
          <p className="mb-4">
            By using our website, services, or providing personal information to us, you consent to the collection, 
            use, and disclosure of your personal information as described in this Privacy Policy.
          </p>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Types of Information Collected</h2>
          
          <h3 className="text-xl font-medium mb-2">1.1 Personal Information</h3>
          <p className="mb-4">We may collect the following personal information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Contact information (name, email, phone number, mailing address)</li>
            <li>Project-related details and specifications</li>
            <li>Communication records and correspondence</li>
            <li>Payment and billing information</li>
            <li>Professional credentials or references</li>
            <li>Location and geographic information</li>
            <li>Information voluntarily provided during consultations or quote requests</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">1.2 Non-Personal Information</h3>
          <ul className="list-disc pl-6">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Website usage patterns</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. Purposes of Information Collection</h2>
          <ul className="list-disc pl-6">
            <li>Provide and manage construction services</li>
            <li>Respond to inquiries and service requests</li>
            <li>Process quotes and project proposals</li>
            <li>Communication regarding ongoing projects</li>
            <li>Billing and financial transactions</li>
            <li>Improve website and service functionality</li>
            <li>Marketing and promotional communications (with explicit consent)</li>
            <li>Compliance with legal and regulatory requirements</li>
            <li>Maintain business records</li>
          </ul>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">3. Information Protection and Security</h2>
          <p className="mb-4">We implement comprehensive security measures to protect personal information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encrypted data storage</li>
            <li>Secure server infrastructure</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Regular security audits and vulnerability assessments</li>
            <li>Employee privacy and confidentiality training</li>
            <li>Secure disposal of physical and digital records</li>
          </ul>
          <p className="italic">
            While we strive to protect your information, no method of transmission over the internet is 100% secure.
          </p>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">4. Information Sharing and Disclosure</h2>
          <p className="mb-4">We may share personal information in the following circumstances:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>With your explicit consent</li>
            <li>Service providers and contractors (under confidentiality agreements)</li>
            <li>Legal compliance and regulatory requirements</li>
            <li>Protection of our legal rights</li>
            <li>Business transaction or potential sale of the company</li>
          </ul>
          <p>We do not sell personal information to third parties.</p>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="mb-4">We use cookies and similar technologies to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Improve website functionality</li>
            <li>Analyze website traffic</li>
            <li>Personalize user experience</li>
            <li>Gather demographic information</li>
          </ul>
          <p>
            You can modify browser settings to refuse cookies, but this may impact website functionality.
          </p>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">6. Your Privacy Rights</h2>
          <p className="mb-4">Under Canadian privacy laws, you have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information</li>
            <li>Request corrections to inaccurate information</li>
            <li>Withdraw consent for information collection</li>
            <li>Request deletion of personal information</li>
            <li>File a complaint with our Privacy Officer</li>
            <li>Lodge a complaint with the Office of the Privacy Commissioner of Canada</li>
          </ul>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">7. Retention of Personal Information</h2>
          <p>
            We retain personal information only as long as necessary to fulfill the purposes for which 
            it was collected, or as required by legal and regulatory requirements.
          </p>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">8. Changes to Privacy Policy</h2>
          <p>
            We may update this Privacy Policy periodically. Material changes will be communicated 
            through our website or direct communication.
          </p>
        </section>

        <hr className="border-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
          <div className="bg-gray-600 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Privacy Officer</h3>
            <p>Dream Makers Renovation and Construction</p>
            <p>Email: privacy@dreammakersconstruction.ca</p>
            <p>Phone: (437) 448-4877</p>
            <p>Address: Toronto, CA</p>
          </div>
          <p className="mt-4">
            For complaints or concerns about privacy practices, you may also contact the 
            Office of the Privacy Commissioner of Canada at 1-800-282-1367.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;