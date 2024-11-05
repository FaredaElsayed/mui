import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './Pages/Root/Root';
import Home from './Pages/Home/Home';
import Create from './Pages/Create/Create';


function App() {

  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route index element={<Home />} />
            <Route path="create" element={<Create />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
