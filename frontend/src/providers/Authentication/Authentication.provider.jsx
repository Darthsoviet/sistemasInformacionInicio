import React,{useContext,useState,useCallback} from 'react';



const AuthContext=React.createContext(null);

function useAuth(){
   const context=useContext(AuthContext);
   if(!context){
      throw new Error(`Can't use "useAuth" without an AuthProvider!`);
   }
   return context;
}

const AuthenticationProvider = ({children}) => {
   const [authenticated,setAuthenticated]=useState(false);


   const login=useCallback(()=>{
      setAuthenticated(true);
   });

   const logout=useCallback(()=>{
      setAuthenticated(false)
   })
   return (
      <AuthContext.Provider value={{login,logout,authenticated}}>
         {children}
      </AuthContext.Provider>
   );
}

export {useAuth};
export default AuthenticationProvider;
