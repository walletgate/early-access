'use client'

import Link from 'next/link'
import { useState } from 'react'
import Header from '../components/Header'

const sections = [
  { id: 'getting-started', title: 'Getting Started', icon: '🚀' },
  { id: 'installation', title: 'Installation', icon: '📦' },
  { id: 'quick-start', title: 'Quick Start', icon: '⚡' },
  { id: 'verification-types', title: 'Verification Types', icon: '✅' },
  { id: 'webhooks', title: 'Webhooks', icon: '🔔' },
  { id: 'api-reference', title: 'API Reference', icon: '📚' },
  { id: 'frameworks', title: 'Framework Examples', icon: '⚛️' },
  { id: 'typescript', title: 'TypeScript Types', icon: '🔷' },
]

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started')

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-1">
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                Documentation
              </h2>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      activeSection === section.id
                        ? 'bg-brand-50 text-brand-700 transform scale-105'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <span className="text-lg">{section.icon}</span>
                    <span>{section.title}</span>
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 lg:p-12">
              {/* Getting Started */}
              <section id="getting-started" className="mb-16 scroll-mt-24">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  WalletGate EUDI SDK
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                  EU Digital Identity Wallet verification made simple
                </p>
                <div className="bg-brand-50 border-l-4 border-brand-500 p-4 mb-6">
                  <p className="text-brand-900">
                    <strong>WalletGate</strong> is a Verifier/Relying Party solution in the EU Digital Identity Wallet ecosystem.
                    We enable businesses to accept and verify electronic attestations from EUDI Wallets using real EU government infrastructure.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🏛️</div>
                    <h3 className="font-semibold text-gray-900 mb-1">Real EU Infrastructure</h3>
                    <p className="text-sm text-gray-600">Direct connection to EU LOTL</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl mb-2">📋</div>
                    <h3 className="font-semibold text-gray-900 mb-1">Standards Compliant</h3>
                    <p className="text-sm text-gray-600">OpenID4VP, ISO 18013-5, SD-JWT VC</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-2xl mb-2">🚀</div>
                    <h3 className="font-semibold text-gray-900 mb-1">Simple Integration</h3>
                    <p className="text-sm text-gray-600">5 lines of code instead of 500+</p>
                  </div>
                </div>
              </section>

              {/* Installation */}
              <section id="installation" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Installation</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Node.js / JavaScript / TypeScript</h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">npm install @walletgate/eudi</code>
                    </div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">💡 Other Languages</h4>
                    <p className="text-sm text-blue-800">
                      For Ruby, PHP, Java, Python, Go, and other languages, use our HTTP API directly.
                      No SDK installation required - same functionality as JavaScript SDK.
                    </p>
                  </div>
                </div>
              </section>

              {/* Quick Start */}
              <section id="quick-start" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Start</h2>
                <div className="space-y-6">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <p className="text-sm text-yellow-900">
                      <strong>Before you begin:</strong> Get a free test API key (<code className="bg-yellow-100 px-1 rounded">wg_test_*</code>) at{' '}
                      <a href="https://walletgate.app" className="underline">walletgate.app</a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Initialize</h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm"><code>{`import { WalletGate } from '@walletgate/eudi';

const eudi = new WalletGate({
  apiKey: process.env.WALLETGATE_API_KEY,
  baseUrl: 'https://api.walletgate.app'
});`}</code></pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Start Verification</h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm"><code>{`const session = await eudi.startVerification({
  checks: [
    { type: 'age_over', value: 18 },
    { type: 'residency_in', value: ['EU'] }
  ],
  redirectUrl: 'https://yourapp.com/verify-complete'
});

// Redirect user to wallet
window.location.href = session.verificationUrl;`}</code></pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Get Results</h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm"><code>{`const result = await eudi.getResult(sessionId);

