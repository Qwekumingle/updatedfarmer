import Image from "next/image"
import { Star, ShoppingCart, Truck, Shield, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/marketplace-data"

interface FeaturedProductProps {
  product: Product
}

export function FeaturedProduct({ product }: FeaturedProductProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-[300px] md:h-[400px] bg-gray-100">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          {product.organic && (
            <div className="absolute top-4 left-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Organic
            </div>
          )}
        </div>
        <div className="p-6 flex flex-col">
          <div className="mb-2">
            <div className="flex items-center gap-2 mb-1">
              <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Featured</Badge>
              <Badge variant="outline" className="bg-emerald-50">
                {product.category}
              </Badge>
            </div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
            <div className="flex items-center gap-4 mb-2">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-medium">{product.rating}</span>
                <span className="ml-1 text-gray-500">({product.reviews} reviews)</span>
              </div>
              <span className="text-gray-500">•</span>
              <span className="text-gray-500">
                {product.region}, {product.country}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {product.certifications.map((cert, index) => (
                <Badge key={index} variant="outline" className="bg-emerald-50">
                  {cert}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
              <Award className="h-5 w-5 text-emerald-600" />
            </div>
            <div>
              <p className="font-medium">From {product.farmName}</p>
              <p className="text-sm text-gray-500">Farmer ID: {product.farmerId}</p>
            </div>
          </div>

          <div className="mt-auto">
            <div className="flex items-baseline mb-4">
              <span className="text-3xl font-bold text-emerald-600">${product.price.toFixed(2)}</span>
              <span className="ml-2 text-gray-500">/ {product.unit}</span>
            </div>

            <div className="flex flex-col gap-3">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" disabled={!product.inStock}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>

              <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                <div className="flex items-center">
                  <Truck className="h-4 w-4 mr-1" />
                  <span>Free shipping over $50</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-4 w-4 mr-1" />
                  <span>Verified Authentic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
