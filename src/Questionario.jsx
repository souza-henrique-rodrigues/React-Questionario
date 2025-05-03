import Questao from "./Questao";

export default function Questionario({ listaPerguntas }) {
  return (
    <div>
      <div className="mainWrapper">
        {listaPerguntas.map((objetoPergunta) => {
          return (
            <Questao
              id={objetoPergunta.id}
              pergunta={objetoPergunta.pergunta}
              resposta={objetoPergunta.resposta}
              handleResposta
            />
          );
        })}
      </div>
    </div>
  );
}
