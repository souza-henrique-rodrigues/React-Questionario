import Questao from "./Questao";

export default function Questionario({ perguntas }) {
  return (
    <div>
      <div className="mainWrapper">
        {perguntas.map((objetoPergunta) => {
          return (
            <Questao
              pergunta={objetoPergunta.pergunta}
              onResposta={(valor) => (valor, objetoPergunta.id)}
            />
          );
        })}
      </div>
    </div>
  );
}
