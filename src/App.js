import { useState, useEffect } from 'react'
import Button from './components/Button'
import GifDisplay from './components/GifDisplay'
import Header from './components/Header'

import './App.css'

function App() {
  const [gif, setGif] = useState(null)

  const handleSubmit = async () => {
    const apiKey = "nINz5xXnq2CwNwZIhFlSaBI6KdAadvqt&q"
    const gif = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

    const response = await fetch(gif)
    const data = await response.json()
    console.log(response.json)
  
    setGif(data)
  }


  
  return (
    <div className="App">
        <Header />
        <Button handleSubmit={handleSubmit}/>
        <GifDisplay gif={gif}/>
    </div>
  )

}

export default App
