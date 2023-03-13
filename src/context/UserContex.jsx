import { createContext, useContext, useState } from "react"


export const UserContex = createContext () //pasar datos a otros componente

const UserProvider = ({children}) => {

    const [user, setUser] = useState()

    return(
        <UserContex.Provider value={{user, setUser}}>
            {children}
        </UserContex.Provider>
    )
}

export default UserProvider

export const useUserContext = () => useContext(UserContex)
