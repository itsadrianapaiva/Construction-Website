
const TermsOfService: React.FC = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Terms of Service</h1>
      
      <div className="bg-black shadow-md rounded-lg p-6">
        <p className="text-sm text-gray-600 text-center mb-6">
          <strong>Effective Date:</strong> {currentDate}
        </p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p className="mb-4">
            Welcome to Dream Makers Renovation and Construction ("Company", "we", "our", "us"). By accessing or using our website, 
            services, or requesting a quote, you agree to be bound by these Terms of Service ("Terms").
          </p>
          <p className="mb-4">
            These Terms constitute a legal agreement between you and Dream Makers Construction. 
            Please read them carefully before using our services.
          </p>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">1. Services Offered</h2>
          <ul className="list-disc pl-6">
            <li>Construction consultation</li>
            <li>Project planning and design</li>
            <li>Construction and renovation services</li>
            <li>Project quote and estimation</li>
            <li>Site assessment and evaluation</li>
          </ul>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">2. User Obligations</h2>
          <h3 className="text-xl font-medium mb-2">2.1 Account Registration</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide accurate and complete information</li>
            <li>Maintain confidentiality of account credentials</li>
            <li>Notify us immediately of any unauthorized use</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">2.2 Prohibited Conduct</h3>
          <ul className="list-disc pl-6">
            <li>Misuse of website or services</li>
            <li>Providing false or misleading information</li>
            <li>Interfering with website functionality</li>
            <li>Engaging in fraudulent activities</li>
            <li>Violating local, provincial, or federal laws</li>
          </ul>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">3. Project Quotes and Proposals</h2>
          <h3 className="text-xl font-medium mb-2">3.1 Quote Submission</h3>
          <p className="mb-4">
            Quotes provided are estimates and may change based on:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Detailed site inspection</li>
            <li>Material cost fluctuations</li>
            <li>Scope of work modifications</li>
            <li>Unforeseen site conditions</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">3.2 Quote Validity</h3>
          <p>
            Quotes are valid for 30 days from the date of issue unless otherwise specified in writing.
          </p>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">4. Payment and Pricing</h2>
          <h3 className="text-xl font-medium mb-2">4.1 Payment Terms</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Prices are in Canadian dollars</li>
            <li>Payment schedules outlined in project contracts</li>
            <li>Accepted payment methods: Credit card, bank transfer, e-transfer</li>
            <li>Late payment fees may apply</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">4.2 Deposit and Cancellation</h3>
          <ul className="list-disc pl-6">
            <li>Initial deposit required to commence project</li>
            <li>Cancellation fees may apply based on project stage</li>
            <li>Refund policy detailed in individual project contracts</li>
          </ul>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
          <p className="mb-4">
            All designs, plans, and project-related intellectual property remain the property of 
            Dream Makers Construction until full payment is received.
          </p>
          <ul className="list-disc pl-6">
            <li>Designs cannot be reproduced without written consent</li>
            <li>Client receives usage rights upon project completion</li>
            <li>Proprietary methods and techniques are protected</li>
          </ul>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">6. Liability and Warranties</h2>
          <h3 className="text-xl font-medium mb-2">6.1 Service Warranties</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Work performed meets industry standards</li>
            <li>Manufacturer warranties apply to materials</li>
            <li>Workmanship warranty as per contract terms</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">6.2 Limitation of Liability</h3>
          <p>
            Our total liability is limited to the total value of the project contract, 
            except in cases of gross negligence or willful misconduct.
          </p>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">7. Dispute Resolution</h2>
          <p className="mb-4">
            Any disputes will be resolved through:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Negotiation</li>
            <li>Mediation</li>
            <li>Arbitration in the province of project location</li>
          </ul>
          <p>
            Legal proceedings will be conducted in the official language of the province.
          </p>
        </section>

        <hr className="border-gray-200 my-6" />

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">8. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Changes will be effective 
            immediately upon posting on our website. Continued use of services constitutes acceptance 
            of modified terms.
          </p>
        </section>

        <hr className="border-gray-200 my-6" />

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Dream Makers Renovation and Construction</h3>
            <p>Email: legal@dreammakersconstruction.ca</p>
            <p>Phone: (437) 448-4877</p>
            <p>Address: Toronto, CA</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;