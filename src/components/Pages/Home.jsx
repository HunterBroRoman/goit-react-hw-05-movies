import { HeaderNav } from 'components/Header/HeaderNav/HeaderNav.jsx';
import { useEffect, useState } from 'react';
import { getFetchTrending } from 'components/Api/Api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getFetchTrending().then(({ data }) => {
      setMovies(data.);
    });
  }, []);

  return (
    <>
      <HeaderNav />
      {movies.map(movie => <div key={movie.id}>{movies.title}</div>)}
    </>
  );
};

export default Home;
