import { useState } from 'react';
import './App.css';
import Navbar from '../Components/Navbar';
import Footer from  '../Components/Footer';
import Form from '../Components/Form';


function App() {
 let [count,setCount]=useState(0);
  
  function handleIncrement(){
    setCount((prev=>{
      return prev+1}));//0->1 since setcount is asynchronous 
    setCount(prev=>prev+1);//0->1
    setCount(prev=>prev+1);//0->1
    setCount(prev=>prev+1);//0->1
    console.log(count);
  }
  function handleDecrement(){
    setCount(count-1);
    // console.log(count);
  }
  return (
    <div>
      <Navbar/>
      <br>
      </br>
      <br>
      </br>
    
    <button onClick={()=>{handleIncrement()}}> Increment</button>
    <h1>{count}</h1>
    <button onClick={()=>{handleDecrement()}}>Decrement</button>
      {/* Other components go here */}
      <br>
      </br><br>
      </br><br>
      </br><br>
      </br><br>
      </br><br>
      </br><br>
      </br><br>
      </br><br>
      </br><br>
      </br>
     
<Footer/>
<Form/>
    </div>
  );
}

export default App;
