import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { register } from 'swiper/element/bundle'
register();
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/scrollbar'
import 'swiper/css/effect-creative';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
