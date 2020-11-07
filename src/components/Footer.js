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
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to="/" className="social-logo">
                            PRFCT <i className="fab fa-typo3" />
                        </Link>
                    </div>
                    <small className="website-rights">PRFCT © 2020</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                        to="/"
                        target="_blank"
                        aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </Link>
                        <Link className="social-icon-link instagram"
                        to="/"
                        target="_blank"
                        aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
