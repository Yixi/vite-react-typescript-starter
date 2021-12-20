import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const APP: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(prev => prev + 1)}>Plus</button>
    </>
  )
}

ReactDOM.render(<APP />, document.getElementById('app'))

