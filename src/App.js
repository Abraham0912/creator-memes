import './App.css';
import { useState } from 'react';
import listMemes from './jsons/listMeme.json';

function App() {
  return (
    <div>
      <select>
        {listMemes.map((item)=>{
          return <option key={item.id} value={item.id}>{item.name}</option>
        })}
      </select>
    </div>
  );
}

export default App;
