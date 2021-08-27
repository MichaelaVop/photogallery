import React, { useState, useEffect } from 'react'
import CloseIcon from '@material-ui/icons/Close';

function ImgUnsplash() {
    const [photos, setPhotos] = useState([])
   

    useEffect(() => {

        fetch("https://api.pexels.com/v1/search?query=vancouver&per_page=30", {
            headers: {
                Authorization: process.env.REACT_APP_apiKey
            }
        })
            .then(resp => {
                return resp.json()
            })
            .then(data => {
                setPhotos(data.photos)
            })
        console.log(photos)
    }, [])

    const [tempShow, setTempShow] = useState(false)
    const [temporaryImgSrc, setTempImgSrc] = useState('')
    const showImg = (photos) => {
        setTempImgSrc(photos)
        setTempShow(true)
    }

   
       
    return (
        <>
            <div className={tempShow ? 'tempShow open' : 'tempShow'}>
                <img src={temporaryImgSrc} alt='' />
                <CloseIcon onClick={() => setTempShow(false)} />
            </div>

            <div className='gallery'>
                {photos && photos.length ? photos.map(image =>
                (
                    <div className='imgs' key={image.id} onClick={() => showImg(image.src.portrait)}>
                        <img src={image.src.portrait} alt={image.photographer}/>
                    </div>
                )

                ): <p>loading....</p>}
                <div className='lastChild'></div>
            </div>
        </>
    )


}


export default ImgUnsplash