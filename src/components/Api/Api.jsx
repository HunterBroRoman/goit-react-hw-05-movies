import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const KEY = '8a7300a64d51a4763298450a1c448d8d';

export const getFetchTrending = async () => {
    const response = await axios('/trending/movie/day', {
        params: {
          api_key: KEY,
        },
      });
    
      return response.data.results;
    }; //запрос на фильм дня


    export const getFetchSearchMovies = async query => {
        const response = await axios('/search/movie', {
          params: {
            api_key: KEY,
            include_adult: false,
            query,
          },
        });
      
        return response.data.results;
      }; // запрос на поиск фильма
      
      export const getFetchMovieDetails = async movieId => {
        const response = await axios(`/movie/${movieId}`, {
          params: {
            api_key: KEY,
          },
        });
      
        return response.data;
      }; // запрос на полную информацию о фильме
      
      export const getFetchMovieCast = async movieId => {
        const response = await axios(`/movie/${movieId}/credits`, {
          params: {
            api_key: KEY,
          },
        });
      
        return response.data;
      }; // запрос на актерский состав фильма
      
      export const getFetchMovieReviews = async movieId => {
        const response = await axios(`/movie/${movieId}/reviews`, {
          params: {
            api_key: KEY,
          },
        });
      
        return response.data;
      };// запрос на отзывы по фильму
