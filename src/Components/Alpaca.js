import React, { useState } from 'react'
import DomToImage from 'dom-to-image'
import "../Design/Alpacas.css"
import Hair from "../Components/Hair"
import Ear from "../Components/Ear"
import Eye from "../Components/Eye"
import Mouth from '../Components/Mouth'
import Neck from '../Components/Neck'
import Leg from '../Components/Leg'
import Background from '../Components/Background'
import Accesories from '../Components/Accesories'
// import bg from '../alpaca/backgrounds/darkblue70.png'
// import ear from '../alpaca/ears/default.png'
// import eye from '../alpaca/eyes/default.png'
// import hair from '../alpaca/hair/default.png'
// import leg from '../alpaca/leg/default.png'
// import mouth from '../alpaca/mouth/default.png'
// import neck from '../alpaca/neck/default.png'
import nose from '../alpaca/nose.png'

const Alpaca = () => {
    const [showtype, setshowtype] = useState(null);
    const[bgcl , setbgcl] = useState("darkblue70");
    const[ear , setear] = useState('default');
    const[neck , setneck] = useState('default');
    const[mouth , setmouth] = useState('default');
    const[hair , sethair] = useState('default');
    const[eye , seteye] = useState('default');
    const[leg , setleg] = useState('default');
    const[accesories , setaccesories] = useState('');

    const handlebg = (background) =>{
        setbgcl(background);
    }

    const handleear = (eartype) =>{
        setear(eartype);
    }

    const handleneck = (necktype) =>{
        setneck(necktype);
    }

    const handlemouth = (mouthtype) =>{
        setmouth(mouthtype);
    }

    const handlehair = (hairtype) =>{
        sethair(hairtype);
    }

    const handleeye = (eyetype)=>{
        seteye(eyetype);
    }

    const handleleg = (legtype)=>{
        setleg(legtype);
    }

    const handleaccesories = (accesstype)=>{
        setaccesories(accesstype);
    }

    const handleclick = (type) =>{
        setshowtype(type);
    }

    const handleDownload = () =>{
        const imgContainer = document.getElementById("imgContainer");
        DomToImage.toPng(imgContainer)
        .then((dataUrl)=>{
                const link = document.createElement('a');
                link.href=dataUrl;
                link.download = 'composed_img.png';
                link.click();
        })
        .catch((error)=>{
                console.log("error occured while downloading:",error);
        })
    }

    const onAccesoriesMap ={
        1:<Hair handlehair={handlehair}/>,
        2:<Ear handleear={handleear}/>,
        3:<Eye handleeye={handleeye}/>,
        4:<Mouth handlemouth={handlemouth}/>,
        5:<Neck handleneck={handleneck}/>,
        6:<Leg handleleg={handleleg}/>,
        7:<Accesories handleaccesories={handleaccesories}/>,
        8:<Background handlebg={handlebg}/>

    }

  return (
    <div className='container'>
      <h1 className='title'><b>Alpaca Generator</b></h1>
      <div className="parent">

            <div className="child">
                <div id="imgContainer" className="child1">
                    <img src={require(`../alpaca/backgrounds/${bgcl}.png`)} alt="my background" />
                    <img src={require(`../alpaca/ears/${ear}.png`)} alt="ear" />
                    <img src={require(`../alpaca/neck/${neck}.png`)} alt="neck" />
                    <img src={nose} alt="nose" />
                    <img src={require(`../alpaca/hair/${hair}.png`)} alt="hair" />
                    {accesories &&< img src={require(`../alpaca/accessories/${accesories}.png`)} alt="accesories" />}
                    <img src={require(`../alpaca/mouth/${mouth}.png`)} alt="mouth" />
                    <img src={require(`../alpaca/eyes/${eye}.png`)} alt="eye" />
                    <img src={require(`../alpaca/leg/${leg}.png`)} alt="leg" />
                </div>

                <div className="child2">
                    <div className="alpaca">
                        <h3><b>ACCESORIZE THE ALPACA</b></h3>
                        <div className="row">
                            <div className="col"><button onClick={()=>handleclick(1)} className='button'> Hair </button></div>
                            <div className="col"><button onClick={()=>handleclick(2)} className='button'> Ears </button></div>
                            <div className="col"><button onClick={()=>handleclick(3)} className='button'> Eyes </button></div>
                        </div>
                        <div className="row">
                            <div className="col"><button onClick={()=>handleclick(4)} className='button'> Mouth </button></div>
                            <div className="col"><button onClick={()=>handleclick(5)} className='button'> Neck </button></div>
                            <div className="col"><button onClick={()=>handleclick(6)} className='button'> Leg </button></div>
                        </div>
                        <div className="row">
                            <div className="col"><button onClick={()=>handleclick(7)} className='button'> Accesories </button></div>
                            <div className="col"><button onClick={()=>handleclick(8)} className='button'> Background </button></div>
                        </div>
                    </div>
                        <hr/>
                    <div className='typesButton'>
                        {showtype && <h3><b>STYLE</b></h3>}
                        {showtype && onAccesoriesMap[showtype]}
                        
                    </div>
                    <div className="download">
                        {showtype && <button className="button btn-success" onClick={handleDownload}>Download</button>}
                    </div>
                </div>
                    
            </div>
        </div>

    </div>
  )
}

export default Alpaca
