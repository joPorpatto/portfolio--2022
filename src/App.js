
import Header from './components/header/Header';
import { About } from './components/about/About';
import { Works } from './components/works/Works';
import { Footer } from './components/footer/Footer';
import { Nav } from './components/nav/Nav';
import { Contact } from './components/contact/Contact';
import { Experience } from './components/experience/Experience';

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Works/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default App;
