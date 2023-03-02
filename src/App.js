import React, { Suspense, useEffect, lazy } from 'react';
import { BrowserRouter } from "react-router-dom";
import "./App.scss"
import AOS from 'aos';
import "aos/dist/aos.css";
import Loading from './components/Loading';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";


const MainRoutes = lazy(() => import('./routes'));


function App() {
  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);

  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
