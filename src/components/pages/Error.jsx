import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <b style={{ fontSize: 64, color: 'red' }}>404</b>
        <p>Sorry, we couldn't find that page :(</p>
      </div>
      <Link to="/">Go to Home</Link>
    </>
  );
};

export default Error;
