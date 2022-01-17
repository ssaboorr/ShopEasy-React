import { ChakraProvider, Flex, Heading } from "@chakra-ui/react";
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'


const App = () => {
  return (
    <ChakraProvider>
     <Header/>
     <Flex as="main"
     mt="80px"
     minH='xl'
     p='6'
     bgColor='gray.200'
     
     >

       <HomeScreen/>
     </Flex>
     <Footer/>
    </ChakraProvider>
  );
};

export default App;
