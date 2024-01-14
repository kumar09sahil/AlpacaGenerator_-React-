import React from 'react'
import "../Design/Alpacas.css" 

const Hair = ({handlehair}) => {
  return (
    <>
        <div className="row">
        <div className="col"><button onClick={()=>handlehair('bang')}  className='button'> Bangs </button></div>
        <div className="col"><button  onClick={()=>handlehair('curls')} className='button'> Curls </button></div>
        <div className="col"><button onClick={()=>handlehair('elegant')} className='button'> Elegant </button></div>
    </div>
    <div className="row">
        <div className="col"><button onClick={()=>handlehair('fancy')} className='button'> Fancy </button></div>
        <div className="col"><button onClick={()=>handlehair('quiff')}  className='button'> Quiff </button></div>
        <div className="col"><button onClick={()=>handlehair('short')} className='button'> Short </button></div>
    </div>
    </>
  )
}

export default Hair
