import './App.css'
import FormSearch from './components/FormSearch'
import MainPage from './components/MainPage'
import Movies from "./components/Movies"
import {Routes, Route, BrowserRouter} from "react-router-dom"
import SingleMovie from './components/SingleMovie'
function App() {
/*   const url_varias_movies = "https://www.omdbapi.com/?apikey=d29d2e93&s=troya "
  const url_una_movie = "https://www.omdbapi.com/?i=tt3896198&apikey=d29d2e93 "
 */  
  
  return (
    <div className='App'>
      {/*componente padre */}
     <BrowserRouter>
      {/*otro componente */}
     <Routes>
            {/*aqui ya van las rutas con el componente que queremos que cargue  */}
            <Route path="/" element={<MainPage />} />
            <Route path="/movies/:id" element={<SingleMovie />} />
     </Routes>
     </BrowserRouter>
    
    </div>


  )
}

export default App
