import type { Metadata } from 'next'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: 'Privacy Policy - WalletGate',
  description: 'Privacy policy for WalletGate - EU Digital Identity verification.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
            <p>
              WalletGate is committed to protecting your privacy. This website does not use tracking cookies or analytics.
              We only collect information you explicitly provide through our email signup form.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
            <p>
              When you sign up for early access, we collect:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Your name</li>
              <li>Your email address</li>
            </ul>
            <p className="mt-4">
              This information is used solely to contact you about WalletGate updates and early access opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Processing</h2>
            <p>
              We process your data in accordance with GDPR and eIDAS regulations. Your information is:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Never shared with third parties</li>
              <li>Never used for advertising</li>
              <li>Stored securely and deleted upon request</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <p>
              Under GDPR, you have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing</li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p>
              For privacy-related inquiries, please contact us at:{' '}
              <a href="mailto:privacy@walletgate.app" className="text-brand-600 hover:text-brand-700 underline">
                privacy@walletgate.app
              </a>
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}