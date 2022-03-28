import './Body.css'

import { Card } from '../Card/Card';

import { projetos } from '../../data/Data';

export default function Body() {
  return (
    <>

    <div className='sobremim'>
      <p className='espaco_inicial'></p>
      <h1 id='title_sobre' className='title_sobre'>Sobre</h1>
      <div className='body_sobre'>
        <div className='card_sobre'>
          <div className='paulo_image'>

          </div>
        </div>
        <div className='text_sobre'>
          <ul>
            <h3>Sou de Monte Azul Paulista interior de Sao Paulo</h3>
            <h3>Graduado em engenharia quimica pela UNAERP</h3>
            <h3>Graduado em engenharia quimica pela</h3>
            <h3>Graduado em engenharia quimica pela</h3>
            <h3>Graduado em engenharia quimica pela</h3>
            <h3>Graduado em engenharia quimica pela</h3>
          </ul>
        </div>
      </div>
    </div>

    <div className='conhecimentos'>
      <h1 id='title_home' className="title_home">Projetos</h1>

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