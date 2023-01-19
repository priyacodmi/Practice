import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/login/login';
import { Navbar } from './components/navbar/Navbar';
import { SignUp } from './components/signUp/signUp';
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
        <Route path='/register' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;
