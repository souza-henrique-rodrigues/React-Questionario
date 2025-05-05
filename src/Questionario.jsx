import Questao from "./Questao";

export default function Questionario({ listaPerguntas }) {
  function handleResposta(respostaUsuario, idQuestao) {
    listaPerguntas.forEach((objetoPergunta) => {
      if (objetoPergunta.id == idQuestao && respostaUsuario == objetoPergunta.resposta) {
        console.log("Acertou questao");
      } else {
        console.log("Errou questao");
      }
    });
  }

  return (
    <div>
      <h1>Componente pai da questao</h1>
      <div className="mainWrapper">
        {listaPerguntas.map((objetoPergunta) => {
          return <Questao id={objetoPergunta.id} pergunta={objetoPergunta.pergunta} handleResposta={handleResposta} />;
        })}
      </div>
    </div>
  );
}
