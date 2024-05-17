import { useState, useEffect } from "react";
import MovieCard from "../Componentes/MovieCard/MovieCard";

function Filmes() {
  const [filmes, setFilmes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR&page=1"
      )
        .then(response => response.json())
        .then(response => setFilmes(response.results))
        .catch((err) => console.error(err));
    }, 3000);
  }, []);

  return(
    <>
      <h1>Filmes</h1>
      <div className="grid grid-cols-3">
        {filmes.map((filme,index) => (
            <MovieCard filme={filme} key={filme.id}/>
        ))}
      </div>
    </>
 )
}

export default Filmes;