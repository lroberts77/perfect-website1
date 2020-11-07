import React from 'react'
import { Button } from './Button'
import "./Footer.css"
import { Link } from "react-router-dom"

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
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-links-items">
                        <h2>About us</h2>
                        <Link to="/">test1</Link>
                        <Link to="/">test2</Link>
                        <Link to="/">test3</Link>
                        <Link to="/">test4</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
