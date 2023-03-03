import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { SegundosAHoras } from './Components../PrimerPunto/SegundosAHoras'
import { GifGrid } from './components/GifGrid'
import { Punto2 } from './components/Punto2'
import { TecerPunto } from './components/TecerPunto'
import { CuartoPunto } from './components/CuartoPunto'
import { QuintoPunto } from './components/QuintoPunto'
import { SextoPunto } from './components/SextoPunto'
import { SeptimoPunto } from './components/SeptimoPunto'
import { OctavoPunto } from './components/OctavoPunto'
import { NovenoPunto } from './components/NovenoPunto'
import { DecimoPunto } from './components/DecimoPunto'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <SegundosAHoras/>
    <GifGrid/>
    <Punto2/>
    <TecerPunto/>
    <CuartoPunto/>
    <QuintoPunto/>
    <SextoPunto/>
    <SeptimoPunto/>
    <OctavoPunto/>
    <NovenoPunto/>
    <DecimoPunto/>
    <App/>

  </React.StrictMode>,
)
