import React from 'react';
//import './assets/styles/global.css';
import a from './app.module.css';
import HeaderLine from './components/Header/HeaderLine';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Slide from './components/Slide/Slide';
import Catalog from './components/Catalog/Catalog';
//import Body from './components/Body/Body';

function App() {
  return (
    <div className="app">
      <HeaderLine/>
      <div className={a.line}></div>
      <Header />
      <div className={a.line}></div>
      <Intro />
      <Slide />
      <Catalog />
    </div>
  );
}

export default App;
