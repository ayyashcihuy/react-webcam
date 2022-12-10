import React from 'react'
import './App.css'

function App() {
  function handleImageInput(e: React.ChangeEvent<HTMLInputElement>): void {
    console.log(e.target.files)
  }

    return (
      <div>
        <h1>Welcome</h1>
        <input type="file" accept='image/*' capture={'environment'} onChange={handleImageInput} />
      </div>
    )
}

export default App
