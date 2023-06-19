import React from "react";
import '../css/MainPage.css'
import road from '../img/road.png'


const MainPage = () => {
    return (
        <div className="image">
            <img src={road} alt='road' className="image__item" />
        </div>
    )
}

export default MainPage;