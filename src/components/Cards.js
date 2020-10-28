import React from 'react'
import CardItem from './CardItem'


export default function Cards() {
    return (
        <div className="cards">
            <h1>CHECK IT OUT</h1>
            <div className="cards--container">
                <div className="cards--wrapper">
                    <ul className="cards--items">
                        <CardItem />
                    </ul>
                </div>
            </div>
        </div>
    )
}

