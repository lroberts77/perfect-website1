import React from 'react'
import CardItem from './CardItem'
import  "./Cards.css";
import img from '../assets/img.jpg'

export default function Cards() {
    return (
        <div className="cards">
            <h1>CHECK IT OUT</h1>
            <div className="cards--container">
                <div className="cards--wrapper">
                    <ul className="cards--items">
                        <CardItem src={img} 
                        text="Explore" 
                        label="Exploration" 
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

