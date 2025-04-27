"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, Award, Info, MapPin, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ConnectWallet } from '@coinbase/onchainkit/wallet'
import type { Product } from "@/lib/marketplace-data"
import { useAccount, useBalance } from 'wagmi'
import { parseEther } from 'viem'

interface ProductDetailProps {
  product: Product
}

const SERVICE_CHARGE_PERCENTAGE = 1.5 // 1.5% service charge

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [showWalletConnect, setShowWalletConnect] = useState(false)
  const [transactionHash, setTransactionHash] = useState<string | null>(null)
  const { address, isConnected } = useAccount()
  const { data: balance } = useBalance({
    address,
    token: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913' // USDC on Base
  })

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handlePurchase = async () => {
    if (!isConnected) {
      setShowWalletConnect(true)
      return
    }

    // Here you would implement the actual purchase logic
    // This is where you'd interact with your smart contract
    // For now, we'll just simulate a successful transaction
    setTransactionHash('0x123...') // Replace with actual transaction hash
  }

  const totalPrice = product.price * quantity
  const serviceCharge = (totalPrice * SERVICE_CHARGE_PERCENTAGE) / 100
  const finalPrice = totalPrice + serviceCharge

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
              <span className="text-white font-medium">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Product Info Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Heart className="h-6 w-6 text-gray-500" />
            </button>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="ml-1 font-medium">{product.rating}</span>
            </div>
            <span className="text-gray-500">•</span>
            <span className="text-gray-500">{product.reviews} reviews</span>
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
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
                  onClick={handlePurchase}
                >
                  Buy Now
                </Button>
              </div>

              {showWalletConnect && !isConnected && (
                <div className="mt-4">
                  <ConnectWallet />
                </div>
              )}
            </div>
          )}

          <div className="space-y-3">
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
          <div className="space-y-4 text-gray-600">
            <p>{product.description}</p>
            <div>
              <h4 className="font-medium mb-2">Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="bg-emerald-50">
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="origin" className="p-6 bg-white rounded-md mt-2 border">
          <h3 className="text-lg font-bold mb-4">Origin & Farming</h3>
          <div className="space-y-4 text-gray-600">
            <div>
              <h4 className="font-medium mb-2">Farm Information</h4>
              <p>Produced by {product.farmName} in {product.region}, {product.country}</p>
              <p className="mt-2">Farmer ID: {product.farmerId}</p>
            </div>
            <div>
              <h4 className="font-medium mb-2">Certifications & Practices</h4>
              <div className="flex flex-wrap gap-2">
                {product.certifications.map((cert, index) => (
                  <Badge key={index} variant="outline" className="bg-emerald-50">
                    {cert}
                  </Badge>
                ))}
                {product.organic && (
                  <Badge variant="outline" className="bg-emerald-50">
                    Organic Farming
                  </Badge>
                )}
              </div>
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
          <h3 className="text-lg font-bold mb-4">Customer Reviews</h3>
          <div className="space-y-6">
            {product.reviews > 0 ? (
              // Add review components here
              <p>Reviews coming soon...</p>
            ) : (
              <p className="text-gray-500">No reviews yet. Be the first to review this product!</p>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Purchase Summary</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between mb-2">
            <span>Product Price ({quantity} {product.unit})</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Service Charge ({SERVICE_CHARGE_PERCENTAGE}%)</span>
            <span>${serviceCharge.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${finalPrice.toFixed(2)}</span>
          </div>
        </div>

        {isConnected && balance && (
          <div className="mt-4 text-sm text-gray-600">
            Your USDC Balance: {parseFloat(balance.formatted).toFixed(2)} USDC
          </div>
        )}

        <button
          onClick={handlePurchase}
          className="mt-4 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
        >
          {isConnected ? 'Complete Purchase' : 'Connect Wallet to Purchase'}
        </button>

        {transactionHash && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="text-green-600">Transaction successful!</p>
            <p className="text-sm text-gray-600 mt-2">
              Transaction Hash: {transactionHash}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
