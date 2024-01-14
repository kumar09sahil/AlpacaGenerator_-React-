import React from 'react'

const Accesories = ({handleaccesories}) => {
  return (
    <div>
        <div className="row">
        <div className="col"><button onClick={()=>handleaccesories('earings')}  className='button'> earings </button></div>
        <div className="col"><button  onClick={()=>handleaccesories('flower')} className='button'> Flower </button></div>
        <div className="col"><button onClick={()=>handleaccesories('glasses')} className='button'> Glasses </button></div>
    </div>
    <div className="row">
        <div className="col"><button onClick={()=>handleaccesories('headphone')} className='button'> Headphone </button></div>
    </div>
    </div>
  )
}

export default Accesories
