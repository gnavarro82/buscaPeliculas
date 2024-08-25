import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const SingleMovie = () => {
  //recuperamos del path o url el id
  const { id } = useParams();
  //pasamos  ese id a la funcion el id para que devuelva los daatos
  //recordar que es un objeto
  const { isLoading, error, data } = useFetch(`&i=${id}`);

  //muestra una animacion de cargando
  if (isLoading) {
    return <div className="loading"></div>;
  }

  //destructuracion del data
  //si isLoading es false renderiza e img
  const { Poster, Title, Plot, Year, Country, Director, Released, Runtime } = data;
  //si no hay una imagen se mostrara la imagen por defecto
  let image = Poster === "N/A" ? DefaultImage : Poster;


  return !isLoading ? (
    <div className="single-movie">
      <img src={image} alt={Title} />
      <div className="single-info">
        <h2>{Title}</h2>
        <p> {Plot}</p>
        <p>
          <strong>Pais: </strong>
          {Country}
        </p>
        <p>
          <strong>Director: </strong>
          {Director}
        </p>
        <p>
          <strong>Lanzamiento: </strong>
          {Released}
        </p>
        <p>
          <strong>Duracion: </strong>
          {Runtime}
        </p>
        <p>
          <strong>Año: </strong>
          {Year}
        </p>
      </div>
    </div>
  ) : (
    ""
  );
};

export default SingleMovie;
