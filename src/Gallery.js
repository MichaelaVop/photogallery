import React, { useState, useEffect } from 'react'
import CloseIcon from '@material-ui/icons/Close';

import Img1 from './img/img1.png';
import Img2 from './img/img2.png';
import Img3 from './img/img3.png';
import Img4 from './img/img4.png';
import Img5 from './img/img5.png';
import axios from 'axios';

const Gallery = () => {

    // let data = [
    //     {
    //         id: 1,
    //         imgSrc: Img1,
    //     },
    //     {
    //         id: 2,
    //         imgSrc: Img2,
    //     },
    //     {
    //         id: 3,
    //         imgSrc: Img3,
    //     },
    //     {
    //         id: 4,
    //         imgSrc: Img4,
    //     },
    //     {
    //         id: 5,
    //         imgSrc: Img5,
    //     }

    // ]

    // const [model, setModel] = useState(false)
    // const [temporaryImgSrc, setTempImgSrc] = useState('')
    // const getImg = (imgSrc) => {
    //     setTempImgSrc(imgSrc)
    //     setModel(true)
    // }



    // return (
    //     <>
    //         <div className={model ? 'model open' : 'model'}>
    //             <img src={temporaryImgSrc} />
    //             <CloseIcon onClick={() => setModel(false)} />
    //         </div>

    //         <div className='gallery'>
    //             {data.map((item, index) => {
    //                 return (
    //                     <div className='imgs' key={index} onClick={() => getImg(item.imgSrc)} >
    //                         <img src={item.imgSrc} />
    //                     </div>

    //                 )
    //             })}
    //         </div>
    //     </>
    // )
}

export default Gallery