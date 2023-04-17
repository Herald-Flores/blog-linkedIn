import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import ArticlesListPage from './pages/ArticlesListPage/ArticlesListPage'
import ArticlePage from './pages/ArticlePage/ArticlePage'
import NavBar from './Components/NavBar/NavBar'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about-us' element={<AboutPage />} />
        <Route path='/blog' element={<ArticlesListPage />} />
        <Route path='article/:articleId' element={<ArticlePage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
