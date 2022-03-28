import './Body.css'

import { Card } from '../Card/Card';

import { projetos } from '../../data/Data';

export default function Body() {
  return (
    <>

    <div className='sobremim'>
      <h1 className='title_sobre'>Sobre</h1>
      <div className='body_sobre'>
        <div className='card_sobre'>
          <div className='paulo_image'>

          </div>
        </div>
        <div className='text_sobre'>
          <li>
            <h3>Sou do interior de Sao Paulo</h3>
            <h3>Graduado em engenharia quimica pela</h3>
            <h3>Graduado em engenharia quimica pela</h3>
            <h3>Graduado em engenharia quimica pela</h3>
            <h3>Graduado em engenharia quimica pela</h3>
            <h3>Graduado em engenharia quimica pela</h3>
          </li>
        </div>
      </div>
    </div>

    <div className='conhecimentos'>
      <h1 className="title_home">Conhecimentos</h1>

      <div className='container_card_home'>

        {
          projetos.map((item) => (
            <Card key={item.id} comida={item} />
          ))
        }


      </div>
    </div>
    </>
    
  )
}