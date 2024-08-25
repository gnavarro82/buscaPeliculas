import {useState, useContext} from "react"
//import {useFetch} from "../hooks/useFetch"
import {DataContext} from "../context/DataContext"


const FormSearch = () => {
const [title, setTitle] = useState("")

//podemos usar estos estados por que los esta compartiendo DataContext
const {setQuery, error} = useContext(DataContext);
//const {data} = useFetch("&s=superman")


  const handleSubmit = e => {
        e.preventDefault()
        setQuery(title)
        //console.log("titulo : ",title)
  }
  return (
    <div className="form-search">
      <h2>Busca tus Peliculas</h2>
      <form onSubmit={handleSubmit}>
        <input type="text"
          placeholder="Titulo de la pelicula"
          onChange={e => setTitle(e.target.value)}
         />
          <input type="submit" value="Buscar" />
      </form>
      { error && <p className="error">La pelicula no existe</p> }
    </div>
  )
}
export default FormSearch
