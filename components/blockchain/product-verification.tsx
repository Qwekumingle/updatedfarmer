"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2, Search, CheckCircle, XCircle } from "lucide-react"

// Mock data for demonstration
const mockProducts = {
  "1001": {
    farmId: "101",
    productName: "Organic Tomatoes",
    certifications: "USDA Organic, Non-GMO",
    timestamp: Date.now() - 86400000, // 1 day ago
  },
  "1002": {
    farmId: "102",
    productName: "Fresh Strawberries",
    certifications: "Pesticide-Free, Local",
    timestamp: Date.now() - 172800000, // 2 days ago
  },
}

const mockFarms = {
  "101": {
    farmName: "Green Valley Organics",
    location: "Sonoma, CA",
    owner: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  },
  "102": {
    farmName: "Sunshine Berry Farm",
    location: "Portland, OR",
    owner: "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
  },
}

export function ProductVerification() {
  const [productId, setProductId] = useState("")
  const [verificationAttempted, setVerificationAttempted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [productData, setProductData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [network, setNetwork] = useState("Base Sepolia")

  useEffect(() => {
    // Set network from environment variable if available
    if (process.env.NEXT_PUBLIC_NETWORK) {
      setNetwork(process.env.NEXT_PUBLIC_NETWORK)
    }
  }, [])

  const handleVerify = async () => {
    if (!productId) return

    setIsLoading(true)
    setError(null)
    setVerificationAttempted(true)

    try {
      // Simulate blockchain delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      const product = mockProducts[productId as keyof typeof mockProducts]
      if (!product) {
        throw new Error("Product not found")
      }

      setProductData(product)

      // If we have a farm ID, get the farm details too
      if (product.farmId) {
        try {
          // Simulate blockchain delay
          await new Promise((resolve) => setTimeout(resolve, 500))

          const farmData = mockFarms[product.farmId as keyof typeof mockFarms]
          if (farmData) {
            setProductData((prev) => ({
              ...prev,
              farmName: farmData.farmName,
              farmLocation: farmData.location,
            }))
          }
        } catch (farmError) {
          console.error("Error fetching farm details:", farmError)
        }
      }
    } catch (err) {
      setError("Product verification failed. This product may not be registered or the ID is invalid.")
      setProductData(null)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Verify Product Authenticity</h3>
      <p className="text-gray-600 mb-4">
        Enter the product ID to verify its origin, certifications, and supply chain journey.
      </p>

      <div className="mb-4 p-3 bg-blue-50 text-blue-700 rounded-lg text-sm">
        <p>Network: {network}</p>
      </div>

      <div className="flex gap-2 mb-6">
        <Input
          type="text"
          placeholder="Enter Product ID (try 1001 or 1002)"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          className="flex-1"
        />
        <Button
          onClick={handleVerify}
          disabled={!productId || isLoading}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Verifying...
            </>
          ) : (
            <>
              <Search className="mr-2 h-4 w-4" />
              Verify
            </>
          )}
        </Button>
      </div>

      {verificationAttempted && (
        <div className="border rounded-lg p-4">
          {isLoading ? (
            <div className="flex items-center text-yellow-600">
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              <span>Loading verification data...</span>
            </div>
          ) : error ? (
            <div className="flex items-center text-red-600">
              <XCircle className="h-5 w-5 mr-2" />
              <span>{error}</span>
            </div>
          ) : productData ? (
            <div className="space-y-3">
              <div className="flex items-center text-emerald-600">
                <CheckCircle className="h-5 w-5 mr-2" />
                <span className="font-medium">Verified Product</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">Product Name:</div>
                <div>{productData.productName}</div>
                <div className="text-gray-500">Farm ID:</div>
                <div>{productData.farmId}</div>
                {productData.farmName && (
                  <>
                    <div className="text-gray-500">Farm Name:</div>
                    <div>{productData.farmName}</div>
                    <div className="text-gray-500">Farm Location:</div>
                    <div>{productData.farmLocation}</div>
                  </>
                )}
                <div className="text-gray-500">Certifications:</div>
                <div>{productData.certifications}</div>
                <div className="text-gray-500">Timestamp:</div>
                <div>{new Date(productData.timestamp).toLocaleString()}</div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  )
}
