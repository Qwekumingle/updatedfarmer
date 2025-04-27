'use client';

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  const network = process.env.NEXT_PUBLIC_NETWORK === "sepolia" ? Sepolia : Sepolia;

  return (
    <ThirdwebProvider activeChain={network}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </ThirdwebProvider>
  );
} 