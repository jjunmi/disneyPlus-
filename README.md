# React-disneyplus
```bash
    npx create-react-app ./
    npm install react-router-dom
    npm install axios --save
    npm install styled-components
```

## themoviedb
- [themoviedb] (https://www.themoviedb.org/)
- api_key
- https://api.themoviedb.org/3/movie/550?api_key=<<api_key>>
- [themoviedbAPI](https://developer.themoviedb.org/reference/intro/getting-started)

### Get Movie By Latest
- https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
### Get Movie Detail
- https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
- https://developer.themoviedb.org/docs/append-to-response
### Get Movie Reviews
- https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
### Get Trending
- https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
### Get Images
- https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg
- https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
- https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
- https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png

## Axios
- Axios는 브라우저, Node.js를 위한 Promise API를 활용하는 HTTP 비동기 통신 라이브러리입니다.
- 백엔드와 프론트엔드랑 통신을 쉽게하기 위해 Ajax와 더불어 사용합니다.
- npm i axios --save
- axio.get("")
- axio.post("")
- api > axios.js
```javascript
    import axios from 'axios';

    const instance = axios.create({
        baseURL: "https://api.themoviedb.org/3",
        params: {
            api_key: "527165adba5e5b0d5981a65060b8b863",
            language: "ko-KR"
        }
    })
    export default instance;
```
- api > request.js
```javascript
    const requests = {
        fetchNowPlaying: "movie/now_playing",
        fetchTrending: "/trending/all/week",
        fetchTopRated: "/movie/top_rated",
        fetchActionMovies: "/discover/movie?with_genres=28",
        fetchComedyMovies: "/discover/movie?with_genres=35",
        fetchHorrorMovies: "/discover/movie?with_genres=27",
        fetchRomanceMovies: "/discover/movie?with_genres=10749",
        fetchDocumentaries: "/discover/movie?with_genres=99",
    }
    export default requests;
```
## styled-components
- npm install --save styled-components
- [styled-components](https://styled-components.com/)