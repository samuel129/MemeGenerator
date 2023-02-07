import React from 'react'
import styles from './styles.css'
import Header from './header.js'
import Generator from './generator.js'
import memesData from './memesData.js'
import MemeImg from './memeImg.js'

function App() {

  	return (
    <div className="App">
	  <Header/>
	  <Generator/>
    </div>
  );
}

export default App;
