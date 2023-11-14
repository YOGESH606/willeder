import React from 'react'
import './Details.scss';

const Details = () => {
  return (
    <div className='details'>

      <div className="column"></div>

     <div className='details__content'>
        <div className='details__card-img'></div>

        <div className='details__card-content'>
          <p className="heading">Lorem ipsum</p>
          <p className="content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quod adipisci repudiandae neque, unde minima? Officia vero possimus eveniet atque!
          </p>
          <p className='card_footer'>Lorem ipsum</p>
          <button>arrow</button>
        </div>
        </div>
    </div>
  )
}

export default Details