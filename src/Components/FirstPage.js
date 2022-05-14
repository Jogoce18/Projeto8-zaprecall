
export default function FirstPage(props) {
    const { updateGoal, selectDeck, pageUpdate } = { ...props };
    return (
        <div className="conteudo">
           <img className="logo" src= {`/images/raio.svg`} alt=""></img>
                < div className="Zaprecall">
                <h1>ZapRecall</h1> 
                </div>
                <select class="input" onChange={(event) => {selectDeck(event.target.value); }}>
                <option value="" disabled selected hidden>
                    Escolha seu Deck
                </option>
                <option value="geral">Geral</option>
                <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="react">React</option>
            </select>
         
            <input class="input" type="number"
                placeholder="Digite a meta de Zaps"
                min="1"
                max="8"
                onChange={(event) => {
                    if (event.target.value === "") {
                        updateGoal(0);
                    }
                    updateGoal(Number(event.target.value));
                }}
            />
                <button className="iniciar" onClick={pageUpdate} >
                    <span>Iniciar Recall !!</span>
                </button >  
            </div>

 
    );
   
}