
import { useState } from 'react'
import './App.css'

function App() {
  const [number, setNumber] = useState<number>(0);

const decNumber =() =>{
  if(number>0){
  setNumber(number-1);
  
  }else{
    alert("count value is 0");
    setNumber(0);
  }
}
const incNumber =() =>{
  setNumber(number+1);
}
const zero = () =>{
  
  setNumber(0);

}

  return(
<>
<h1>React Application with Docker</h1>
<div className='counter'>
  <h1>Counter</h1>
<div className='count'>
  
<button onClick={incNumber}>Increase</button>
<h4>{number}</h4>
<button onClick={decNumber}>decrease</button>
</div>
<button onClick={zero}>Reset</button>
</div>
    </>
  )
}

export default App