if (result.status === 'verified') {
  console.log('Verification successful!');
}`}</code></pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* Verification Types */}
              <section id="verification-types" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Verification Types</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Description</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">Example</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><code className="bg-gray-100 px-2 py-1 rounded">age_over</code></td>
                        <td className="px-6 py-4 text-sm text-gray-700">Verify minimum age</td>
                        <td className="px-6 py-4 text-sm text-gray-700"><code className="bg-gray-100 px-2 py-1 rounded text-xs">{'{ type: "age_over", value: 18 }'}</code></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><code className="bg-gray-100 px-2 py-1 rounded">age_under</code></td>
                        <td className="px-6 py-4 text-sm text-gray-700">Verify maximum age</td>
                        <td className="px-6 py-4 text-sm text-gray-700"><code className="bg-gray-100 px-2 py-1 rounded text-xs">{'{ type: "age_under", value: 65 }'}</code></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><code className="bg-gray-100 px-2 py-1 rounded">residency_in</code></td>
                        <td className="px-6 py-4 text-sm text-gray-700">Verify residency</td>
                        <td className="px-6 py-4 text-sm text-gray-700"><code className="bg-gray-100 px-2 py-1 rounded text-xs">{'{ type: "residency_in", value: ["DE", "FR"] }'}</code></td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><code className="bg-gray-100 px-2 py-1 rounded">name_match</code></td>
                        <td className="px-6 py-4 text-sm text-gray-700">KYC name matching</td>
                        <td className="px-6 py-4 text-sm text-gray-700"><code className="bg-gray-100 px-2 py-1 rounded text-xs">{'{ type: "name_match", value: "John Doe" }'}</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Webhooks */}
              <section id="webhooks" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Webhooks</h2>
                <p className="text-gray-600 mb-4">
                  Receive real-time notifications when verification status changes.
                </p>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm"><code>{`app.post('/webhooks/walletgate', (req, res) => {
  const signature = req.headers['wg-signature'];
  const timestamp = req.headers['wg-timestamp'];

  // Verify webhook authenticity
  const isValid = eudi.verifyWebhook(
    req.rawBody,
    signature,
    process.env.WEBHOOK_SECRET,
    timestamp
  );

  if (!isValid) return res.status(400).send('Invalid signature');

  const event = JSON.parse(req.rawBody);

  switch(event.type) {
    case 'verification.completed':
      // Handle successful verification
      break;
    case 'verification.failed':
      // Handle failed verification
      break;
  }

  res.sendStatus(200);
});`}</code></pre>
                </div>
              </section>

              {/* API Reference */}
              <section id="api-reference" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">API Reference</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-brand-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      <code className="bg-gray-100 px-2 py-1 rounded">new WalletGate(config)</code>
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><code className="bg-gray-100 px-2 py-1 rounded">apiKey</code> - Your WalletGate API key</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">baseUrl</code> - API endpoint (optional)</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">timeout</code> - Request timeout in ms (optional)</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">retries</code> - Retry configuration object (optional)</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">onRateLimit</code> - Callback for rate limit events (optional)</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-brand-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      <code className="bg-gray-100 px-2 py-1 rounded">startVerification(input)</code>
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><code className="bg-gray-100 px-2 py-1 rounded">checks</code> - Array of verification requirements</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">redirectUrl</code> - Post-verification redirect (optional)</li>
                      <li><code className="bg-gray-100 px-2 py-1 rounded">metadata</code> - Custom metadata object (optional)</li>
                      <li><strong>Returns:</strong> <code className="bg-gray-100 px-2 py-1 rounded">VerificationSession</code></li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-brand-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      <code className="bg-gray-100 px-2 py-1 rounded">getResult(sessionId)</code>
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><code className="bg-gray-100 px-2 py-1 rounded">sessionId</code> - From startVerification</li>
                      <li><strong>Returns:</strong> <code className="bg-gray-100 px-2 py-1 rounded">VerificationResult</code></li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-brand-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      <code className="bg-gray-100 px-2 py-1 rounded">verifyWebhook(rawBody, signature, secret, timestamp)</code>
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">Verify webhook signatures (Node.js only)</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Returns:</strong> <code className="bg-gray-100 px-2 py-1 rounded">boolean</code></li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-brand-500 pl-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      <code className="bg-gray-100 px-2 py-1 rounded">makeQrDataUrl(url)</code>
                    </h3>
                    <p className="text-sm text-gray-700 mb-2">Generate QR code for cross-device flow</p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Returns:</strong> <code className="bg-gray-100 px-2 py-1 rounded">Promise&lt;string&gt;</code> (data URL)</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Framework Examples */}
              <section id="frameworks" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Framework Examples</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Next.js</h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm"><code>{`// pages/api/verify.ts
