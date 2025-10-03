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
      <main className="flex-1 flex items-start justify-center px-4 sm:px-6 lg:px-8 pt-2 sm:pt-4 lg:pt-6 pb-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  EU Digital Identity,{' '}
                  <span className="text-brand-600">made simple.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
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
              <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-100">
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
                  <form onSubmit={handleSubmit} className="space-y-4">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
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
                        className="mt-1 w-4 h-4 text-brand-600 border-gray-300 rounded focus:ring-brand-500"
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

              {/* CTA to Docs */}
              <div className="pt-4">
                <Link
                  href="/docs"
                  className="inline-flex items-center space-x-2 text-brand-600 font-medium hover:text-brand-700 transition"
                >
                  <span>Explore the SDK documentation</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column - Animation */}
            <div className="hidden md:flex items-center justify-center">
              <div className="w-full max-w-lg h-80 lg:h-96 relative">
                {/* Modern 3D-style animated illustration */}
                <div className="w-full h-full flex items-center justify-center relative">
                  {/* Floating background shapes */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-purple-100 rounded-full opacity-40 animate-float-slow"></div>
                    <div className="absolute bottom-20 right-16 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-float-delay"></div>
                    <div className="absolute top-32 right-24 w-12 h-12 bg-purple-50 rounded-full opacity-50 animate-float"></div>
                  </div>

                  {/* Main illustration */}
                  <div className="relative z-10">
                    <svg
                      width="360"
                      height="360"
                      viewBox="0 0 360 360"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="drop-shadow-2xl"
                    >
                      <defs>
                        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#a855f7', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#9333ea', stopOpacity: 1 }} />
                        </linearGradient>
                        <linearGradient id="lockGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
                          <stop offset="100%" style={{ stopColor: '#f3e8ff', stopOpacity: 1 }} />
                        </linearGradient>
                        <filter id="glow">
                          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>

                      {/* Outer ring */}
                      <circle
                        cx="180"
                        cy="180"
                        r="140"
                        fill="none"
                        stroke="#f3e8ff"
                        strokeWidth="2"
                        opacity="0.3"
                        className="animate-spin-slow"
                        strokeDasharray="10 20"
                      />

                      {/* Glow circle */}
                      <circle cx="180" cy="180" r="130" fill="#e9d5ff" opacity="0.1" className="animate-pulse-slow" />

                      {/* Main shield with gradient */}
                      <g className="animate-float">
                        <path
                          d="M180 60 L100 95 L100 180 C100 235 180 290 180 290 C180 290 260 235 260 180 L260 95 L180 60Z"
                          fill="url(#shieldGrad)"
                          filter="url(#glow)"
                        />
                        {/* Shield shine effect */}
                        <path
                          d="M180 60 L110 90 L110 180 C110 220 160 260 180 280 L180 60Z"
                          fill="white"
                          opacity="0.1"
                        />
                        {/* Shield border */}
                        <path
                          d="M180 60 L100 95 L100 180 C100 235 180 290 180 290 C180 290 260 235 260 180 L260 95 L180 60Z"
                          stroke="#7e22ce"
                          strokeWidth="4"
                          fill="none"
                          strokeLinejoin="round"
                        />
                      </g>

                      {/* Lock icon */}
                      <g className="animate-float-delay">
                        {/* Lock body */}
                        <rect
                          x="155"
                          y="175"
                          width="50"
                          height="45"
                          rx="8"
                          fill="url(#lockGrad)"
                          stroke="#7e22ce"
                          strokeWidth="3"
                        />
                        {/* Lock shackle */}
                        <path
                          d="M165 175 L165 160 C165 151 172 144 180 144 C188 144 195 151 195 160 L195 175"
                          stroke="url(#lockGrad)"
                          strokeWidth="6"
                          fill="none"
                          strokeLinecap="round"
                        />
                        {/* Keyhole */}
                        <circle cx="180" cy="195" r="5" fill="#9333ea" />
                        <rect x="177" y="195" width="6" height="12" rx="2" fill="#9333ea" />
                      </g>

                      {/* Checkmark particles */}
                      <g className="animate-check-pop">
                        <path
                          d="M140 165 L165 190 L220 135"
                          stroke="#10b981"
                          strokeWidth="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                          opacity="0.9"
                        />
                      </g>

                      {/* Sparkle effects */}
                      <circle cx="240" cy="100" r="3" fill="#a855f7" className="animate-sparkle" opacity="0.8" />
                      <circle cx="120" cy="250" r="2" fill="#a855f7" className="animate-sparkle-delay" opacity="0.6" />
                      <circle cx="250" cy="240" r="2.5" fill="#a855f7" className="animate-sparkle" opacity="0.7" />
                    </svg>
                  </div>
                </div>
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
                q: "What is EUDI Wallet verification?",
                a: "EUDI (EU Digital Identity) Wallet verification allows users to prove their identity, age, or residency using their official EU Digital Identity Wallet. It's part of the eIDAS 2.0 regulation being rolled out across all EU member states."
              },
              {
                q: "How do I integrate WalletGate?",
                a: "WalletGate provides both a REST API and TypeScript SDK. You can start verifying identities with just a few lines of code. Check our documentation at docs.walletgate.app for detailed integration guides."
              },
              {
                q: "What's the difference between test and live mode?",
                a: "Test mode uses test API keys (starting with wg_test_) and doesn't charge you. It's perfect for development and testing. Live mode (wg_live_) processes real verifications and counts towards your plan's quota."
              },
              {
                q: "Which countries are supported?",
                a: "WalletGate supports all 27 EU member states plus EEA countries. We directly integrate with the official EU LOTL (List of Trusted Lists) infrastructure for maximum coverage and compliance."
              },
              {
                q: "Is there a free trial?",
                a: "Yes! You get 100 free test verifications per month with no credit card required. This gives you plenty of time to integrate and test before going live."
              },
              {
                q: "How secure is WalletGate?",
                a: "WalletGate is built with enterprise security in mind: end-to-end encryption, zero-knowledge architecture, SOC 2 Type II certification, and full GDPR compliance. We never store user identity data."
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
              className="text-indigo-600 hover:text-indigo-700 font-semibold"
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