import React from "react";
import Title from "./Shared/Title"
export default function Entrada() {
    const[start,setStart]=React.useState('conteudo');
    const[start2,setDisplay1]=React.useState('hidden');
    return (
        <>
            <div className={start}>
               <img className="logo" src= {`/images/logo.png`} alt=""></img>
                < div className="Zaprecall">
                <h1>ZapRecall</h1> 
                </div>
                <button className="iniciar" onClick={()=>{setStart('conteudo hidden');setDisplay1('')}} >
                    <span>Iniciar Recall !!</span>
                </button >  
            </div>
            <div className={start2}>
                <div className="conteudo">
                    <div className="header">
                    <img src={`/images/logo-pequeno.png`} alt="" />
                    <Title />
                    </div> 
                <div className="banner"></div>
                </div>
            </div>

        </>
    );
}