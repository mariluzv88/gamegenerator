import{useState,createContext, useReducer} from 'react'
import games from '../models/games'
export const AppContext = createContext
// const reducer = (state,action) =>{
//     switch(action.type){
//         case"PCHORROR":
//         return{game:[pc.games.]}
//     }
// }


const AppContextProvider = (props) =>{
    // const [selected,setSelected]=useState('')
    // const checkSelected = ()=>{
    //   if(data === checked)
    // }
    // const [game,setGame]= useState[""]
    // const [state,dispatch] = useReducer(reducer,{game:[""],toggleResult:true})
    // const getGame =()=>{
    //    let random =Math.floor(Math.random()*2)
      
    //  }
    
    return(
        <AppContextProvider value={{
            // data,
            // setData
        }}>
            {props.children}

        </AppContextProvider>
    )
}
export default AppContextProvider