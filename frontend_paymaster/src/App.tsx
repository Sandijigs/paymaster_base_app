import { useState } from 'react'
import { useAppKit, useAppKitAccount } from '@reown/appkit/react'

function App() {
  const [count, setCount] = useState(0)
  const { open } = useAppKit()
  const { address, isConnected } = useAppKitAccount()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header with Wallet Connect */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-gray-800">
              Paymaster Base App
            </h1>
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => open()}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition duration-200 shadow-md"
              >
                {isConnected ? 'Wallet Connected' : 'Connect Wallet'}
              </button>
              {isConnected && address && (
                <p className="text-sm text-gray-600">
                  {address.slice(0, 6)}...{address.slice(-4)}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Counter Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Counter Demo
            </h2>
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 mb-4">
              <p className="text-white text-center text-lg mb-4">
                Counter: <span className="font-bold text-3xl">{count}</span>
              </p>
              <button
                onClick={() => setCount((count) => count + 1)}
                className="w-full bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-200"
              >
                Increment
              </button>
            </div>
          </div>

          {/* WalletConnect Info Card */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              WalletConnect Status
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-sm text-gray-600 mb-1">Connection Status</p>
                <p className="text-lg font-semibold text-gray-800">
                  {isConnected ? '✅ Connected' : '❌ Not Connected'}
                </p>
              </div>
              {isConnected && address && (
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Wallet Address</p>
                  <p className="text-sm font-mono text-gray-800 break-all">
                    {address}
                  </p>
                </div>
              )}
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">Network:</span> Base & Base Sepolia
                </p>
                <p className="text-sm text-blue-800 mt-2">
                  <span className="font-semibold">Integration:</span> Reown AppKit + WalletConnect
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            Built with Vite + React + Tailwind CSS + WalletConnect + Reown AppKit
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
