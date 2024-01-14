import React from 'react'

const Neck = ({handleneck}) => {
  return (
    <div>
        <div className="row">
        <div className="col"><button onClick={()=>handleneck('bend-backward')}  className='button'> bendBackward </button></div>
        <div className="col"><button  onClick={()=>handleneck('bend-forward')} className='button'> bendForward </button></div>
        <div className="col"><button onClick={()=>handleneck('thick')} className='button'> Thick </button></div>
    </div>
    </div>
  )
}

export default Neck
