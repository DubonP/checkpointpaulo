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
            <Nav.Link href="#title_home">Sobre mim</Nav.Link>
            <Nav.Link href="#title_home">Projetos</Nav.Link>
            <Nav.Link href="#main-footer">Contato</Nav.Link>
            <Nav.Link href='https://github.com/DubonP' target="_blank" id='mygit' >Git page</Nav.Link>
          </Nav>
          </Navbar.Collapse>

          <Button id='buttonDark' variant="dark" >Dark Theme</Button>
          

        </Navbar>
        
      </header>
    </div>
  );
}



export default Header;
