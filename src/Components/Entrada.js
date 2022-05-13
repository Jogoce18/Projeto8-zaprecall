import React  from "react";
import Title from "./Shared/Title"
import DeckFlashCards from "./Flashcard"
export default function Entrada(props)  {
    const[start,setStart]=React.useState('conteudo');
    const[start2,setDisplay1]=React.useState('hidden');
    const{updateGoal } = { ...props }
    return (
        <>
            <div className={start}>
               <img className="logo" src= {`/images/logo.png`} alt=""></img>
                < div className="Zaprecall">
                <h1>ZapRecall</h1> 
                </div>
                <input className="input"
                    type="number"
                    min="1"
                    max="8"
                    placeholder="Digite sua meta de zaps..." onChange={(event) => {
                        if (event.target.value === "") {
                            updateGoal(0);
                        }
                        updateGoal(Number(event.target.value));
                    }} />
                <button className="iniciar" onClick={()=>{setStart('conteudo hidden');setDisplay1('')}} >
                    <span>Iniciar Recall !!</span>
                </button >  
            </div>
            
            <div className={start2}>
                <div className="conteudo">
                    <div className="header">
                    <img className="header img" src={`/images/logo-pequeno.png`} alt="" />
                    <Title />
                    </div> 
                    <DeckFlashCards />
                </div>
                <div className="espacio"></div>
                
            </div>

        </>
    );
}
