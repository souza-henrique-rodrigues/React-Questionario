import { useState } from "react";

//forma correta
export default function Questao({ pergunta, onResposta }) {
  const [respondeu, setRespondeu] = useState(false);
  const [resposta, setRsposta] = useState(null);

  function clicarSim() {
    setRespondeu(true);
    onResposta("Sim");
    setRsposta("sim");
  }
  function clicarNao() {
    setRespondeu(true);
    onResposta("Não");
    setRsposta("não");
  }
  if (respondeu) {
    return <div>{resposta}</div>;
  } else
    return (
      <div className="questao">
        <h1>Pergunta :{pergunta}</h1>
        <button className="yesButton" disabled={respondeu} onClick={clicarSim}>
          Sim
        </button>
        <button className="noButton" disabled={respondeu} onClick={clicarNao}>
          Não
        </button>
      </div>
    );
}
