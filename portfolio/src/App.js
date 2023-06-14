
import './App.css';
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Projects } from "./pages/Projects"
import { Contact } from "./pages/Contact"
import { Nav } from './components/Nav';
import { Route, Routes } from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <>
      <ChakraProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ChakraProvider>


    </>
  );
}

export default App;
