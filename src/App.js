import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import FirstPage from './First_page/First.jsx';
import Vxod3 from './Vxod/vxod1.jsx';
import Registr3 from './Registr/Registr1.jsx'
import Home from './Home_Page/Home1.jsx'
import ProtectedRoute from './Protected.jsx'
import Prof from './Profil/Profil1.jsx'
import Catal from './Catalog/Catalog1.jsx';
import MoviePage from './Components/MoviePage.jsx';
import ABout from './About/About1.jsx';
import News from './News1/News2.jsx';


function App() {
  
  return (
 <div>
  <Routes>
 <Route path="/" element={<FirstPage />} />
 <Route path="/login" element={<Vxod3 />} />
 <Route path="/register" element={<Registr3/>}/>
 <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
  <Route path="/profil" element={<Prof/>}/>
  <Route path="/catalog" element={<Catal/>}/>
  <Route path="/movies/:movieId" element={<MoviePage />} />
  <Route path="/about" element={<ABout/>}/>
  <Route path="/news" element={<News/>}/>
  </Routes>
 </div>



  )
}

export default App;
