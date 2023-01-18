import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/login/login';
import { Navbar } from './components/navbar/Navbar';
import { FetchMovies } from './components/TvShows/Fetch';
import { SearchedMovies } from './components/TvShows/searchMovie';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<FetchMovies/>}/>
        <Route path="/search" element={<SearchedMovies/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
