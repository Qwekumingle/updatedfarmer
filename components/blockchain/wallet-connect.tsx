"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, ExternalLink, Check } from "lucide-react"

export function WalletConnect() {
  const [address, setAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [network, setNetwork] = useState("Base Sepolia")

  // Prevent hydration errors
  useEffect(() => {
    setMounted(true)

    // Set network from environment variable if available
    if (process.env.NEXT_PUBLIC_NETWORK) {
      setNetwork(process.env.NEXT_PUBLIC_NETWORK)
    }
  }, [])

  const handleConnect = async () => {
    setIsConnecting(true)
    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setAddress("0x71C7656EC7ab88b098defB751B7401B5f6d8976F")
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    } finally {
      setIsConnecting(false)
    }
  }

  const handleDisconnect = async () => {
    setAddress(null)
  }

  if (!mounted) return null

  if (address) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-3 py-1 rounded-md text-sm">
          <Check className="h-4 w-4" />
          <span className="hidden md:inline">Connected:</span>
          <span className="font-mono">
            {address.slice(0, 6)}...{address.slice(-4)}
          </span>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDisconnect}
          className="border-emerald-600 text-emerald-600 hover:bg-emerald-50"
        >
          Disconnect
        </Button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <div className="hidden md:block text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{network}</div>
      <Button onClick={handleConnect} disabled={isConnecting} className="bg-emerald-600 hover:bg-emerald-700">
        {isConnecting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Connecting...
          </>
        ) : (
          <>
            <ExternalLink className="mr-2 h-4 w-4" />
            Connect Wallet
          </>
        )}
      </Button>
    </div>
  )
}
