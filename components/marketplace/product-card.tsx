import Image from "next/image"
import { Star, ShoppingCart, Heart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/marketplace-data"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="relative h-48 bg-gray-100">
        <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <span className="text-white font-medium">Out of Stock</span>
          </div>
        )}
        {product.organic && (
          <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded">
            Organic
          </div>
        )}
        <button className="absolute top-2 left-2 bg-white p-1.5 rounded-full shadow hover:bg-gray-100">
          <Heart className="h-4 w-4 text-gray-500" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-500">
            {product.region} • {product.country}
          </span>
          <div className="flex items-center">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium ml-1">{product.rating}</span>
          </div>
        </div>
        <h3 className="font-bold text-lg mb-1 line-clamp-1">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.description}</p>
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <span>From {product.farmName}</span>
        </div>
        <div className="flex flex-wrap gap-1 mb-3">
          {product.certifications.slice(0, 2).map((cert, index) => (
            <Badge key={index} variant="outline" className="bg-emerald-50 text-xs">
              {cert}
            </Badge>
          ))}
          {product.certifications.length > 2 && (
            <Badge variant="outline" className="bg-emerald-50 text-xs">
              +{product.certifications.length - 2} more
            </Badge>
          )}
        </div>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg text-emerald-600">${product.price.toFixed(2)}</span>
            <span className="text-xs text-gray-500 ml-1">/ {product.unit}</span>
          </div>
          <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700" disabled={!product.inStock}>
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}
