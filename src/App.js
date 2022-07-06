import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import './assets/scss/main.scss'
const Home = lazy(() => import('./pages/home'));
const Product = lazy(() => import('./pages/product'));

function App() {
  return (
    <Router >
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home/>} />
            <Route path={ROUTES.PRODUCT} element={<Product/>} />
          </Routes>
        </Suspense>
    </Router>
  );
}

export default App;
