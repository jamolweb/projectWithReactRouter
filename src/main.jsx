import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from "./pages/Layout";
import App from './pages/page1/App.jsx'
import Page2 from "./pages/page2";
import { Box, ChakraProvider } from '@chakra-ui/react'
import Routers from "./routes/Routes.jsx";

export default function Main() {
  return (

    <ChakraProvider>
      <Box
        w={{ base: '98%', md: '95%', xl: '93%', '2xl': '90%' }}
        m={'0 auto'}>
        <BrowserRouter>

          <Routers />
        </BrowserRouter>
      </Box>
    </ChakraProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);