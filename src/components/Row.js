import './Row.css';
import MovieModal from './MovieModal';
import { useCallback, useEffect, useState } from "react";
import axios from '../api/axios';

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Row = ({ title, id, fetchUrl }) => {

  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  const fetchMovieData = useCallback( async() => {
    const response = await axios.get(fetchUrl);
    setMovies(response.data.results);
  }, [fetchUrl]);

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData])

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
    document.body.style.overflowY = 'hidden';
  }

  return (
    <section className="row-section">
      <h2 className="slider__title">{title}</h2>
      <Swiper
        // install Swiper modules
        spaceBetween={20}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={false}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          1378: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          0: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          }
        }}
      >
        <div id={id} className="row__posters">
          {movies.map(movie => (
            <SwiperSlide key={movie.id}>
              <div className="row__poster-wrap">
                <img 
                  className="row__poster"
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.name}
                  onClick={() => {
                    handleClick(movie)
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      {modalOpen &&
        <MovieModal setModalOpen={setModalOpen} {...movieSelected}/>
      }
    </section>
  )
}

export default Row;
