import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => (
<footer className="footer">
<p>Contato: <a href="mailto:nenezinhosevigonha@exemplo.com">nenezinhosevigonha@exemplo.com</a></p>
<ul className="social-list">
<li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /> Facebook</a></li>
<li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /> Instagram</a></li>
<li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /> Twitter</a></li>
</ul>
</footer>
);

export default Footer;