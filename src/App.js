import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import About from './components/About';
import ContactForm from './components/Contact';
import Resume from './components/Resume';

function App() {




  return (
    <div>
      <main>
        <Header></Header>
        <About></About>
        
        <Portfolio></Portfolio>
        <Resume></Resume>
        <ContactForm></ContactForm>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
