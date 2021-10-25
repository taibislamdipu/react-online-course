import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6">
                                <div className="address">
                                    <h3>Bohubrihi</h3>
                                    <p className="mb-4 mt-4">House 82, Road 10/1, Block D, Niketan, Gulshan 1, Dhaka - 1212</p>
                                    <p><strong>Phone:</strong> +8801916-633509 (10AM-5PM)</p>
                                    <p><strong>Email:</strong>  info@bohubrihi.com</p>
                                </div>
                            </div>

                            <div className="col-lg-2 col-sm-6 footer-menus">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="fas fa-check"></i> <a href="#">Home</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">About us</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Services</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-sm-6 footer-menus">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="fas fa-check"></i> <a href="#">Web Design</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Web Development</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Product Management</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">Marketing</a></li>
                                    <li><i className="fas fa-check"></i> <a href="#">And More...</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-sm-6 newsletter">
                                <h4>Our Newsletter</h4>
                                <p>Subscribe to our newsletter to receive latest updates</p>
                                <form action="" method=""><input type="email" name="email" /><input type="submit" value="Subscribe" /></form>

                                <div className="social-links mt-3">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom border-top text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p >
                                    Copyright &copy; <span id="currentYear"></span> Yellow Devs | Site designed by <a
                                        href="https://yellow-devs.netlify.app/" target="_blank" rel="noreferrer" title="Yellow Devs Website">
                                        <span className="text-white"  >Yellow Devs</span></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;