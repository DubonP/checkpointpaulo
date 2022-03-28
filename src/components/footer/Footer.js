import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Whatsapp, Envelope, Github, Linkedin } from "react-bootstrap-icons";

function Footer() {
    return (
        <div className="main-footer">
            <Navbar bg="Myfooter" variant="dark" sticky="botton" expand="sm">
            <Navbar.Toggle />
            <Navbar.Collapse className='right-aligned'>
            <div className="container">
                <div className="row justify-content-md-center">

                    <div className="col col-lg-2">
                        <h4>Redes Sociais</h4>
                        <ul className="list-unstyled">
                            <Nav.Link href='https://github.com/DubonP' target="_blank" id='mygit' ><Github /> Git page</Nav.Link>
                            <Nav.Link href='https://www.linkedin.com/in/paulo-rossi-95296a4b/' target="_blank" id='mylinkedin' ><Linkedin /> Linkedin</Nav.Link>
                        </ul>
                    </div>

                    <div className="col col-lg-3"></div>

                    <div className="col col-lg-2">
                        <h4>Contato</h4>
                        <ul className="list-unstyled">
                        <Nav.Link href="https://wa.me/5517981350990" target="_blank" id='mygit' ><Whatsapp /> Whatsapp</Nav.Link>
                        <Nav.Link href="mailto:paulogustavorossi@gmail.com?" target="_blank" id='myemail' ><Envelope /> Email</Nav.Link>
                        </ul>
                    </div>
                    
                </div>

                <div className="footer-bottom">
                    <p className="text-xs-center">
                        Paulo Rossi
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
