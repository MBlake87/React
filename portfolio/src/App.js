import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { Nav } from "./components/Nav";
import { ChakraProvider } from "@chakra-ui/react";
import { Helmet } from "react-helmet";

function App() {
  return (
    <>
      <ChakraProvider>
        <Nav />
        <div className="min-h-screen max-w-full overflow-hidden bg-background">
          <Helmet>
            <title>Mark Blake | Web Developer</title>
          </Helmet>
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
