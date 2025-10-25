import { createAppKit } from '@reown/appkit/react'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { base, baseSepolia } from '@reown/appkit/networks'
import { QueryClient } from '@tanstack/react-query'

// Get projectId from environment variable
const projectId = import.meta.env.VITE_WALLETCONNECT_PROJECT_ID

if (!projectId) {
  throw new Error('VITE_WALLETCONNECT_PROJECT_ID is not set')
}

// Create a metadata object
const metadata = {
  name: 'Paymaster Base App',
  description: 'Paymaster application with reward contract on Base',
  url: typeof window !== 'undefined' ? window.location.origin : '',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create Wagmi Adapter
export const wagmiAdapter = new WagmiAdapter({
  networks: [base, baseSepolia],
  projectId,
  ssr: false
})

// Create Query Client for React Query
export const queryClient = new QueryClient()

// Create the AppKit instance
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  networks: [base, baseSepolia],
  projectId,
  metadata,
  features: {
    analytics: true, // Enable analytics for tracking
  }
})
