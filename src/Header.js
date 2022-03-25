import './scripts.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (
    <div className="App">
      <header className="App-header fixed-top">
        <Navbar bg="mygrey" variant="dark"
          sticky="top" expand="sm">
          <Navbar.Brand id='brandname'>
            Paulo Rossi
          </Navbar.Brand>

          <Navbar.Toggle />
          <Navbar.Collapse className='right-aligned'>
          <Nav>
            <Nav.Link href="Sobre mim">Sobre mim</Nav.Link>
            <Nav.Link id='mygit' >Git page</Nav.Link>
            <Nav.Link href="Contato">Contato</Nav.Link>
          </Nav>
          </Navbar.Collapse>

          <Button id='buttonDark' variant="dark" disabled >Dark</Button>
          

        </Navbar>
        
      </header>

      <body>
        <div className='content'>
          Conteudo
        </div>
      </body>

    </div>
  );
}



export default Header;
