import './App.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';


import HomePage from './pages/HomePage';

import Courses from './components/Courses/Courses';

import Navbar from './components/Navbar/Navbar';

import SingleCoursePage from './pages/SingleCoursePage/SingleCoursePage';
import Footer from './components/Footer/Footer';

import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Favorites from './components/Favorites/Favorites';
import SearchBar from './components/SearchBar/SearchBar';
import CartItem from './components/CartItem/CartItem';
import CartPage from './pages/CartPage/CartPage';



function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path='/register' element = {<Register />} />
        <Route path='/login' element = {<Login />}/>
        <Route path = "/courses/:id" element = {<SingleCoursePage />} />
        <Route path = "/category/:category" element = {<Courses />} />
        <Route path = "/cart" element = {<CartPage />} />
        <Route path="/liked" element={<Favorites />} />
        <Route path="/searched" element={<SearchBar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
