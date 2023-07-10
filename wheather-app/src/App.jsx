import React, { useState } from "react";
import Card from "./Card";
import fetchData from "./api";
import initialDate from "./initialDate";


function App() {

  const [cidade, setcidade] = useState('')
  const [dados, setdados] = useState(initialDate)


  function clicou(evento) {
    evento.preventDefault()
    fetchData(cidade).then((resposta) => {setdados(resposta)})
  }

  return (
      <form onSubmit={ clicou } className="flex flex-col justify-center items-center w-full h-screen ">
        <div>
          <input onChange={ (evento) => setcidade(evento.target.value) } className="outline-none p-3 rounded-lg " type="text" name="" id="" placeholder="Cidade"/>
          <button className="p-3 bg-blue-600 rounded-lg text-white font-bold ml-3" type="submit">Pesquisar</button>
        </div>
        <Card data={dados}/>
      </form>
  );
}

export default App;
