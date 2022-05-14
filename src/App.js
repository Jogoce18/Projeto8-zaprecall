
import FirstPage from "./Components/FirstPage";
import React from 'react'

import SectionQuestions from "./Components/Flashcard"

export default function App() {

  const [page, setPage] =React.useState(0);
  const [selectedDeck, setSelectedDeck] = React.useState("");
  const [goal, setGoal] =React.useState(0);
  console.log(selectedDeck)

function updateGoal(value) {
    if (value < 0) {
        return;
    }
    setGoal(value);
}

function changePage() {
    setPage(!page);
   
}

  return (
    <>
      {!page ?(<FirstPage pageUpdate={(goal < 1 ) || selectedDeck === ""? () => alert("Tá faltando a meta e deck 😝"): changePage}
                    selectDeck={setSelectedDeck}
                    updateGoal={setGoal}
                    buttonLock={
                        goal < 1 || selectedDeck === null ? "locked" : ""
                   
                      }/>
          ) : (
        
            <div className="conteudo">
              
                <SectionQuestions setSelectedDeck={setSelectedDeck} setGoal={setGoal} changePage={changePage} selectedDeck={selectedDeck} />
           </div>
             
        )}
    </>
  );
}

