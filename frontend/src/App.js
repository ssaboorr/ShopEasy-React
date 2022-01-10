import { ChakraProvider, Heading } from "@chakra-ui/react";
import Header from './components/Header'
import Footer from './components/Footer'


const App = () => {
  return (
    <ChakraProvider>
     <Header/>
     <div style={{height:'500px'}}></div>
     <Footer/>
    </ChakraProvider>
  );
};

export default App;
