import {useState} from 'react';

function Calculator(){
   

    const [value1,setValue1] = useState(0);
    const [value2,setValue2] = useState(0);
    const [result,setResult] = useState(value1+value2);

function inputHanddeling1(e){
//set value1 to what was typed in the input
    setValue1(parseInt(e.target.value))  
}
function inputHanddeling2(e){
    //set value2 to what was typed in the input
    setValue2(parseInt(e.target.value))  
}
function add(e){
e.preventDefault();

    setResult(value1 + value2)
}

return(
    <div className="container">
  <h1>Add with React!</h1>

  <form className="add">
    <input className="value1" type="text" name="value1" onChange={inputHanddeling1}/>
    <span>+</span>
    <input className="value2" type="text" name="value2"onChange={inputHanddeling2} />
    <span>=</span>
    <span></span>
    <div className="btn">
        <button className="payCheck" onClick={add}>Answer</button>
        </div>
    <h3>{result}</h3>
  </form>
</div>

)
}

export default Calculator