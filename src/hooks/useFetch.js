import {useState, useEffect} from "react"

const url_varias_movies = "https://www.omdbapi.com/?apikey=d29d2e93&s=troya "
const url_una_movie = "https://www.omdbapi.com/?i=tt3896198&apikey=d29d2e93 "
const API_ENDPOINT = "https://www.omdbapi.com/?apikey=d29d2e93"

export const useFetch = (params) => {
    const [isLoading, setIsLoading] = useState(true); //estado para la carga
    const [error, setError] = useState(false); // estado para el error
    const [data, setData] = useState(null); //estado para los datos
    //recibira un url        
    const fetchMovie = (url) => {
        setIsLoading(true);//cuando se llama a la funcion se cambia el estado de setIsLoading a true
        //se pasa la url al fetch
        fetch(url)
            .then(respuesta => respuesta.json())//convertimos en json la respuesta
            .then(respuestaJson => {
                //si el response es true
                if (respuestaJson.Response === "True") {
                    console.log("res: ", respuestaJson);
                    //si no hay un serach que devuelva la respuesta
                    setData(respuestaJson.Search || respuestaJson);
                    setError(false); //no hubo error
                } else {
                    //si hay error
                    setError(true);
                }
                setIsLoading(false); //porque ya deberia de haber terminado el request
            }).catch(error => {console.log(error);})
    }

    //se llama a la funcion fetchMovie
    useEffect(() => {
        fetchMovie(`${API_ENDPOINT}${params}`);//concatenamos la url con los parametros ue recibe useFetch
    }, [params])//se ejectuta cada vez que cambie el params

    //devolvemos los estados 
    return {isLoading, error, data}
}