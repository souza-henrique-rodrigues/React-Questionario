import Questionario from "./Questionario";
import ListaPerguntas from "./ListaPerguntas.js";

export default function App() {
  return (
    <>
      <h1>teste</h1>
      <Questionario perguntas={ListaPerguntas} />
    </>
  );
}
