import { useState } from "react";

export default function Questao({ id, pergunta, handleResposta }) {
  const [resposta, setResposta] = useState(".....");

  function showSelectedAnswer(opcaoEscolhida) {
    setResposta(opcaoEscolhida);
  }

  return (
    <div className="questao">
      <h1>
        Id: {id}
        Pergunta: {pergunta}
      </h1>
      <button
        className="yesButton"
        onClick={() => {
          handleResposta(true, id);
          showSelectedAnswer("Sim");
        }}
      >
        {" "}
        Sim
      </button>{" "}
      <button
        className="noButton"
        onClick={() => {
          handleResposta(false, id);
          showSelectedAnswer("Não");
        }}
      >
        Não
      </button>
      <p className="opcaoEscolhida">
        Opção escolhida : <button className="chosenAnswerButton">{resposta}</button>
      </p>
    </div>
  );
}
