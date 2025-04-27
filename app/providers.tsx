'use client';

import type { ReactNode } from 'react';
import { OnchainKitProvider } from '@coinbase/onchainkit';
import { base, baseSepolia } from 'wagmi/chains';
import { WagmiConfig, createConfig } from 'wagmi';
import { createPublicClient, http } from 'viem';

const selectedChain = process.env.NEXT_PUBLIC_NETWORK === 'mainnet' ? base : baseSepolia;

const config = createConfig({
  chains: [base, baseSepolia],
  transports: {
    [base.id]: http(),
    [baseSepolia.id]: http()
  }
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiConfig config={config}>
      <OnchainKitProvider
        apiKey={process.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY}
        chain={selectedChain}
      >
        {children}
      </OnchainKitProvider>
    </WagmiConfig>
  );
} 