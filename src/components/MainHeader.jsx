import React from 'react'
import '../pages/home/Home.css';
import { Link } from 'react-router-dom';
import Image from '../images/main_header.png'

const MainHeader = () => {
    return (
        <header className='main__header'>
            <div className='container main__header-container'>
                <div className="main__header-left">
                    <h4>#100DaysOfWorkOut</h4>
                    <h1>Join The Legends Of the fitness World</h1>
                    <p>Join a vibrant community of fitness lovers and embark on a transformative fitness journey.</p>
                    <Link to={'/plans'} className='btn lg'>Get Started</Link>
                </div>
                <div className="main__header-right">
                    <div className="main__header-circle"> </div>
                    <div className="main__header-image">
                        <img src={Image} alt="Main Header" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default MainHeader