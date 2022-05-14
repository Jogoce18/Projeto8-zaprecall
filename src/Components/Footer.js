let numberOfQuestions = 8;
let answers = [];
let contadorZap = 0;

function Footer({
  contador,
  iconsAnswers,
  meta,
}) {
  
  if (contador !== numberOfQuestions) {
    return (
      <footer>
        <p>
          {contador}/{numberOfQuestions} CONCLUÍDOS
        </p>
        <div className="icons-answer">
          {iconsAnswers.map((answer) => answer)}
        </div>
      </footer>
    );
  } else {
    for (let i = 0; i < iconsAnswers.length; i++) {
      let answer = iconsAnswers[i].props.id;
      answers.push(answer);
    }
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === "zap") contadorZap += 1;
    }
    if (answers.includes("nao-lembrei") === true) {
      if (meta === "") {
        return (
          <footer className="final-msg">
            <p>
            😣 <span>EITA!</span>
            </p>
            <p>Ainda faltaram alguns... Mas não desanime! Tenta novamente 💪</p>
            <div className="icons-answer">
              {iconsAnswers.map((answer) => answer)}
            </div>
            <button
              className="reiniciar"
              onClick={() => {
                window.location.reload();
              }}
            >
              REINICAR RECALL
            </button>
          </footer>
        );
      } else {
        if (contadorZap >= parseInt(meta)) {
          return (
            <footer className="final-msg">
              <p>
            😣 <span>EITA!</span>
            </p>
            <p>Ainda faltaram alguns... Mas não desanime! Tenta novamente 💪</p>
              <div className="icons-answer">
                {iconsAnswers.map((answer) => answer)}
              </div>
              <button
                className="reiniciar"  onClick={() => {
                  window.location.reload();
                }}
              >
                REINICAR RECALL
              </button>
            </footer>
          );
        } else {
          return (
            <footer className="final-msg">
               <p>
            😣 <span>EITA!</span>
            </p>
            <p>Ainda faltaram alguns... Mas não desanime! Tenta novamente 💪</p>
            
              <div className="icons-answer">
                {iconsAnswers.map((answer) => answer)}
              </div>
              <button
                className="reiniciar"   onClick={() => {
                  window.location.reload();
                }}>
                REINICAR RECALL
              </button>
            </footer>
          );
        }
      }
    } else {
      if (meta === "") {
        return (
          <footer className="final-msg">
             <p>
            😣 <span>EITA!</span>
            </p>
            <p>Ainda faltaram alguns... Mas não desanime! Tenta novamente 💪</p>
            <div className="icons-answer">
              {iconsAnswers.map((answer) => answer)}
            </div>
            <button
              className="reiniciar"
              onClick={() => {
                window.location.reload();
              }}
            >
              REINICAR RECALL
            </button>
          </footer>
        );
      } else {
        if (contadorZap >= parseInt(meta)) {
          return (
            <footer className="final-msg">
              <p>
            😣 <span>EITA!</span>
            </p>
            <p>Ainda faltaram alguns... Mas não desanime! Tenta novamente 💪</p>
            
              <div className="icons-answer">
                {iconsAnswers.map((answer) => answer)}
              </div>
              <button
                className="reiniciar"
                onClick={() => {
                  window.location.reload();
                }}
              >
                REINICAR RECALL
              </button>
            </footer>
          );
        } else {
          return (
            <footer className="final-msg">
              <p>
            😣 <span>EITA!</span>
            </p>
            <p>Ainda faltaram alguns... Mas não desanime! Tenta novamente 💪</p>
              <div className="icons-answer">
                {iconsAnswers.map((answer) => answer)}
              </div>
              <button
                className="reiniciar"   onClick={() => {
                  window.location.reload();
                }}>
                REINICAR RECALL
              </button>
            </footer>
          );
        }
      }
    }
  }
}

export default Footer;