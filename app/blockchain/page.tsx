import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Shield, FileCheck, BarChart3, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { ProductVerification } from "@/components/blockchain/product-verification"
import { RegisterProduct } from "@/components/blockchain/register-product"

export default function BlockchainPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-emerald-600 text-white py-20">
          <div className="container px-4 md:px-6 relative">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-6">Blockchain-Powered Agriculture</h1>
              <p className="text-xl text-emerald-50 mb-8">
                FarmConnect leverages Base blockchain technology to bring transparency, traceability, and trust to the
                agricultural supply chain.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#features">
                  <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                    Explore Features
                  </Button>
                </Link>
                <Link href="https://base.org" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-emerald-700">
                    Learn About Base
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Blockchain Features</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Discover how blockchain technology enhances the FarmConnect platform for farmers and buyers.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Product Verification</h3>
                <p className="text-gray-600 mb-4">
                  Verify the authenticity and origin of agricultural products using blockchain-based tracking.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <FileCheck className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Certification Tracking</h3>
                <p className="text-gray-600 mb-4">
                  Store and verify organic, non-GMO, and other certifications directly on the blockchain.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Supply Chain Tracking</h3>
                <p className="text-gray-600 mb-4">
                  Track products from farm to table with immutable blockchain records at every step.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Coins className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Smart Contracts</h3>
                <p className="text-gray-600 mb-4">
                  Automate payments and agreements between farmers and buyers with secure smart contracts.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Verification Tools */}
        <section className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Blockchain Tools</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Use our blockchain tools to verify products and register your farm produce on the Base blockchain.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <ProductVerification />
              <RegisterProduct />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-emerald-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Join Our Blockchain Network</h2>
            <p className="max-w-2xl mx-auto text-emerald-50 mb-8">
              Connect your wallet to start using blockchain features and bring transparency to your agricultural
              business.
            </p>
            <Link href="/signup">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="FarmConnect Logo"
                  width={32}
                  height={32}
                  className="rounded-md bg-emerald-600 p-1"
                />
                <span className="text-xl font-bold text-white">FarmConnect</span>
              </Link>
              <p className="text-gray-400">Connecting farmers and buyers while promoting sustainable agriculture.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/marketplace" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link href="/recycling" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Recycling
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/blockchain" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Blockchain
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Subscribe</h3>
              <p className="text-gray-400 mb-4">Stay updated with our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-emerald-500 w-full"
                />
                <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FarmConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
