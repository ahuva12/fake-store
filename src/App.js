import './App.css';
import { Header, Category, ProductsPage } from './components';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <nav className='nav'>
        <Link className='link' to="/electronics">Electronics</Link>
        <Link className='link' to="/jewlery">Jewlery</Link>
        <Link className='link' to="/books">Books</Link>
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
                <Category 
                    nameCategory="books" 
                    img="/images/books.jpg" />
              </div>
            </>
          }
        />
        <Route path="/electronics" element={<ProductsPage categoryPruducts='electronics' />} />
        <Route path="/jewlery" element={<ProductsPage categoryPruducts='jewelery' />} />
        <Route path="/books" element={<ProductsPage categoryPruducts='books' />} />
      </Routes>
    </>
  );
}

export default App;

