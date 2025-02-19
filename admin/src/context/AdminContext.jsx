import React from "react";
import { createContext } from "react";


export const AdminContext = createContext()

const AdminContextProvider = (props) => {


    const [aToken, setAToken] = React.useState(localStorage.getItem('atoken') ? localStorage.getItem('atoken') : '')

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const value = {
        aToken, setAToken,
        backendUrl,
    }

    return(
        <AdminContext.Provider value={value}>
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider