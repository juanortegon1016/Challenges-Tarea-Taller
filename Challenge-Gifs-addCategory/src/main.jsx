import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
//import FistApp from './FirstApp'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <AddCategory/>
    <GifGrid/>

  </React.StrictMode>,
)
