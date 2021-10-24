import './App.css';
import { useState } from 'react';
import listMemes from './jsons/listMeme.json';

function App() {
  const [linea1,setLinea1] = useState("");
  const onChangeLinea1 = (e)=>{
    setLinea1(e.target.value);
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
    </div>
  );
}

export default App;
