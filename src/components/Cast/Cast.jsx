import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as api from 'services/api';
import { CastStyled, Photo } from 'components/Cast/CastStyled';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    api.getMovieCredits(movieId).then(setCredits);
  }, [movieId]);

  return (
    <ul>
      {credits.length > 0 &&
        credits.map(({ id, name, character, photo }) => {
          return (
            <CastStyled key={id}>
              <Photo src={photo} alt={name} />
              <h4>{name}</h4>
              <p>Character: {character}</p>
            </CastStyled>//карточка с фото актера
          );
        })}
    </ul>
  );
};

export default Cast;
