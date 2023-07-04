import React from "react";
import '../css/Page.css'
import road from '../img/road.png'


const MainPage = () => {
    return (
        <div className="theme">
            <img src={road} alt='road' className="theme__image" />
        </div>
    )
}

export default MainPage;