import React from 'react'
import CardItem from './CardItem'
import  "./Cards.css";
import see from '../assets/see.jpg'



export default function Cards() {
    return (
        <div className="cards">
            <h1>CHECK IT OUT</h1>
            <div className="cards--container">
                <div className="cards--wrapper">
                    <ul className="cards--items">
                        <CardItem src={see} 
                        text="summary or explanation for card 1" 
                        label="CARD 1" 
                        path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

