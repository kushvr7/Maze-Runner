import React , {useState} from 'react';
import './Input1.css';

function Input(props) {


  const [fix, setfix] = useState({
        n :'',
  });
    

  const chn = (event) => {
      let l = event.target.value;

    setfix({
        n:l,
     });

  };

//   console.log("fix   "+ fix.n);
    return (
        <div>
            Row : <input type="text" className="inp1" onChange={chn} />
            <button onClick ={ () => props.gete(fix.n)}>Submit</button>
        </div>
    )
}

export default Input