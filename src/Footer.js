import React from "react";
import { Navbar } from "react-bootstrap";

function Footer() {
    return (
        <div className="main-footer">
            <Navbar bg="Myfooter" variant="dark" sticky="botton" expand="sm">
            <Navbar.Toggle />
            <Navbar.Collapse className='right-aligned'>
            <div className="container">
                <div className="row position-relative" >
                    
                    <div className="col-md-3 col-sm-6">
                        <h4>ahsuhasuahsuaushuas</h4>
                        <ul className="list-unstyled">
                            <li>auhauhuahua</li>
                            <li>auhauhuahua</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>ahsuhasuahsuaushuas</h4>
                        <ul className="list-unstyled">
                            <li>auhauhuahua</li>
                            <li>auhauhuahua</li>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>ahsuhasuahsuaushuas</h4>
                        <ul className="list-unstyled">
                            <li>auhauhuahua</li>
                            <li>auhauhuahua</li>
                        </ul>
                    </div>
                    
                </div>
                {/* footer bottom */}
                <div className="footer-bottom">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()}
                    </p>
                </div>
            </div>
            </Navbar.Collapse>
            </Navbar>
        </div>
);
}

export default Footer;
