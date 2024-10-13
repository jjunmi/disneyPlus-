import "./MovieModal.css"
import { useRef } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const MovieModal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen
}) => {

  const ref = useRef();

  useOnClickOutside(ref,() =>{
    setModalOpen(false);
  });

  return (
    <div className="presentation" role="presentation">
      <div className="modal-wrapper">
        <div className="modal" ref={ref}>
          <button
            className="modal-close"
            onClick={() => {
              setModalOpen(false)
              document.body.style.overflowY = 'scroll';
            }}
          >X</button>
          <img 
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt={`${title}-poster-image`}
          />
          <div className="modal__content">
            <p className="modal__detail">{release_date ? release_date : first_air_date}
            </p>
            <h3 className="modal__title">{title ? title : name}</h3>
            <p className="modal__average">평점: {vote_average}</p>
            <p className="modal__overview">{overview}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieModal;
