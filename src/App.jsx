import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// css inport
import './App.css';

// components import
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Movies from './Pages/Movies/Movies';
import TVShows from './Pages/TVShows/TVShows';
import LiveTV from './Pages/LiveTV/LiveTV';
import AllMovies from './Components/AllMovies/AllMovies';
import AllTvShow from './Components/AllTvShow/AllTvShow';
import MovieDetails from './Components/MovieDetails/MovieDetails';
import TvDetails from './Components/TvDetails/TvDetails';
import Searchbar from './Components/Searchbar/Searchbar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movie/:id' element={<MovieDetails />} />
          <Route path='/tvShows' element={<TVShows />} />
          <Route path='/tv/:id' element={<TvDetails />} />
          <Route path='/liveTv' element={<LiveTV />} />
          <Route path='/movies/allMovies' element={<AllMovies />} />
          <Route path='/tvShows/allTvShow' element={<AllTvShow />} />
          <Route path='/searchbar' element={<Searchbar />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App