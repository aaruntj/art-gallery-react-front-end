import './CreatorsPage.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

function CreatorsPage() {

    const [chrisImage, setChrisImage] = useState(null)
    const [matthewImage, setMatthewImage] = useState(null)
    const [aarunImage, setAarunImage] = useState(null)

    useEffect(() => {
        async function getCreators() {
            try {
                const response = await axios.get("http://localhost:8080/profiles")
                console.log(response.data)
                setChrisImage(response.data[0].profileImage)
                setMatthewImage(response.data[1].profileImage)
                setAarunImage(response.data[2].profileImage)
            } catch(error) {
                console.log("error: ",error)
            }
        }
        getCreators()
    }, [])

    if( chrisImage === null || matthewImage === null || aarunImage === null ){
        return <h1>Loading...</h1>
    }

    return (
        <div className='creators-page'> 
            <h1 className='creators-page__title'>Creators</h1>
            <div className='creators-page__container'>
                <div>
                    <a className='creators-page__person' href='https://www.linkedin.com/in/chris-chanho-lee/'>
                    <img className='creators-page__image' src={chrisImage} />
                    <h2 className='creators-page__name'>Chris Lee</h2>
                    </a>
                </div>
                <div>
                    <a className='creators-page__person-m' href='https://www.linkedin.com/in/matthew-hawk/'>
                    <img className='creators-page__image' src={matthewImage} />
                    <h2 className='creators-page__name'>Matthew Hawkins</h2>
                    </a>
                </div>
                <div>
                    <a className='creators-page__person' href='https://www.linkedin.com/in/aarun-jassal/'>
                    <img className='creators-page__image' src={aarunImage} />
                    <h2 className='creators-page__name'>Aarun Jassal</h2>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default CreatorsPage