import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FirstPage from './First_page/First.jsx';
import Vxod3 from './Vxod/vxod1.jsx';
import Registr3 from './Registr/Registr1.jsx'


function App() {
  return (
 <div >
  <Routes>
 <Route path="/" element={<FirstPage />} />
 <Route path="/login" element={<Vxod3 />} />
 <Route path="/register" element={<Registr3/>}/>

  </Routes>
 </div>



  )
}

export default App;
