import styled from "styled-components";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Row from "../components/Row";
import requests from "../api/request";

const Main = () => {
  return (
    <Container>
      <Banner />
      <Category />
      <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending}/>
      <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated}/>
      <Row title="Comedy Movies" id="CM" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Documentaries" id="DOCU" fetchUrl={requests.fetchDocumentaries}/>
    </Container>
  )
}

export default Main;

const Container = styled.main`
  position: relative;
  overflow-x: hidden;
  min-height: calc(100vh - 250px);
  padding: 0 calc(3.5vw + 5px);
  padding-bottom: 50px;
  margin-top: 85px;
  background: url("./images/home-background.png") center center /cover no-repeat fixed;
  @media screen and (max-width: 1280px) {
    margin-top: 70px;
  }
`;
