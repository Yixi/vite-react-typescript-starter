import React from 'react'

const Demo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <span className="inline-block w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></span>
      <span className="font-mono text-sm tracking-widest uppercase text-gray-700 dark:text-gray-300">
        Ready to build something amazing
      </span>
    </div>
  )
}

export default React.memo(Demo)
