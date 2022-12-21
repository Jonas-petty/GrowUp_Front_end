import React from 'react';
import {auth, db} from './firebase'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"

import PagesRoutes from './Routes';

import "./App.css"

function App() {
  return (
    <PagesRoutes />
  )
}

export default App
