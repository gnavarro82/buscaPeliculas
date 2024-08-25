import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import ItemMovie from "./ItemMovie";

const Movies = () => {
    //podemos usar estos estados por que los esta compartiendo DataContext
    const { isLoading, data } = useContext(DataContext);


    return ( 
        <div className="movies-content">
             {/**si isLoading es false muestra los ddatos del estado data  */}
            {
                !isLoading ?
                    data.map(item => (
                        <ItemMovie 
                        key={item.imdbID} 
                        id={item.imdbID} 
                        type={item.Type} 
                        title={item.Title} 
                        poster={item.Poster} 
                        year={item.Year}
                        />
                    ))
                : ''
            }
        </div>
    );
}
export default Movies;