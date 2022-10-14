import React, { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getChampions } from './redux/HomeSlice';
import Navbar from './components/NavBar';
import HomePage from './components/home/Home';
import ChampionPage from './components/champion/ChampionPage';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const got = useRef(false);

  useEffect(() => {
    if (!got.current) {
      dispatch(getChampions());
      got.current = true;
    }
  });

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
