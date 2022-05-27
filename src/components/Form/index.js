import { useState } from "react";
import "./style.css";
function Form({ addToDo }) {
  const [value, setValue] = useState("");

  return (
    <div className="form-Todo">
      <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          placeholder="Digite sua tarefa aqui"
          onChange={(event) => setValue(event.target.value)}
        />
        <button type="submit" onClick={() => addToDo(value)}>
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Form;

/*Form: crie um input e um botão no retorno JSX. Esse input deverá salvar o valor que está sendo digitado, utilize um state no componente para salvar esse valor através do onChange.*/
