import Questionario from "./Questionario";
import ListaPerguntas from "./ListaPerguntas.js";

export default function App() {
  return (
    <>
      <h1>Componente pai do questionario e questao</h1>
      <Questionario listaPerguntas={ListaPerguntas} />
    </>
  );
}
