'use client'

import Link from 'next/link'
import { useState } from 'react'

import Header from './components/Header'

export default function Home() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    setFormState('submitting')

    try {
      // Using Formspree - free tier
      const formEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT

      if (!formEndpoint) {
        throw new Error('NEXT_PUBLIC_FORM_ENDPOINT is not configured')
      }

      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
        })
      })

      if (response.ok) {
        setFormState('success')
        setFormData({ name: '', email: '' })
      } else {
        setFormState('error')
      }
    } catch (error) {
      setFormState('error')
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex-1 flex items-start justify-center pt-2 sm:pt-4 lg:pt-6 pb-8">
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            {/* Left Column - Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Don't scramble when EUDI wallets launch.{' '}
                  <span className="text-brand-600">Be ready.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
                  Integrate EU digital identity verification in 5 lines of code. Build with our sandbox today, go live the moment wallets launch across Europe. Zero user data stored.
                </p>
              </div>

              {/* Trust Strip */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">EU-ready</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">eIDAS-aligned</span>
                </div>
                <span className="text-gray-300">•</span>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-brand-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Privacy-first</span>
                </div>
              </div>

              {/* Email Form */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">Be first to know</h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6">Get early access and updates on our launch.</p>

                {formState === 'success' ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="font-medium">Thanks, we'll keep you posted.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={(e) => { void handleSubmit(e); }} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent transition"
                        placeholder="John Doe"
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-600 focus:border-transparent transition"
                        placeholder="john@company.com"
                        autoComplete="email"
                      />
                    </div>

                    {/* Honeypot field - hidden from users, catches bots */}
                    <input
                      type="text"
                      name="_gotcha"
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />

                    {/* GDPR Consent */}
                    <label className="flex items-start space-x-2 text-sm">
                      <input
                        type="checkbox"
                        name="consent"
                        required
                        className="mt-1 w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-600"
                      />
                      <span className="text-gray-600">
                        I agree to be contacted about WalletGate updates. No spam, one or two emails max.
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="w-full bg-brand-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-brand-700 focus:ring-4 focus:ring-brand-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formState === 'submitting' ? 'Submitting...' : 'Be first to know'}
                    </button>
                    {formState === 'error' && (
                      <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
                    )}
                  </form>
                )}
              </div>

              {/* CTA to Docs + Demo */}
              <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href="https://docs.walletgate.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-brand-600 font-medium hover:text-brand-700 transition"
                >
                  <span>Explore the SDK documentation</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://demo.walletgate.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-brand-600 font-medium hover:text-brand-700 transition"
                >
                  <span>Try the live demo</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://docs.walletgate.app/hosted-verification"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-brand-600 font-medium hover:text-brand-700 transition"
                >
                  <span>Hosted verification page</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Demo Video */}
            <div className="hidden md:flex items-start justify-end pt-44 pl-8">
              <div className="w-full flex flex-col">
                <div className="video-container rounded-2xl overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/videos/hero-loop.webm" type="video/webm" />
                    <source src="/videos/hero-loop.mp4" type="video/mp4" />
                  </video>
                </div>
                {/* Caption */}
                <p className="text-center text-sm text-slate-500 mt-4">
                  Scan → Verify → Done in seconds
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-900">
            Everything you need to verify European identities
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From zero-code hosted pages to full API control, WalletGate adapts to your stack.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Hosted Verification Page */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hosted Verification Page</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We handle the UI. Redirect users to our hosted page for QR scanning, wallet deep-linking, and real-time status updates. Zero frontend code required.
              </p>
            </div>

            {/* Test Wallet Simulator */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Test Wallet Simulator</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Test your full verification flow end-to-end in sandbox mode. Our browser-based test wallet lets you approve or reject without a real EUDI Wallet.
              </p>
            </div>

            {/* Webhooks */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Real-time Webhooks</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Get instant notifications when verifications complete, fail, or expire. HMAC-SHA256 signed payloads delivered to your endpoint. Available on Business plan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What is an EUDI Wallet?",
                a: "The EU Digital Identity Wallet is a government-issued mobile app that stores verified identity credentials like national ID, driving license, and professional qualifications. Under the eIDAS 2.0 regulation, all 27 EU member states must offer EUDI Wallets to citizens by 2026. This creates a standardized way to verify European identities digitally."
              },
              {
                q: "What checks can I perform?",
                a: "WalletGate supports three verification types: age_over (verify if user is above a specified age without revealing birthdate), residency_eu (confirm EU residency status), and identity_verified (full identity verification). Each check returns a cryptographically signed boolean result from the user's official government credential, not self-reported data."
              },
              {
                q: "How does the verification flow work?",
                a: "You have two options. Hosted Page (recommended): Create a session with successUrl and cancelUrl, then redirect your user to the hostedUrl we return. We handle the QR code, wallet deep-linking, and status polling — your user is redirected back with a signed token when done. Custom UI: Create a session, receive a verificationUrl, and render your own QR code. Poll the session status or use webhooks to get results. Both options complete in under 30 seconds. In test mode, a built-in Test Wallet Simulator lets developers approve or reject without a real EUDI Wallet."
              },
              {
                q: "What's the difference between test and live mode?",
                a: "Test mode uses simulated wallet responses, perfect for development and integration testing without real credentials. Live mode connects to actual EU infrastructure and verifies real EUDI Wallet credentials. Test verifications are unlimited on all plans. Live verifications count against your monthly quota (100/mo on Free, 1,000/mo on Pro, 10,000/mo on Business)."
              },
              {
                q: "Do you store personal data?",
                a: "No. WalletGate never stores personal identity data. We verify credentials and discard the data immediately. Verification results are delivered directly to your systems. You maintain full control over data retention in your own infrastructure."
              },
              {
                q: "Is this GDPR compliant?",
                a: "Yes. WalletGate is designed for GDPR compliance by default. We only process the minimum attributes you request (data minimization). No personal data is stored on our servers. Verification results are delivered directly to your systems. All data in transit is encrypted with TLS 1.3."
              },
              {
                q: "What's the EU LOTL?",
                a: "The List of Trusted Lists (LOTL) is the EU's official registry of qualified trust service providers and their certificates. It's maintained by the European Commission and is the authoritative source for validating eIDAS credentials. WalletGate connects directly to the EU LOTL to verify that credentials are issued by legitimate, government-approved authorities."
              },
              {
                q: "Which programming languages are supported?",
                a: "WalletGate provides an official TypeScript/JavaScript SDK, plus REST API examples for Ruby, Go, Java, Python, PHP, and cURL. Any language that can make HTTP requests can integrate with WalletGate."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Still have questions?</p>
            <a
              href="mailto:hello@walletgate.app"
              className="text-brand-600 hover:text-brand-700 font-semibold"
            >
              Contact us →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} WalletGate. All rights reserved.
            </p>
            <nav className="flex items-center space-x-6">
              <a
                href="https://docs.walletgate.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition"
              >
                Docs
              </a>
              <a
                href="https://github.com/walletgate/eudi-sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition"
              >
                GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/@walletgate/eudi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition"
              >
                npm
              </a>
              <a
                href="https://discord.gg/KZ8sP5Ua"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-600 hover:text-gray-900 transition"
              >
                Discord
              </a>
              <Link href="/privacy" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Privacy
              </Link>
              <Link href="/imprint" className="text-sm text-gray-600 hover:text-gray-900 transition">
                Imprint
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
