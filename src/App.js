import React, { useState } from 'react';
import './App.css';
import ReverseText from './components/Wordtocode';
import CodeToWord from './components/Codetoword';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [isReverseTextVisible, setIsReverseTextVisible] = useState(true);

  const toggleComponent = (isReverseVisible) => {
    setIsReverseTextVisible(isReverseVisible);
  };

  return (
    <>
      <header>
        <Header toggleComponent={toggleComponent} />
        </header>
      <main className="App">
        {isReverseTextVisible ? <ReverseText /> : <CodeToWord />}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
