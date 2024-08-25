import { createContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    //aqui van los estados que queremos compartir con los otros componentes
    const [query, setQuery] = useState("superman"); 
    //aqui podemos cambiar para que se vea en la pagina principal
    
    //lamada a useFetch con el parametro seteado
    const {isLoading, error, data} = useFetch(`&s=${query}`);

    //devolvemos DataContext dento llamamos al children
    // en el value van los estados que queremos compartir 
    return (
        
        <DataContext.Provider value={{ setQuery, isLoading, error, data }}>
            { children }
        </DataContext.Provider>
    )
    //para que los componentes escuchen al DataContext hay que configurar  en main 
}