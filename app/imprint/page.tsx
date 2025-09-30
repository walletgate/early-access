import { Metadata } from 'next'
import Header from '../components/Header'

export const metadata: Metadata = {
  title: 'Imprint - WalletGate',
  description: 'Legal information and imprint for WalletGate.',
}

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Imprint</h1>

        <div className="prose prose-lg text-gray-700 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal Information</h2>
            <p>
              Information in accordance with Section 5 TMG (German Telemedia Act)
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h2>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:legal@walletgate.app" className="text-brand-600 hover:text-brand-700 underline">
                legal@walletgate.app
              </a>
            </p>
            <p>
              <strong>Support:</strong>{' '}
              <a href="mailto:support@walletgate.app" className="text-brand-600 hover:text-brand-700 underline">
                support@walletgate.app
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Disclaimer</h2>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Liability for Content</h3>
            <p>
              The contents of our pages have been created with the utmost care. However, we cannot guarantee the
              contents' accuracy, completeness, or topicality. According to statutory provisions, we are responsible
              for our own content on these pages.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-6">Liability for Links</h3>
            <p>
              Our offer includes links to external third-party websites. We have no influence on the contents of those
              websites; therefore, we cannot assume any liability for them. The respective provider or operator of
              the pages is always responsible for the contents of the linked pages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Copyright</h2>
            <p>
              The content and works on these pages created by the site operators are subject to copyright law.
              The duplication, processing, distribution, or any form of commercialization beyond the scope of
              copyright law shall require the prior written consent of its respective author or creator.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}