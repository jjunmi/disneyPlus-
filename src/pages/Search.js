import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../api/axios";
import useDebounce from "../hooks/useDebounce";
import "./Search.css";

const Search = () => {

  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const searchTerm = query.get("q"); 
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if(debouncedSearchTerm){
      fetchSearchMovie(debouncedSearchTerm);
    }else {
      navigate("/");
    }
  }, [debouncedSearchTerm, navigate])

  const fetchSearchMovie = async (searchTerm) => {
    try{
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResults(response.data.results);
    } catch (error){
      console.log(error);
    }
  }
  if(searchResults.length > 0){
    return(
      <section className="search-container">
        <div className="search-content">
          {
            searchResults.map((movie) => {
              if(movie.backdrop_path !== null && movie.media_type === "movie") {
                const movieImageUrl = "https://image.tmdb.org/t/p/w500"+movie.backdrop_path;
                return(
                  <div className="movie" key={movie.id}>
                    <div className="movie__column-poster">
                      <img 
                        className="movie__poster"
                        src={movieImageUrl}
                        alt="movie"
                      />
                    </div>
                  </div>
                )
              }
            })
          }
          </div>
      </section>
    )
  }else {
    return (
      <section className="no-results">
        <div className="no-results__text">
          <p><span className="highlight">"{searchTerm}"</span><br />검색어와 일치하는 내용이 없습니다.</p>
        </div>
      </section>
    )
  }
}

export default Search;
