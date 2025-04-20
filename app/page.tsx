import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ShoppingBasket, Recycle, Users, Coins } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b bg-white sticky top-0 z-10">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/placeholder.svg?height=32&width=32"
              alt="FarmConnect Logo"
              width={32}
              height={32}
              className="rounded-md bg-emerald-600 p-1"
            />
            <span className="text-xl font-bold text-emerald-700">FarmConnect</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/marketplace"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Marketplace
            </Link>
            <Link
              href="/recycling"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Recycling
            </Link>
            <Link href="/about" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
              About Us
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors">
              Blog
            </Link>
            <Link
              href="/blockchain"
              className="text-sm font-medium text-gray-600 hover:text-emerald-600 transition-colors"
            >
              Blockchain
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-emerald-700">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-emerald-50 to-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=500&width=1000')] bg-no-repeat bg-cover opacity-10"></div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <div className="flex flex-col gap-4">
                <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                  Farm Fresh, <span className="text-emerald-600">Direct to You</span>
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  FarmConnect brings farmers and buyers together while promoting sustainable agriculture and waste
                  recycling. Support local farmers and get fresh produce delivered to your doorstep.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-4">
                  <Link href="/signup">
                    <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/learn-more">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                    >
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-emerald-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-10 right-10 w-64 h-64 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=500&width=500"
                    alt="Farmer with fresh produce"
                    width={500}
                    height={500}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How FarmConnect Works</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Our platform makes it easy to connect farmers with buyers while promoting sustainable practices.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-emerald-50 rounded-lg transition-transform hover:scale-105">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <ShoppingBasket className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Direct Marketplace</h3>
                <p className="text-gray-600">
                  Browse and purchase fresh produce directly from local farmers with no middlemen.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-emerald-50 rounded-lg transition-transform hover:scale-105">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Recycle className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Waste Recycling</h3>
                <p className="text-gray-600">
                  Participate in agricultural waste recycling initiatives to promote sustainability.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-emerald-50 rounded-lg transition-transform hover:scale-105">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community Building</h3>
                <p className="text-gray-600">
                  Connect with like-minded individuals and build a community around sustainable agriculture.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-emerald-50 rounded-lg transition-transform hover:scale-105">
                <div className="h-12 w-12 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                  <Coins className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Blockchain Traceability</h3>
                <p className="text-gray-600">
                  Track product origins and verify authenticity with our blockchain integration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-emerald-50">
          <div className="container px-4 md:px-6">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Products</h2>
              <Link href="/marketplace">
                <Button variant="link" className="text-emerald-600">
                  View all products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg"
                >
                  <div className="relative h-48">
                    <Image
                      src={`/placeholder.svg?height=200&width=300&text=Product+${item}`}
                      alt={`Product ${item}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded">
                      Organic
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">Farm Fresh Product {item}</h3>
                    <p className="text-gray-600 text-sm mb-2">Local Farm Name</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-emerald-600">$4.99/lb</span>
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What Our Users Say</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from farmers and buyers who have transformed their experience with FarmConnect.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-200 flex items-center justify-center mr-4">
                    <span className="text-emerald-700 font-bold">JD</span>
                  </div>
                  <div>
                    <h4 className="font-bold">John Doe</h4>
                    <p className="text-sm text-gray-600">Organic Farmer</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "FarmConnect has revolutionized how I sell my produce. I've connected with local buyers and
                  restaurants, increasing my revenue while reducing waste."
                </p>
              </div>
              <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-100">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-emerald-200 flex items-center justify-center mr-4">
                    <span className="text-emerald-700 font-bold">JS</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Jane Smith</h4>
                    <p className="text-sm text-gray-600">Restaurant Owner</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "As a restaurant owner, I've been able to source the freshest ingredients directly from local farmers.
                  My customers love knowing where their food comes from."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-emerald-600 text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl mb-4">Ready to Join FarmConnect?</h2>
            <p className="max-w-2xl mx-auto text-emerald-50 mb-8">
              Whether you're a farmer looking to expand your market or a buyer seeking fresh, local produce, FarmConnect
              is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup?type=farmer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-emerald-700 hover:border-white"
                >
                  Join as a Farmer
                </Button>
              </Link>
              <Link href="/signup?type=buyer">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                  Join as a Buyer
                </Button>
              </Link>
            </div>
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
                  <Link href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Blog
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
