import Questao from "./Questao";

export default function Questionario({ listaPerguntas }) {
  function handleResposta(respostaUsuario, idQuestao) {
    if (respostaUsuario == true) {
      console.log(`Marcou ${respostaUsuario} na questao de ID : ${idQuestao}`);
    } else {
      console.log(`Marcou ${respostaUsuario} na questao de ID : ${idQuestao}`);
    }
  }

  return (
    <div>
      <div className="mainWrapper">
        {listaPerguntas.map((objetoPergunta) => {
          return <Questao id={objetoPergunta.id} pergunta={objetoPergunta.pergunta} handleResposta={handleResposta} />;
        })}
      </div>
    </div>
  );
}
