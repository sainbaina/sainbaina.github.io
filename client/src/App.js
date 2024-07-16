import {React, useState} from 'react'
import './styles/App.css'
import Header from './components/header/Header';
import MainScreen from './components/mainScreen/MainScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ArticleDetail from './components/article/ArticleDetail';
import articles from "./data/articles.json"

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<MainScreen articles={articles}/>}/>
        <Route path="/article/:id" element={<ArticleDetail articles={articles}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
