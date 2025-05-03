import Questionario from "./Questionario";

export default function Questao({ id, pergunta, resposta, handleResposta }) {
  return (
    <div>
      <p>
        id:{id} pergunta: {pergunta}
      </p>
    </div>
  );
}
