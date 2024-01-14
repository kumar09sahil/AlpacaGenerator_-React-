import React from 'react'

const Background = (props) => {
  return (
    <div>
        <div className="row">
        <div className="col"><button onClick={()=>props.handlebg('blue60')}  className='button'> blue60 </button></div>
        <div className="col"><button  onClick={()=>props.handlebg('darkblue50')} className='button'> darkblue50 </button></div>
        <div className="col"><button onClick={()=>props.handlebg('green50')} className='button'> green50 </button></div>
    </div>
    <div className="row">
        <div className="col"><button onClick={()=>props.handlebg('grey70')} className='button'> gray70 </button></div>
        <div className="col"><button onClick={()=>props.handlebg('red60')}  className='button'> red60 </button></div>
        <div className="col"><button onClick={()=>props.handlebg('yellow60')} className='button'> yellow60 </button></div>
    </div>
    </div>
  )
}

export default Background
