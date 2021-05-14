import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
// import Project from '.components/Project';
function App() {




  return (
    <div>
      <main>
        <Header></Header>
        {/* <About></About> */}
        {/* <Project></Project> */}
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
