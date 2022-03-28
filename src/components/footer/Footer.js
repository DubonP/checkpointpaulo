import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

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
                        <h4>Redes Sociais</h4>
                        <ul className="list-unstyled">
                            <Nav.Link href='https://github.com/DubonP' target="_blank" id='mygit' >Git page</Nav.Link>
                            <Nav.Link href='https://www.linkedin.com/in/paulo-rossi-95296a4b/' target="_blank" id='mylinkedin' >Linkedin</Nav.Link>
                        </ul>
                    </div>

                    <div className="col-md-3 col-sm-6">
                        <h4>Contato</h4>
                        <ul className="list-unstyled">
                            <Nav.Link href="https://wa.me/5517981350990" target="_blank" id='mygit' >Whatsapp</Nav.Link>
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
