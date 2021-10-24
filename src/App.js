import './App.css';
import { useState } from 'react';
import listMemes from './jsons/listMeme.json';

function App() {
  const [linea1,setLinea1] = useState("");
  const [linea2,setLinea2] = useState("");

  const onChangeLinea1 = (e)=>{
    setLinea1(e.target.value);
  }

  const onChangeLinea2 = (e)=>{
    setLinea2(e.target.value);
  }

  const clear = () =>{
    console.log('clear')
    setLinea1('')
    setLinea2('')
  }

  const onClickExport = ()=>{
    //asd
  }
  return (
    <div>
      <select>
        {listMemes.map((item)=>{
          return <option key={item.id} value={item.id}>{item.name}</option>
        })}
      </select>
      <br />
      <input id="first_line"  value={linea1} onChange={onChangeLinea1} type="text" placeholder="Linea 1"/>
      <br />
      <input id="second_line"  value={linea2} onChange={onChangeLinea2} type="text" placeholder="Linea 2"/>
      <button onClick={onClickExport}>Exportar</button>
      <button onClick={clear}>Clear</button>
    </div>
  );
}

export default App;
