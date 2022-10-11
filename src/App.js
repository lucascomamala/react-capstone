/* eslint-disable */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from './redux/mainSlice';
import Navbar from './components/NavBar';
import HomePage from './components/home/Home';
import ChampionPage from './components/champion/ChampionPage';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.main);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/champion" element={<ChampionPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
