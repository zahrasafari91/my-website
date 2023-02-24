import logo from './logo.svg';
import './App.css';
import Sidebar from './componets/sidebar/Sidebar';
import Home from './componets/home/Home';
import About from './componets/about/About';
import Resume from './componets/resume/Resume';
// import Portfolio from './componets/portfolio/Portfolio';
// import Services from './componets/services/Services';
import Contact from './componets/contact/Contact';

function App() {
  return (
    <>
    <Sidebar />
    <main className='main'>
      <Home />
      <About />
      {/* <Services /> */}
      <Resume />
      {/* <Portfolio />  */}
      <Contact />
    </main>
    </>

  );
}

export default App;
