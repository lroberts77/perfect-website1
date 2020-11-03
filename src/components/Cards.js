import React from 'react'
import CardItem from './CardItem'
import  "./Cards.css";
import see from '../assets/see.jpg'
import eclipse from '../assets/eclipse.jpg'
import sky from '../assets/sky.jpg'
import rose from '../assets/rose.jpg'

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
                        <CardItem src={eclipse} 
                        text="summary or explanation for card 2" 
                        label="CARD 2" 
                        path="/services"
                        />
                        <CardItem src={sky} 
                        text="summary or explanation for card 3" 
                        label="CARD 3" 
                        path="/products"
                        />
                        <CardItem src={rose} 
                        text="summary or explanation for card 4" 
                        label="CARD 4" 
                        path="/sign-up"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

