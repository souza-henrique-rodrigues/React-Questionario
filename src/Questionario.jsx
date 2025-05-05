import { useState } from "react";
import Questao from "./Questao";

export default function Questionario({ listaPerguntas }) {
  const [respostasCorretas, setRespostasCorretas] = useState(0);

  function handleResposta(respostaUsuario, idQuestao) {
    listaPerguntas.forEach((objetoPergunta) => {
      if (objetoPergunta.id == idQuestao && respostaUsuario == objetoPergunta.resposta) {
        console.log("Acertou questao");
        setRespostasCorretas(respostasCorretas + 1);
      } else {
        console.log("Errou questao");
      }
    });
  }

  return (
    <div>
      <h2>Quantidade respostas corretas = {respostasCorretas}</h2>
      <h1>Componente pai da questao</h1>
      <div className="mainWrapper">
        {listaPerguntas.map((objetoPergunta) => {
          return <Questao id={objetoPergunta.id} pergunta={objetoPergunta.pergunta} handleResposta={handleResposta} />;
        })}
      </div>
    </div>
  );
}
