import { useState } from "react"


function Platforms() {
  const [data,setData]=useState('')
  const checkData = (e)=>{
    console.log(e.target.value)
    setData(e.target.value)
  }
  return (
    <div>
    <input type='checkbox' value={'PC'} onChange={(e)=>{checkData(e)}}/>PC
    <input type='checkbox' value={'Mobile'}onChange={(e)=>{checkData(e)}}/>Mobile
    <input type='checkbox' value={'XBOX'}onChange={(e)=>{checkData(e)}}/>XBOX
    <input type='checkbox' value={'PlayStation'}onChange={(e)=>{checkData(e)}}/>PlayStation
    <input type='checkbox' value={'Nintendo'}onChange={(e)=>{checkData(e)}}/>Nintendo
    <input type='checkbox' value={'VR'}onChange={(e)=>{checkData(e)}}/>VR
    </div>
  )
}

export default Platforms