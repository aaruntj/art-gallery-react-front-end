import './HomePage.scss'
import axios from 'axios'
import { useState, useEffect } from 'react'

function HomePage() {

  const [randomImage, setRandomImage] = useState(null)

  // let num = Math.floor(Math.random()*18)

  const handleOnClick = () => {
    let num = Math.floor(Math.random()*18)
    console.log("random number =",num)
    async function getRandomImage() {
      try {
        const response = await axios.get("http://localhost:8080/images")
        console.log(response.data)
        setRandomImage(response.data[num].image)
      } catch(error) {
        console.log("error: ",error)
      }
    }
    getRandomImage()
  }
  // console.log(num)
  return (
    <div className='home-page'>
      <h1 className='home-page__title'>Faux Gallery</h1>
      <h2 className='home-page__sub-text'> Click the button to generate some awesome AI art</h2>
      <button onClick={handleOnClick} className="home-page__button">Get Images</button>
      {randomImage &&
      <div className='home-page__pic-div'>
        <img className='home-page__image' src={randomImage} />
      </div>
      }
    </div>
  )
}

export default HomePage