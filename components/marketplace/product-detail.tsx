"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, Award, Info, MapPin, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Product } from "@/lib/marketplace-data"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  return (
    <div>
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link href="/marketplace" className="hover:text-emerald-600">
          Marketplace
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href={`/marketplace?category=${product.category}`} className="hover:text-emerald-600">
          {product.category}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-gray-700 font-medium">{product.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Product Images */}
        <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          {product.organic && (
            <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Organic
            </div>
          )}
          <div className="absolute top-4 right-4 flex gap-2">
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <Heart className="h-5 w-5 text-gray-500" />
            </button>
            <button className="bg-white p-2 rounded-full shadow hover:bg-gray-100">
              <Share2 className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 font-medium">{product.rating}</span>
              <span className="ml-1 text-gray-500">({product.reviews} reviews)</span>
            </div>
            <span className="text-gray-500">•</span>
            <div className="flex items-center text-gray-500">
              <MapPin className="h-4 w-4 mr-1" />
              <span>
                {product.region}, {product.country}
              </span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="flex items-center gap-2 mb-6">
            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <Award className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="font-medium">From {product.farmName}</p>
              <p className="text-sm text-gray-500">Farmer ID: {product.farmerId}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {product.certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="bg-emerald-50">
                {cert}
              </Badge>
            ))}
          </div>

          <div className="flex items-baseline mb-6">
            <span className="text-3xl font-bold text-emerald-600">${product.price.toFixed(2)}</span>
            <span className="ml-2 text-gray-500">/ {product.unit}</span>
            {!product.inStock && (
              <Badge variant="outline" className="ml-4 bg-red-50 text-red-600 border-red-200">
                Out of Stock
              </Badge>
            )}
          </div>

          {product.inStock && (
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <button
                  className="w-10 h-10 rounded-l-md border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  onClick={decrementQuantity}
                >
                  -
                </button>
                <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </div>
                <button
                  className="w-10 h-10 rounded-r-md border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                  onClick={incrementQuantity}
                >
                  +
                </button>
                <span className="ml-3 text-gray-500">Available: 50 {product.unit}</span>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                  Buy Now
                </Button>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-3 text-sm text-gray-500 border-t pt-6">
            <div className="flex items-center">
              <Truck className="h-5 w-5 mr-2 text-emerald-600" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-emerald-600" />
              <span>Blockchain verified authentic product</span>
            </div>
            <div className="flex items-center">
              <Info className="h-5 w-5 mr-2 text-emerald-600" />
              <span>Supports sustainable farming practices</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <Tabs defaultValue="details" className="mt-12">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="details">Product Details</TabsTrigger>
          <TabsTrigger value="origin">Origin & Farming</TabsTrigger>
          <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="p-6 bg-white rounded-md mt-2 border">
          <h3 className="text-lg font-bold mb-4">Product Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Specifications</h4>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="font-medium">Category:</span> {product.category}
                </li>
                <li>
                  <span className="font-medium">Unit Size:</span> {product.unit}
                </li>
                <li>
                  <span className="font-medium">Organic:</span> {product.organic ? "Yes" : "No"}
                </li>
                <li>
                  <span className="font-medium">Certifications:</span> {product.certifications.join(", ")}
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Usage & Storage</h4>
              <p className="text-gray-600 mb-4">
                Store in a cool, dry place away from direct sunlight. Once opened, consume within the recommended
                timeframe for optimal freshness and quality.
              </p>
              <h4 className="font-medium mb-2">Tags</h4>
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, index) => (
                  <Badge key={index} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="origin" className="p-6 bg-white rounded-md mt-2 border">
          <h3 className="text-lg font-bold mb-4">Origin & Farming Practices</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Origin</h4>
              <p className="text-gray-600 mb-4">
                This product comes from {product.region}, {product.country}, where it is grown using traditional and
                sustainable farming methods.
              </p>
              <h4 className="font-medium mb-2">Farm Information</h4>
              <p className="text-gray-600">
                {product.farmName} is a cooperative of small-scale farmers dedicated to sustainable agriculture and fair
                trade practices. They have been growing {product.name.toLowerCase()} for generations using methods that
                respect the environment and local traditions.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Farming Practices</h4>
              <ul className="space-y-2 text-gray-600">
                <li>• Sustainable water management</li>
                <li>• Natural pest control methods</li>
                <li>• Soil conservation techniques</li>
                <li>• Fair labor practices</li>
                {product.organic && <li>• No synthetic pesticides or fertilizers</li>}
              </ul>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="shipping" className="p-6 bg-white rounded-md mt-2 border">
          <h3 className="text-lg font-bold mb-4">Shipping & Returns</h3>
          <div className="space-y-4 text-gray-600">
            <div>
              <h4 className="font-medium mb-2">Shipping Information</h4>
              <p>
                We ship to all major cities within 3-5 business days. Rural areas may take 5-7 business days. Orders
                over $50 qualify for free shipping.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Return Policy</h4>
              <p>
                If you're not satisfied with your purchase, you can return it within 14 days of delivery. Please note
                that the product must be unopened and in its original packaging.
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Damaged Items</h4>
              <p>
                If your product arrives damaged, please contact our customer service within 48 hours with photos of the
                damaged item and packaging.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews" className="p-6 bg-white rounded-md mt-2 border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold">Customer Reviews</h3>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Write a Review</Button>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  <Star className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                  <span className="ml-2 text-3xl font-bold">{product.rating}</span>
                </div>
                <div className="text-gray-500">Based on {product.reviews} reviews</div>
              </div>
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((star) => (
                  <div key={star} className="flex items-center">
                    <span className="w-8 text-sm text-gray-500">{star} star</span>
                    <div className="flex-1 h-2 mx-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full"
                        style={{
                          width: `${star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 2 : 1}%`,
                        }}
                      ></div>
                    </div>
                    <span className="w-8 text-right text-sm text-gray-500">
                      {star === 5 ? 70 : star === 4 ? 20 : star === 3 ? 7 : star === 2 ? 2 : 1}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-4">Top Reviews</h4>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                      <span className="text-sm font-medium">JD</span>
                    </div>
                    <div>
                      <p className="font-medium">John D.</p>
                      <div className="flex items-center">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 5 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        <span className="ml-2 text-xs text-gray-500">2 months ago</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Excellent quality! The flavor is incredible and you can really taste the difference compared to
                    mass-produced alternatives. Will definitely order again.
                  </p>
                </div>
                <div className="border-b pb-4">
                  <div className="flex items-center mb-2">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-2">
                      <span className="text-sm font-medium">SM</span>
                    </div>
                    <div>
                      <p className="font-medium">Sarah M.</p>
                      <div className="flex items-center">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                            />
                          ))}
                        <span className="ml-2 text-xs text-gray-500">1 month ago</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    Very happy with my purchase. Shipping was fast and the product was well-packaged. The quality is as
                    described and I appreciate knowing where it comes from.
                  </p>
                </div>
              </div>
              <Button variant="link" className="text-emerald-600 mt-2">
                View all {product.reviews} reviews
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
