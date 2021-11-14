import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='bg-primary text-white py-3'>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <h3><span className="text-danger">LUKE BABY CARE</span></h3>
                    <div className="font-style">
                        <a href="*"><div className="single-item"><i class="fab fa-facebook"></i></div></a>
                        <a href="*"><div className="single-item"><i class="fab fa-twitter"></i></div></a>
                        <a href="*"><div className="single-item"><i class="fab fa-linkedin"></i></div> </a>            
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    
                </div>
                <div className="col-md-3 col-sm-6">
                    <ul>
                        <li>About Online fodd</li>
                        <li>Read our blog</li>
                        <li>Sign up to deliver</li>
                        <li>Add uoy resturent</li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6">
                    <ul>
                        <li>Get help</li>
                        <li>Read FAQs</li>
                        <li>View all citios</li>
                    </ul>
                </div>
            </div>
            <div className="row py-5">
                <div className="col-md-6 col-sm-12">
                    
                </div>
                <div className="col-md-6 col-sm-12">
                    <div className="row">
                        <div className="col-md-4">Privacy Policy:</div>
                        <div className="col-md-4">Terms of</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;