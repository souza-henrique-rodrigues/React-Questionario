import Questionario from "./Questionario";
import ListaPerguntas from "./ListaPerguntas.js";

export default function App() {
  return (
    <>
      <Questionario listaPerguntas={ListaPerguntas} />
    </>
  );
}
