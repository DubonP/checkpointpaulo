import './Card.css'
import { Nav } from 'react-bootstrap'

export function Card(props) {
  return (
    <div className="card_home_item">
      <img src={props.comida.image} className="image_card" />
      <Nav.Link className='item_card_title' href= {props.comida.font} target="_blank" id='mygit' >Github {props.comida.title}</Nav.Link>
      <Nav.Link className='item_card_title' href= {props.comida.site} target="_blank" id='mysite' >Site {props.comida.title}</Nav.Link>
      <p>{props.comida.description}</p>
      
    </div>
  )
}