import React from 'react'
import { Link } from 'react-router-dom';
import '../style/footer.css';

const Footer = () => {
  return (
    <section className="footer">
    <hr className="footer-seperator" />
    <section className="footer-social-media">
      <a href="https://www.linkedin.com/in/klauscepani/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </section>
    <section className="footer-info">
      <section className="footer-info-left">
        <section className="footer-info__name">
            Klaus Cepani
        </section>
        <section className="footer-info__returns">
           Student
          <br />
         Seneca College
        </section>        
      </section>
      <section className="footer-info-center">
        <section className="footer-info__email">
          kceapni@myseneca.ca
        </section>
        <section className="footer-info__terms">
          Terms and Conditions
          <br />
          Copyright
        </section>
      </section>
      <section className="footer-info-right">
        <section className="footer-info__number">
          647-###-####
        </section>
        <section className="footer-info__contact">
        <Link to="/about">About</Link>
          <br />
          Contact Us
        </section>
      </section>
    </section>
    <hr className="footer-seperator" />
  </section>
  )
}

export default Footer