import "./App.scss"
//importing components
import Header from "./Components/Header/Header";
//importing pages
import HomePage from "./pages/HomePage/HomePage";
import CreatersPage from "./pages/CreatersPage/CreatersPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
//importing other important stuff
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

function App() {
  return (
  <>
    <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />}></Route>
        <Route path='/home' element={<HomePage />}></Route> 
        <Route path='/creaters' element={<CreatersPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
     </div>
    </BrowserRouter>
  </>
  );
}

export default App;
