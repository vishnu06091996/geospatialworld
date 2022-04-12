import React, {Component, useEffect} from 'react';
import './App.css'
import Layout from './Component/Layout'


	

function App() {
  useEffect(() =>{
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="App">
	  	<Layout />
	</div>
  );
}

export default App;
