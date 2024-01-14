import React from 'react'

const Mouth = ({handlemouth}) => {
  return (
    <div>
        <div className="row">
        <div className="col"><button onClick={()=>handlemouth('astonished')}  className='button'> Astonished </button></div>
        <div className="col"><button  onClick={()=>handlemouth('eating')} className='button'> Eating </button></div>
        <div className="col"><button onClick={()=>handlemouth('laugh')} className='button'> Laugh </button></div>
    </div>
    <div className="row">
        <div className="col"><button onClick={()=>handlemouth('tongue')} className='button'> Tongue </button></div>
    </div>
    </div>
  )
}

export default Mouth
