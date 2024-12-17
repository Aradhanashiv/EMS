import { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../Utilis/localStorage";

export const AuthContext = createContext();

const AuthProviderContext = ({children}) => {
      const [usercreden , setusercreden] = useState(null);

      useEffect(() => {
        // const data = ;  
        // console.log(data); 
        // localStorage.clear();
        setLocalStorage();
        const {employees} = getLocalStorage();
        setusercreden(employees);
      }, []); 
// 
// const data = getLocalStorage();
// console.log(data);



    return (<AuthContext.Provider value={[usercreden,setusercreden]}>
        {children}
    </AuthContext.Provider>
    )
}


export default AuthProviderContext;