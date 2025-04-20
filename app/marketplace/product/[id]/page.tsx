import { Header } from "@/components/header"
import { africanProducts } from "@/lib/marketplace-data"
import { ProductDetail } from "@/components/marketplace/product-detail"
import { RelatedProducts } from "@/components/marketplace/related-products"
import { notFound } from "next/navigation"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = africanProducts.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  // Find related products in the same category
  const relatedProducts = africanProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="container px-4 md:px-6 py-12">
          <ProductDetail product={product} />

          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <RelatedProducts products={relatedProducts} />
          </div>
        </div>
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
