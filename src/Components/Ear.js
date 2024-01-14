import React from 'react'

const Ear = ({handleear}) => {
  return (
    <div>
        <div className="row">
        <div className="col"><button onClick={()=>handleear('tilt-backward')}  className='button'>tiltBackward</button></div>
        <div className="col"><button  onClick={()=>handleear('tilt-forward')} className='button'>tiltForwards</button></div>
    </div>
    </div>
  )
}

export default Ear
