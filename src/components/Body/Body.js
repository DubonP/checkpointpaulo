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
            <li>Sou de Monte Azul Paulista interior de Sao Paulo</li>
            <li>Graduado em Engenharia Quimica pela UNAERP</li>
            <li>Apaixonado por tecnologia</li>
            <li>Estudando full stack developer na Digital House</li>
            <li>Produtor de cerveja nas horas vagas</li>
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