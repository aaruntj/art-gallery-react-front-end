import "./App.scss"
//importing components
import Header from "./Components/Header/Header";
//importing pages
import HomePage from "./pages/HomePage/HomePage";
import CreatorsPage from "./pages/CreatorsPage/CreatorsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
//importing other important stuff
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<HomePage />} /> 
        <Route path='/creators' element={<CreatorsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
     </div>
    </BrowserRouter>
  );
}

export default App;
