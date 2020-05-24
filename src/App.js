import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Header />

      <Home />

      <Footer />
    </>
  );
}
