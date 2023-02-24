/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Categories from './pages/Categories';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <Navbar />
      <div className="container_1">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
