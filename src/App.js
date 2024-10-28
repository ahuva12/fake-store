import './App.css';
import { Header, Category, ProductsPage } from './components';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <nav className='nav'>
        <Link className='link' to="/electronics">electronics</Link>
        <Link className='link' to="/jewlery">jewlery</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className='container-categories'>
                <Category 
                    nameCategory="electronics" 
                    img="/images/electronics.jpg" />
                <Category 
                    nameCategory="jewlery" 
                    img="/images/jewlery.jpg" />
              </div>
            </>
          }
        />
        <Route path="/electronics" element={<ProductsPage categoryPruducts='electronics' />} />
        <Route path="/jewlery" element={<ProductsPage categoryPruducts='jewelery' />} />
      </Routes>
    </>
  );
}

export default App;

