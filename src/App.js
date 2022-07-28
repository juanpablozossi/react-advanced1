import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Home } from './pages/Home';
import { Button } from './components/Button';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='button' element={<Button />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
