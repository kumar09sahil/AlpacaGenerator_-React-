import React from 'react'

const Eye = ({handleeye}) => {
  return (
    <div>
        <div className="row">
        <div className="col"><button onClick={()=>handleeye('angry')}  className='button'> Angry </button></div>
        <div className="col"><button  onClick={()=>handleeye('naughty')} className='button'> Naughty </button></div>
        <div className="col"><button onClick={()=>handleeye('panda')} className='button'> Panda </button></div>
    </div>
    <div className="row">
        <div className="col"><button onClick={()=>handleeye('smart')} className='button'> Smart </button></div>
        <div className="col"><button onClick={()=>handleeye('star')}  className='button'> Star </button></div>
    </div>
    </div>
  )
}

export default Eye
