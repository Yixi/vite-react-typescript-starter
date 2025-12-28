import React, { useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/style.less'
import './index.css'
import Demo from './components/Demo'

const root = createRoot(document.getElementById('app')!)

const APP: React.FC = () => {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return (
        localStorage.getItem('theme') === 'dark' ||
        (!localStorage.getItem('theme') &&
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      )
    }
    return false
  })

  useEffect(() => {
    console.log('Dark mode changed:', isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8 transition-colors duration-300">
        <div className="absolute top-4 right-4">
          <button
            onClick={() => setIsDark(!isDark)}
            className="cursor-pointer p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:ring-2 hover:ring-blue-400 transition-all"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Vite + React + TypeScript
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8">
            Tailwind CSS v4 is now configured and ready to use!
          </p>

          <div className="flex flex-col items-center space-y-4">
            <div className="text-6xl font-extrabold text-blue-600 dark:text-blue-400">
              {count}
            </div>
            <button
              className="px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200 font-medium"
              onClick={() => setCount((prev) => prev + 1)}
            >
              Increment Count
            </button>
          </div>

          <div className="mt-10 border-t border-gray-200 dark:border-gray-700 pt-10">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
              Component Demo:
            </h2>
            <div className="p-4 bg-gray-100 dark:bg-gray-700/50 rounded-lg italic text-gray-600 dark:text-gray-400">
              <Demo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

root.render(<APP />)