export default async function handler(req, res) {
  const eudi = new WalletGate({ apiKey: process.env.WALLETGATE_API_KEY });

  if (req.method === 'POST') {
    const session = await eudi.startVerification({
      checks: [{ type: 'age_over', value: 18 }]
    });
    res.json(session);
  }
}

// components/AgeGate.tsx
export function AgeGate() {
  const verifyAge = async () => {
    const res = await fetch('/api/verify', { method: 'POST' });
    const { verificationUrl } = await res.json();
    window.location.href = verificationUrl;
  };

  return <button onClick={verifyAge}>Verify Age with EUDI Wallet</button>;
}`}</code></pre>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Express.js</h3>
                    <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm"><code>{`import express from 'express';
import { WalletGate } from '@walletgate/eudi';

const app = express();
const eudi = new WalletGate({ apiKey: process.env.WALLETGATE_API_KEY });

app.post('/verify/start', async (req, res) => {
  const session = await eudi.startVerification({
    checks: req.body.checks,
    redirectUrl: \`\${req.protocol}://\${req.get('host')}/verify/complete\`
  });

  res.json({
    sessionId: session.id,
    walletUrl: session.verificationUrl
  });
});

app.get('/verify/:sessionId', async (req, res) => {
  const result = await eudi.getResult(req.params.sessionId);
  res.json(result);
});`}</code></pre>
                    </div>
                  </div>
                </div>
              </section>

              {/* TypeScript Types */}
              <section id="typescript" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">TypeScript Types</h2>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm"><code>{`interface WalletGateConfig {
  apiKey: string;
  baseUrl?: string;
  timeout?: number;
  retries?: {
    maxRetries?: number;
    baseDelayMs?: number;
    factor?: number;
    jitter?: boolean;
  };
  onRateLimit?: (info: RateLimitInfo) => void;
}

interface VerificationSession {
  id: string;
  verificationUrl: string;
  status: 'pending';
  environment: 'test' | 'live';
  testMode?: boolean;
  warning?: string;
  createdAt: string;
}

interface VerificationResult {
  id: string;
  status: 'pending' | 'verified' | 'failed' | 'expired';
  environment: 'test' | 'live';
  testMode?: boolean;
  warning?: string;
  checks: Record<string, boolean>;
  reason?: string;
  completedAt?: string;
}`}</code></pre>
                </div>
              </section>

              {/* Links & Resources */}
              <section className="border-t pt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Links & Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://walletgate.app" target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <span className="text-2xl">🌐</span>
                    <div>
                      <div className="font-semibold text-gray-900">Get Early Access</div>
                      <div className="text-sm text-gray-600">walletgate.app</div>
                    </div>
                  </a>
                  <a href="https://www.npmjs.com/package/@walletgate/eudi" target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <span className="text-2xl">📦</span>
                    <div>
                      <div className="font-semibold text-gray-900">npm Package</div>
                      <div className="text-sm text-gray-600">@walletgate/eudi</div>
                    </div>
                  </a>
                  <a href="https://github.com/walletgate/eudi-sdk" target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <span className="text-2xl">💻</span>
                    <div>
                      <div className="font-semibold text-gray-900">GitHub Repository</div>
                      <div className="text-sm text-gray-600">View source code</div>
                    </div>
                  </a>
                  <a href="https://eu-digital-identity-wallet.github.io/Build/" target="_blank" rel="noopener noreferrer"
                     className="flex items-center space-x-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <span className="text-2xl">🏛️</span>
                    <div>
                      <div className="font-semibold text-gray-900">EUDI Ecosystem</div>
                      <div className="text-sm text-gray-600">Learn more about EUDI</div>
                    </div>
                  </a>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-6 sm:py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-100 mt-8 sm:mt-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
              © {new Date().getFullYear()} WalletGate. All rights reserved.
            </p>
            <nav className="flex items-center space-x-4 sm:space-x-6 flex-wrap justify-center">
              <a
                href="https://github.com/walletgate/eudi-sdk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition"
              >
                GitHub
              </a>
              <Link href="/docs" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition">
                Docs
              </Link>
              <Link href="/privacy" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition">
                Privacy
              </Link>
              <Link href="/imprint" className="text-xs sm:text-sm text-gray-600 hover:text-gray-900 transition">
                Imprint
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}
