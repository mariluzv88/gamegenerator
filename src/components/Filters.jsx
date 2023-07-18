import  {useReducer} from 'react'
import Platforms from './Platforms'
import Genre from './Genre'
import games from '../models/games'

function Filters() {
  const giveGame =()=>{

  }
  const reducer = (state,action)=>{
    switch(action.type){
      case"PSPUZZLE":
      return{data:games[2].puzzle}
      default:
        return state
    }
  }
  // console.log(games[2].puzzle)
  const [state,dispatch] = useReducer(reducer,{data:''})
  return (
    <div>
   <Platforms/>
   <Genre/>
   <button  onClick={(()=>{
      dispatch({type:""})
    })}>Give Me Game</button>
    </div>
  )
}

export default Filters