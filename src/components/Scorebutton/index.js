import React, {useState} from 'react';
import './style.css';


function Scorebutton(props){

  const [countPlus,setCountPlus] = useState(0);
 


  function attScorePlus(){
    setCountPlus(countPlus + 1);
  }

  function attScoreSub(){
    setCountPlus(countPlus - 1);
  }

  return(
    <div className="all">
      <div className="score">
      <h1>{countPlus}</h1>
      </div>
      <div className="butt">
        <button  type="submit" onClick={attScoreSub}> - </button>
        <button  type="submit" onClick={attScorePlus}> + </button>
      </div>
    </div>
  );
}

export default Scorebutton;