import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import './App.css';
import './components/TextField.css';
import './views/TablaProductosFinancieros.css';
import './views/FormularioProductoFinanciero.css';
import { ProductosFinancierosApp } from './ProductosFinancierosApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductosFinancierosApp />
    </BrowserRouter>
  </React.StrictMode>
);
