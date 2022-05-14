import { useState, useEffect } from "react";

function FlashCard(props) {
  const {
    contador,
    setContador,
    iconsAnswers,
    setIconsAnswers,
    questionNumber,
    question,
    answer,
    visible,
  } = props;
  const [stage, setStage] = useState("questionsList"); useEffect(() => {setStage("questionsList");}, [visible]);

  function buttonNaoLembrei() {
    setContador(contador + 1);
    setStage("answered-nao-lembrei");
    setIconsAnswers([
      ...iconsAnswers,
      <ion-icon id="nao-lembrei" name="close-circle"></ion-icon>,
    ]);
  }

  function buttonQuaseLembrei() {
    setContador(contador + 1);
    setStage("answered-quase-lembrei");
    setIconsAnswers([
      ...iconsAnswers,
      <ion-icon id="quase-lembrei" name="help-circle"></ion-icon>,
    ]);
  }

  function buttonZap() {
    setContador(contador + 1);
    setStage("answered-zap");
    setIconsAnswers([
      ...iconsAnswers,
      <ion-icon id="zap" name="checkmark-circle"></ion-icon>,
    ]);
  }

  if (stage === "questionsList") {
    return (
      <div className="pergunta">
        <span >{`Pergunta ${questionNumber}`}</span>
        <ion-icon class="icon" name="play-outline" onClick={() => {
            setStage("question");
          }}
        ></ion-icon>
      </div>
    );
  }

  if (stage === "question") {
    return (
      <div className="flash-card-question">
        <p>{question}</p>
        <img src="/images/virar.svg"
          alt="flip-card-icon"
          onClick={() => setStage("answer")}
        />
      </div>
    );
  }

  if (stage === "answer") {
    return (
      <div className="flash-card-answer">
      <p>{answer}</p>
      <div className="buttons-answer">
        <button className="nao-lembrei" onClick={buttonNaoLembrei}>
          Não lembrei
        </button>
        <button className="quase-lembrei" onClick={buttonQuaseLembrei}>
          Quase não lembrei
        </button>
        <button className="zap" onClick={buttonZap}>
          Zap!
        </button>
      </div>
    </div>
    );
  }

  if (stage === "answered-nao-lembrei") {
    return (
      <div className="flash-card-answered nao-lembrei">
        <p>{`Pergunta ${questionNumber}`}</p>
        <ion-icon name="close-circle"></ion-icon>
      </div>
    );
  }

  if (stage === "answered-quase-lembrei") {
    return (
      <div className="flash-card-answered quase-lembrei">
        <p>{`Pergunta ${questionNumber}`}</p>
        <ion-icon name="help-circle"></ion-icon>
      </div>
    );
  }

  if (stage === "answered-zap") {
    return (
      <div className="flash-card-answered zap">
        <p>{`Pergunta ${questionNumber}`}</p>
        <ion-icon name="checkmark-circle"></ion-icon>
      </div>
    );
  }
}
export default FlashCard;