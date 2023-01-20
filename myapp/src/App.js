import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Footer } from './components/footer/footer';
import { Login } from './components/login/login';
import { Navbar } from './components/navbar/Navbar';
import { SignUp } from './components/signUp/signUp';
import { FetchMovies } from './components/TvShows/Fetch';
import { SearchedMovies } from './components/TvShows/searchMovie';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<FetchMovies/>}/>
        <Route path="/search" element={<SearchedMovies/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
