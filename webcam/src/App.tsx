import React, { useEffect, useState } from 'react'
import './App.css'
import Webcam from 'react-webcam'

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [isWebCamActive, setIsWebCamActive] = useState(false)

  useEffect(() => {
    const type = navigator.userAgent.match(/Android/i)
    if (type !== null) {
      setIsMobile(true)
    }
  }, [])

  function handleImageInput(e: React.ChangeEvent<HTMLInputElement>): void {
    alert("Mobile")
  }

  function handleWebDetect(e: React.MouseEvent<HTMLButtonElement>): void {
    setIsWebCamActive(true)
  }

    return (
      <div>
        <h1>REACT WEBCAM</h1>
        <p>click the button and look whats happen</p>
        {
          isWebCamActive ? (
            <Webcam />
          ) : null
        }
        {
          isMobile ? (
            <input type="file" accept='image/*' capture={'environment'} onChange={handleImageInput} />
          ) : <button onClick={handleWebDetect}> Active Webcam </button>
        }
      </div>
    )
}

export default App
