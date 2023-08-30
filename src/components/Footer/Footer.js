import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container w-container">
                <div className="flexbox-wrapper flexbox-wrapper-footer">
                    <div className="col-1">
                        <h3 className="footer-heading">Product</h3>
                        {/*<Link to="/how-it-works" className="footer-link">How it Works</Link>*/}
                        <Link to="/features" className="footer-link">Features</Link>
                        <Link to="/pricing" className="footer-link">Pricing</Link>
                        <Link to="/skill-testing" className="footer-link">Predict Performance</Link>
                        <Link to="/assessment-library" className="footer-link">Talent Trials</Link>
                        <Link to="/demo" className="footer-link">Request Demo</Link>
                    </div>
                    <div className="col-1">
                        <h3 className="footer-heading">Company</h3>
                        <Link to="/about" className="footer-link">About</Link>
                        <Link to="/diversity-at-work" className="footer-link">Diversity</Link>
                        <Link to="/testimonial" className="footer-link">Candidate Love</Link>
                        <Link to="/terms-of-use" target="_blank" className="footer-link">Terms of Use</Link>
                        <Link to="/privacy-policy" target="_blank" className="footer-link">Privacy Policy</Link>
                    </div>
                    <div className="col-1">
                        <h3 className="footer-heading">Resources</h3>
                        <a href="https://vervoe.com/blog/" target="_blank" className="footer-link">Blog</a>
                        <a href="http://help.vervoe.com/" target="_blank" className="footer-link">Support</a>
                    </div>
                    {/*<div className="col-1">
                        <h3 className="footer-heading">Partners</h3>
                        <a href="https://app.vervoe.com/register/author" target="_blank" className="footer-link">Authors</a>
                        <a href="https://vervoe.firstpromoter.com/" target="_blank" rel="nofollow" className="footer-link">Referrals</a>
                    </div>*/}
                </div>
                <div className="footer-social-icon-wrapper">
                    <a href="https://www.facebook.com/VervoeHQ" target="_blank" rel="nofollow"
                        className="social-icon facebook w-inline-block">
                        <div className="social-icon-symbol"></div>
                    </a>
                    <a href="https://twitter.com/vervoehq" target="_blank" rel="nofollow"
                        className="social-icon twitter w-inline-block">
                        <div className="social-icon-symbol"></div>
                    </a>
                    <a href="https://www.linkedin.com/company/vervoe-pty-ltd" target="_blank" rel="nofollow"
                        className="social-icon linkedin w-inline-block">
                        <div className="social-icon-symbol"></div>
                    </a>
                </div>
                <div className="copyright-text">
                    <div className="copyright">Copyright © 2019 All Rights Reserved by Vervoe</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
