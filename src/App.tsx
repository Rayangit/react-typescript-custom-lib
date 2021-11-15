import React from 'react'

import logo from './logo.svg'

import './App.css'
import {Text} from './src/components/atoms'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          alt="logo"
          className="App-logo"
          src={logo} />
        <Text variant="t5">Salut !</Text>
        <a
          className="App-link"
          href="https://reactjs.org"
          rel="noopener noreferrer"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
