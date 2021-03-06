import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from '../assets/video.mp4'
import pic1 from '../assets/scorpions-banner1.jpg'

export default function HeroSection() {
    return (
      <div className='hero-container'>
        <video autoPlay loop muted src={video} type="video/mp4"/>
        <h1>HELLO</h1>
        <p>HI</p>
        <img src={pic1} alt="slough scorpions" />
        <div className='hero-btns'>
            <Button
            className='btns'
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
            GET STARTED
            </Button>
            <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'>
            WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
      </div>
    );
}

