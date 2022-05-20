
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Header } from '../components/Header'

// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/slider.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>  
      <Header />    
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp