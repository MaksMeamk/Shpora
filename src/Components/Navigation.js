import React from "react";
import { Link } from "react-router-dom";
import '../css/Navigation.css'


const Navigation = () => {
    return (
        <nav className='menu'>
            <div className='menu__title'>Темы:</div>
            <ul className='menu__list'>
                <li className='menu__item'><Link to='/components'>Components</Link></li>
                <li className='menu__item'><Link to='/props'>Props</Link></li>
                <li className='menu__item'><Link to='/state'>State</Link></li>
                <li className='menu__item'><Link to='/lifecycle'>LifeCycle</Link></li>
                <li className='menu__item'><Link to='/events'>Events</Link></li>
                <li className='menu__item'><Link to='/key'>Key</Link></li>
                <li className='menu__item'><Link to='/refs'>Refs</Link></li>
                <li className='menu__item'><Link to='/asynchronous-requests'>Asynchronous requests</Link></li>
                <li className='menu__item'><Link to='/virtual-dom'>Virtual DOM</Link></li>
                <li className='menu__item'><Link to='/fragment'>Fragment</Link></li>
                <li className='menu__item'><Link to='/react-memo'>React.memo</Link></li>
                <li className='menu__item'><Link to='/useEffect'>useEffect</Link></li>
                <li className='menu__item'><Link to='/router'>Router</Link></li>
                <li className='menu__item'><Link to='/context'>Context</Link></li>
                <li className='menu__item'><Link to='/form'>Form</Link></li>
            </ul>
        </nav>
    )

}

export default Navigation;