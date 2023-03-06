import { Routes, Route } from 'react-router-dom';
import Home from 'components/pages/Home';
import Error from 'components/pages/Error';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> }></Route>
      <Route path="*" element={ <Error /> }></Route>
    </Routes>
  );
}

export default App;
