import React, {useState} from 'react';
import './style.css';

function InputPlace () {
  const [list,setList] = useState([]);

  function addList(){
    var arg = document.querySelector('input').value;
    setList([...list ,<li>{arg}</li>])
  }

  return(
    <div className="adc">
      <p>comments</p>
      <input id="cash"type="text"/>
      <button id="send" type="submit" onClick={()=> addList()}>send</button>
      {list}
      
    </div>
  );
}

export default InputPlace;