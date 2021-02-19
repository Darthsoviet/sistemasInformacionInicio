import React, { useContext ,useReducer} from 'react';
import reducer from "../../reducer/reducer";
import initialState from "../../reducer/initialState";



const stateContext=React.createContext({
   state:{},
   dispatch:()=>{}
});


export function useGlobalStateContext(){
   return useContext(stateContext);
}

export default function StateProvider({children}) {
const [state,dispatch] = useReducer(reducer,initialState)


   return (
      <stateContext.Provider value={{state,dispatch}}>
         {children}
      </stateContext.Provider>
   );
}

