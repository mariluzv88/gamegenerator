import { useState,useContext } from "react" 
import { AppContext } from "../contexts/app_context"

function Genre() {
  
  const [data,setData]=useState('')
  const checkData = (e)=>{
    console.log(e.target.value)
    setData(e.target.value)
  }
  return (
    <div className='genre'>
    <input type='checkbox' value={'Horror'}onChange={(e)=>{checkData(e)}} />Horror
    <input type='checkbox' value={'FPS'}onChange={(e)=>{checkData(e)}}/>FPS
    <input type='checkbox' value={'Sports'}onChange={(e)=>{checkData(e)}}/>Sports
    <input type='checkbox' value={"Puzzle"}onChange={(e)=>{checkData(e)}}/>Puzzle
    <input type='checkbox' value={'RPG'}onChange={(e)=>{checkData(e)}}/>RPG
    <input type='checkbox' value={'Fighting'}onChange={(e)=>{checkData(e)}}/>Fighting
    </div>
  )
}

export default Genre