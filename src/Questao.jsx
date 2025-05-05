import { useState } from "react";

export default function Questao({ id, pergunta, handleResposta, setAnswer }) {
  const [resposta, setResposta] = useState(null);

  return (
    <div className="questao">
      <h1>
        Id: {id}
        Pergunta: {pergunta}
      </h1>
      <button className="yesButton" onClick={() => handleResposta(true, id)}>
        Sim
      </button>{" "}
      <button className="noButton" onClick={() => handleResposta(false, id)}>
        Não
      </button>
      <p>
        Opção escolhida : <button className="chosenAnswerButton">{}</button>
      </p>
    </div>
  );
}
