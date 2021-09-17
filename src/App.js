import './App.css';
import Main from './Pages/main/Main';
import { Content } from './Components/Content';
import { Service } from './Components/Service';
import { About } from './Components/About';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';

function App() {
  return (
    <>
      <Main/>
      <Content />
      <Service />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
