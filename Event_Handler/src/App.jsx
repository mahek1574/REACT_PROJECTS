import {useState } from 'react'
import './App.css'

function App() {

  let [input,setinput] = useState("")
  let [input2,setinput2] = useState("");
  

  
  const handleTextfindchange = (event) =>{
    setinput(event.target.value);
  };

  const handleTextfind2change = (event) =>{
    setinput2(event.target.value)
  };

  return (
    <>
      <section>
        <h1>My name is :{input}</h1>

        <form>
          <input type="text" onChange={handleTextfindchange} />
        <h1>My age is:{input2}</h1>
          <input type="number" onChange={handleTextfind2change} />
        </form>
      </section>
    </>
  );
};

export default App;
