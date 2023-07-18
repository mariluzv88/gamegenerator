import './App.css';
import { useState } from 'react';
import Filters from './components/Filters';
import Platforms from './components/Platforms';
import games from './models/games';
import genre from './models/genre';
import platforms from './models/platforms';

function App() {
  // const [data,setData]= useState([])
  // const [state,dispatch] = useReducer(reducer,{game:[""],toggleResult:true})

  
  // const getGame =()=>{
  //    let random =Math.floor(Math.random()*2)
  //    setGame = ()=>{
  //     if(horror is che)
  //    }
    
  // }
  const [data,setData]=useState('')
  const checkData = (e)=>{
    console.log(e.target.value)
    setData(e.target.value)
  }
  return (
    <div className="App">
      <h1>Game Generator</h1>
      <h2>What Game Should You Play?</h2>
      <Filters/>
      {/* <Result/> */}
    </div>
  );
}

export default App;
