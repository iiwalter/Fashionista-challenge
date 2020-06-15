import React from 'react'
import { FiLinkedin, FiGithub } from "react-icons/fi";

import './Footer.scss'

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-developer">
                    <span>Desenvolvido por: </span>

                    <span> Walter Henrique</span>
                </div>
                <div className="footer__icons">
                    <a href="https://github.com/iiwalter" target="_blank" rel="noopener noreferrer" className="footer__icon-git" >
                        <FiGithub size={20} />
                    </a>
                    <a href='https://www.linkedin.com/in/walter-henrique-671060165/' target="_blank" rel="noopener noreferrer" className="footer__icon-linkedin" >
                        <FiLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
