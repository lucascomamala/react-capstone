/* eslint-disable */
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getChampions } from './redux/HomeSlice';
import Navbar from './components/NavBar';
import HomePage from './components/home/Home';
import ChampionPage from './components/champion/ChampionPage';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.champions);
  let got = false;

  useEffect(() => {
    if (!got) {
      dispatch(getChampions());
      got = true;
    }
  }, [got]);

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
