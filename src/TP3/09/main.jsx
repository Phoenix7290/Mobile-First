import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home/'
import Servicos from './Pages/Servicos'
import Descricao from './Pages/Descricao'
import Produtos from './Pages/Produtos'
import Contato from './Pages/Contato'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <Servicos />
    <Descricao />
    <Produtos />
    <Contato />
  </React.StrictMode>,
)
