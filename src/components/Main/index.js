import React from 'react';
import './style.css';
import Scorebutton from '../Scorebutton';
import InputPlace from '../InputPlace';

function Main() {
  return(
    <div className="main">
      <Scorebutton/>
      <InputPlace />
    </div>
  );
}

export default Main;