'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2 group hover:opacity-90 transition">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">WalletGate</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/docs" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              Docs
            </Link>
            <a href="https://github.com/walletgate/eudi-sdk" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              GitHub
            </a>
            <a href="https://www.npmjs.com/package/@walletgate/eudi" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">
              npm
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition"
            aria-label="Toggle menu"
            type="button"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 border-t border-gray-100 mt-4 space-y-2">
            <Link
              href="/docs"
              className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Docs
            </Link>
            <a
              href="https://github.com/walletgate/eudi-sdk"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/@walletgate/eudi"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              npm
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}