import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Bogdan M.</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/" className="footer__social-link" target="_blank">
                    <i class = "uil uil-instagram"></i>
                </a>

                <a href="https://rs.linkedin.com/in/bogdan-milosavljevic-a08529250?trk=people-guest_people_search-card" className="footer__social-link" target="_blank">
                    <i class = "uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/bogdanjavascript" className="footer__social-link" target="_blank">
                    <i class = "uil uil-github-alt"></i>
                </a>
            </div>
            <span className='footer__copy'>&#169; Bogdan M. All rights reserved.</span>
        </div>
    </footer>
  )
}

export default Footer