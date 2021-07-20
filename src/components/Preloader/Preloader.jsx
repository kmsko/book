import React from 'react';
import preloaderGif from "../../assets/image/preloader.gif"

const Preloader = () =>{
    return <div>
        <img className="preloader" src={preloaderGif} alt="1" />
    </div>
}
export default Preloader