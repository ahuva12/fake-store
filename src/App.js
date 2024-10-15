import './App.css';
import { Header, Category, ProductsPage } from './components';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (

    <>
      <Header />
      <nav>
        <Link to="/electronics">electronics</Link>
        <Link to="/jewlery ">jewlery</Link>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/electronics" element={<ProductsPage />} />
        <Route path="/jewlery" element={<ProductsPage />} />
      </Routes>

      <Category 
          nameCategory="electronics" 
          img="./images/electronics.jpg" />
      <Category 
          nameCategory="jewlery" 
          img="./images/jewlery.jpg" />
    </>
  );
}

export default App;
