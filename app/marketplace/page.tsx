import { Header } from "@/components/header"
import { ProductGrid } from "@/components/marketplace/product-grid"
import { ProductFilters } from "@/components/marketplace/product-filters"
import { FeaturedProduct } from "@/components/marketplace/featured-product"
import { africanProducts } from "@/lib/marketplace-data"

export default function MarketplacePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-emerald-50 py-12">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl mb-4">African Farm Marketplace</h1>
              <p className="text-xl text-gray-600">
                Discover authentic, sustainably grown products from African farmers
              </p>
            </div>
          </div>
        </section>

        {/* Featured Product */}
        <section className="py-12 bg-white">
          <div className="container px-4 md:px-6">
            <FeaturedProduct product={africanProducts[0]} />
          </div>
        </section>

        {/* Product Listing */}
        <section className="py-12 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <ProductFilters />
              </div>
              <div className="md:col-span-3">
                <ProductGrid products={africanProducts} />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="rounded-md bg-emerald-600 p-1 w-8 h-8"></div>
                <span className="text-xl font-bold text-white">FarmConnect</span>
              </div>
              <p className="text-gray-400">Connecting farmers and buyers while promoting sustainable agriculture.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/marketplace" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Marketplace
                  </a>
                </li>
                <li>
                  <a href="/recycling" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Recycling
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/faq" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
                    Terms of Service
                  </a>
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
                <button className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 text-white rounded-r-md">
                  Subscribe
                </button>
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
