import React from 'react'
import { Button } from './Button'
import "./Footer.css"

export default function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    JOIN
                </p>
                <p className="footer-subsciption-text">
                    CONTACT
                </p>
                <form>
                    <input type="email" name="email" placeholder="Your Eamil" className="footer-input" />
                    <Button buttonStyle="btn--outline">SEND</Button>
                </form>
            </section>
        </div>
    )
}
