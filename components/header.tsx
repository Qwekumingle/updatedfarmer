import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WalletConnect } from "@/components/blockchain/wallet-connect"

export function Header() {
  return (
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
          <WalletConnect />
          <div className="hidden sm:flex items-center gap-2">
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
      </div>
    </header>
  )
}
