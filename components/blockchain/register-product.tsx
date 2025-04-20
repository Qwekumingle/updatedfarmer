"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Upload, AlertTriangle } from "lucide-react"

// Mock wallet state
const mockWalletState = {
  connected: false,
  address: null as string | null,
}

export function RegisterProduct() {
  const [formData, setFormData] = useState({
    farmId: "",
    productName: "",
    certifications: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [txHash, setTxHash] = useState("")
  const [error, setError] = useState("")
  const [network, setNetwork] = useState("Base Sepolia")
  const [explorerUrl, setExplorerUrl] = useState("https://sepolia.basescan.org")
  const [isWalletConnected, setIsWalletConnected] = useState(false)

  useEffect(() => {
    // Check if wallet is connected from our mock state
    setIsWalletConnected(mockWalletState.connected)

    // Set network from environment variable if available
    if (process.env.NEXT_PUBLIC_NETWORK) {
      setNetwork(process.env.NEXT_PUBLIC_NETWORK)
    }
  }, [])

  // This effect simulates the wallet connection state changing
  // In a real app, this would be triggered by the actual wallet connection
  useEffect(() => {
    // For demo purposes, let's simulate a wallet connection after 2 seconds
    const timer = setTimeout(() => {
      mockWalletState.connected = true
      mockWalletState.address = "0x71C7656EC7ab88b098defB751B7401B5f6d8976F"
      setIsWalletConnected(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.farmId || !formData.productName) return

    setIsSubmitting(true)
    setError("")
    setTxHash("")

    try {
      // Check if wallet is connected
      if (!isWalletConnected) {
        throw new Error("Please connect your wallet first")
      }

      // Simulate blockchain delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Generate a mock transaction hash
      const hash = "0x" + Array.from({ length: 64 }, () => Math.floor(Math.random() * 16).toString(16)).join("")

      setTxHash(hash)
      // Reset form after successful submission
      setFormData({
        farmId: "",
        productName: "",
        certifications: "",
      })
    } catch (err: any) {
      setError(err.message || "Error registering product")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  if (!isWalletConnected) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-4">Register Product on Blockchain</h3>
        <div className="flex items-center justify-center p-6 bg-amber-50 text-amber-800 rounded-lg">
          <AlertTriangle className="h-5 w-5 mr-2" />
          <p>Please connect your wallet to register products on the blockchain.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4">Register Product on Blockchain</h3>
      <p className="text-gray-600 mb-4">
        Register your agricultural products on the blockchain to provide transparency and traceability.
      </p>

      <div className="mb-4 p-3 bg-blue-50 text-blue-700 rounded-lg text-sm">
        <p>Network: {network}</p>
      </div>

      {txHash && (
        <div className="mb-6 p-4 bg-emerald-50 text-emerald-700 rounded-lg">
          <p className="font-medium">Product registered successfully!</p>
          <p className="text-sm mt-1">
            Transaction Hash: {txHash.slice(0, 10)}...{txHash.slice(-8)}
          </p>
          <a
            href={`${explorerUrl}/tx/${txHash}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline mt-2 inline-block"
          >
            View on BaseScan
          </a>
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
          <p className="font-medium">Error registering product</p>
          <p className="text-sm mt-1">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="farmId" className="block text-sm font-medium text-gray-700 mb-1">
            Farm ID
          </label>
          <Input
            id="farmId"
            name="farmId"
            type="text"
            required
            placeholder="Enter your farm ID (try 101 or 102)"
            value={formData.farmId}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700 mb-1">
            Product Name
          </label>
          <Input
            id="productName"
            name="productName"
            required
            placeholder="Enter product name"
            value={formData.productName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="certifications" className="block text-sm font-medium text-gray-700 mb-1">
            Certifications
          </label>
          <Textarea
            id="certifications"
            name="certifications"
            placeholder="Organic, Non-GMO, etc."
            value={formData.certifications}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full bg-emerald-600 hover:bg-emerald-700">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Registering...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Register Product
            </>
          )}
        </Button>
      </form>
    </div>
  )
}
