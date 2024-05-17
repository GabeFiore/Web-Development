import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function MovieDetails(){

    const {id} = useParams();
    const [filmes, setFilmes] = useState({})


    useEffect(() => {
          fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e`
          )
            .then(response => response.json())
            .then(response => setFilmes(response))
            .catch((err) => console.error(err));
      }, []);

    return (
        <>
        <h1>Página filme:</h1>
        <img src={`https://image.tmdb.org/t/p/w300/${filmes.poster_path}`}/>
        <p> {filmes.title} </p>
        </>
    );
}
export default MovieDetails;