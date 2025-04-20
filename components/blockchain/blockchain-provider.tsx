"use client"

import type React from "react"

import { WagmiConfig, createConfig, configureChains } from "wagmi"
import { base, baseGoerli } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"
import { MetaMaskConnector } from "wagmi/connectors/metaMask"
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet"

// Configure the chains and providers
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [process.env.NEXT_PUBLIC_NETWORK === "mainnet" ? base : baseGoerli],
  [publicProvider()],
)

// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "FarmConnect",
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
})

export function BlockchainProvider({ children }: { children: React.ReactNode }) {
  return <WagmiConfig config={config}>{children}</WagmiConfig>
}
