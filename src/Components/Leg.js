import React from 'react'

const Leg = ({handleleg}) => {
  return (
    <div>
        <div className="row">
        <div className="col"><button onClick={()=>handleleg('bubble-tea')}  className='button'> Bubble-tea </button></div>
        <div className="col"><button  onClick={()=>handleleg('cookie')} className='button'> Cookie </button></div>
        <div className="col"><button onClick={()=>handleleg('game-console')} className='button'> gameConsole </button></div>
    </div>
    <div className="row">
        <div className="col"><button onClick={()=>handleleg('tilt-backward')} className='button'> tiltBackward </button></div>
        <div className="col"><button onClick={()=>handleleg('tilt-forward')}  className='button'> tiltForward </button></div>
    </div>
    </div>
  )
}

export default Leg
