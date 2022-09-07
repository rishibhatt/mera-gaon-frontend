import './App.css';
import Cards from './components/Content/Cards';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Navbar from './components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Content />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
