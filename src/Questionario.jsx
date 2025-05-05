import Questao from "./Questao";

export default function Questionario({ listaPerguntas }) {
  function handleResposta(respostaUsuario, idQuestao) {
    for (let i = 0; i <= listaPerguntas.length; i++) {
      if (listaPerguntas[i].id == idQuestao && respostaUsuario == listaPerguntas[i].resposta) {
        console.log("Acertou questao");
      } else if (listaPerguntas[i].id == idQuestao && respostaUsuario != listaPerguntas[i].resposta) {
        console.log("Errou questao");
      }
    }

    if (respostaUsuario == true) {
      console.log(`Marcou ${respostaUsuario} na questao de ID : ${idQuestao}`);
    } else {
      console.log(`Marcou ${respostaUsuario} na questao de ID : ${idQuestao}`);
    }
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
