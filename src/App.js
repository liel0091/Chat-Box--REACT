import React from 'react'; 
import Header from './components/Header';
import Dashboard from './components/Dashboard'
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="App" variant="light">
      <Header/>
      <Dashboard/>
      <Footer/>  
    </div>
  );
}

export default App;
