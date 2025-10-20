import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          Paymaster Frontend
        </h1>
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-6 mb-6">
          <p className="text-white text-center text-lg mb-4">
            Counter: <span className="font-bold text-2xl">{count}</span>
          </p>
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="w-full bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition duration-200"
          >
            Increment
          </button>
        </div>
        <p className="text-gray-600 text-center text-sm">
          Built with Vite + React + Tailwind CSS
        </p>
      </div>
    </div>
  )
}

export default App
