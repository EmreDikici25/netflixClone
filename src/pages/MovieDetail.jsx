import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchByUrl } from "../app/actions/movieActions";
import { baseImgUrl } from "../components/Hero";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    // Film in detay verisini çek
    fetchByUrl(`/movie/${movieId}`).then((res) => setMovieDetail(res));
  }, []);
  if (movieDetail === null) return "Loading...";
  return (
    <div className="movie-detail row bg-black text-light p-5">
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <img
          className="img-fluid detail-img"
          src={`${baseImgUrl}${movieDetail.poster_path}`}
        />
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center">
        <h1>{movieDetail.title}</h1>
        <p>{movieDetail.overview}</p>
        <div className="row row-cols-2">
          <div>
            <p>Maliyet : {movieDetail.budget} $ </p>
            <p>Hasılat : {movieDetail.revenue} $ </p>
            <p>Kar : {movieDetail.revenue - movieDetail.budget} $ </p>
          </div>
          <div>
            <div className="d-flex gap-2">
              Karetoriler:
              {movieDetail.genres.map((genre) => (
                <p className="badge bg-secondary">{genre.name}</p>
              ))}
            </div>
            <div className="d-flex flex-wrap gap-2">
              Diller:
              {movieDetail.spoken_languages.map((lang) => (
                <p className="badge bg-danger">{lang.name}</p>
              ))}
            </div>
            <div className="d-flex flex-wrap gap-2">
              Yapımcılar:
              {movieDetail.production_companies.map((comp) => (
                <p className="badge bg-warning">{comp.name}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
