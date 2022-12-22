import React from 'react';
import {auth, db} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'

import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"

import PagesRoutes from './Routes';

import "./App.css"

function App() {
  const [isLoged] = useAuthState(auth)

  return (
    <PagesRoutes auth={auth} db={db} isloged={isLoged} />
  )
}

export default App
