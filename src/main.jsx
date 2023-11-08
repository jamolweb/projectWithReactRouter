import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Layout from "./pages/Layout";
import App from './pages/page1/App.jsx'
import Page2 from "./pages/page2/page2.jsx";
import { Box, ChakraProvider } from '@chakra-ui/react'
import Routers from "./routes/Routes.jsx";

export default function Main() {
  return (

    <ChakraProvider>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
    </ChakraProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);