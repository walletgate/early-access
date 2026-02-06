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
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight whitespace-normal md:whitespace-nowrap">
                  EU Digital Identity,{' '}
                  <span className="text-brand-600">made simple.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed whitespace-normal md:whitespace-nowrap">
                  Developer-first REST API and TypeScript SDK for privacy-preserving EUDI verification.
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
                      <p className="font-medium">Thanks — we'll keep you posted.</p>
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
                        I agree to be contacted about WalletGate updates. No spam—one or two emails max.
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

      {/* FAQ Section */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
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
                a: "WalletGate supports three verification types: age_over (verify if user is above a specified age without revealing birthdate), residency_eu (confirm EU residency status), and identity_verified (full identity verification). Each check returns a cryptographically signed boolean result from the user's official government credential."
              },
              {
                q: "How does the verification flow work?",
                a: "1) Your server calls our API to create a verification session. 2) We return a URL that renders as a QR code. 3) The user scans with their EUDI Wallet app. 4) They approve sharing the requested attributes. 5) Your server receives the cryptographically signed results via webhook or polling. The entire flow typically completes in under 30 seconds."
              },
              {
                q: "What's the difference between test and live mode?",
                a: "Test mode uses simulated wallet responses — perfect for development without real credentials. Live mode connects to actual EU infrastructure. Test verifications are unlimited on all plans. Live verifications count against your monthly quota (100/mo on Free, 1,000/mo on Pro, 10,000/mo on Business)."
              },
              {
                q: "Is this GDPR compliant?",
                a: "Yes. WalletGate is designed for GDPR compliance by default. We only process the minimum attributes you request (data minimization). No personal data is stored on our servers — verification results are delivered directly to your systems. All data in transit is encrypted with TLS 1.3."
              },
              {
                q: "What's the EU LOTL?",
                a: "The List of Trusted Lists (LOTL) is the EU's official registry of qualified trust service providers and their certificates. WalletGate connects directly to the EU LOTL to verify that credentials are issued by legitimate, government-approved authorities."
              },
              {
                q: "Do you support webhooks?",
                a: "Yes. Pro and Business plans include webhook events for real-time notifications (verification.completed, verification.failed, verification.expired). All webhooks are signed with HMAC-SHA256 so you can verify authenticity."
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
