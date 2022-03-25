import './Body.css'



import { Card } from '../Card/Card';

import { comidas } from '../../data/Data';

export default function Body() {
  return (
    <>

    <div className='sobremim'>
      <h1 className='title_sobre'>Sobre</h1>
        <div className='card_sobre'>
          <div className='paulo_image'>

          </div>
        </div>
    </div>

    <div className='conhecimentos'>
      <h1 className="title_home">Conhecimentos</h1>

      <div className='container_card_home'>

        {
          comidas.map((item) => (
            <Card key={item.id} comida={item} />
          ))
        }


      </div>
      </div>
    </>
    
  )
}