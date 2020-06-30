import React from 'react';
import './Infoc.css';
function InfoD(props) {

    const sty = {
        display : props.set,
    }

    return (

       


        <div style={sty} id="d1">
            <p id="p1">Instructions :</p>
            <ul>
                <li><span id="r" className="com">RED :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className="cont">are the Obstacles dynamically created</span>  </li>
                <li><span id="b" className="com">BLUE :</span> <span className="cont"> is the Start self choosen</span>  </li>
                <li><span id="g" className="com">GREEN :</span> <span className="cont"> is the Exit self choosen </span> </li>
             </ul>
             <p id="p2">
               Firstly provide the size of maze in <span className="ro">Row</span> input field above and start .  Place every required component as per your choice . After placing entry , exit and hurdles press button <span className="sea">( Search )</span>.
                 It will traverse the provided grid and eventually result into the Path to exit and hence the Maze will be solved with 
                 the path shown in  <span id="gol">GOLD</span> . 
             </p>
        </div>
    )
}

export default InfoD
