import axios from "../api/axios";
import request from "../api/request";
import { useEffect, useState } from "react";
import "./Banner.css";
import styled from "styled-components";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    //현재 상영중인 영화들 정보를 가져오기
    const response = await axios.get(request.fetchNowPlaying);
    //현재 상영중인 영화들중 랜덤으로 영화 하나의 ID를 가져오기
    const movieId = response.data.results[
      Math.floor(Math.random() * response.data.results.length)
    ].id;
    //랜덤으로 가져온 영화의 더 상세한 정보를 가져오기 (비디오 정보도 포함)
    const { data: movieDetail } = await axios.get(`movie/${movieId}`, {params: { append_to_response: "videos" }});

    setMovie(movieDetail);
  }

  const truncate = (str, n) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  }
  if(isClicked){
    return (
      <>
        <VideoWrapper>
          <VideoContainer>
            <Iframe
            src={`https://www.youtube.com/embed/${movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0].key}`}
            width="640" height="360"
            frameborder="0"
            allow="autoplay; fullscreen"
            ></Iframe>
          </VideoContainer>
        </VideoWrapper>
        <CloseButton onClick={() => setIsClicked(false)}>X</CloseButton>
      </>
    )
  }else{
    return (
      <section className="banner" 
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover"
        }}
      >
        <div className="banner__contents">
          <h2 className="banner__title">
            {movie.title || movie.name || movie.original_name}
          </h2>
          <div className="banner__buttons">
            {movie?.videos?.results[0]?.key &&
              <button className="banner__button play" onClick={() => setIsClicked(true)}>
                Play
              </button>
            }
          </div>
          <p className="banner__description">
            {truncate(movie.overview, 150)}
          </p>
        </div>
        <div className="banner--fadeBottom"/>
      </section>
    )
  }
}

export default Banner;

const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
const VideoContainer = styled.div`
  width: 100%;
  height: 100%;
`;
const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: 9;
  opacity: 0.65;
  border: none;
`;
const CloseButton = styled.button`
  padding: 6px 20px;
  font-size: 18px;
  background-color: #fff;
  border-radius: 0 0 5px 5px;
`;