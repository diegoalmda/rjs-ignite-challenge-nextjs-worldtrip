
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'
import { Header } from '../components/Header'

// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/slider.css';

import { createServer, Model } from 'miragejs';

createServer({
  models: {
    continent: Model,
  },

  seeds(server) {
    server.db.loadData({
      continents: [
        {
          id: 1,
          name: 'Europa',
          slug: 'europa',
          backgroundImage: '/images/europa/back.png',
          description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
          cities: [
            {
              city: 'Londres',
              country: 'Reino Unido',
              image: '/images/europa/paises/londres.png',
              flag: '/images/europa/paises/londres_flag.png',
            },
            {
              city: 'Paris',
              country: 'França',
              image: '/images/europa/paises/paris.png',
              flag: '/images/europa/paises/paris_flag.png',
            },
            {
              city: 'Roma',
              country: 'Itália',
              image: '/images/europa/paises/roma.png',
              flag: '/images/europa/paises/roma_flag.png',
            },
            {
              city: 'Praga',
              country: 'República Tcheca',
              image: '/images/europa/paises/praga.png',
              flag: '/images/europa/paises/praga_flag.png',
            },
            {
              city: 'Amsterdã',
              country: 'Holanda',
              image: '/images/europa/paises/amsterda.png',
              flag: '/images/europa/paises/amsterda_flag.png',
            },
          ]          
        },
        {
          id: 2,
          name: 'África',
          slug: 'africa',
          backgroundImage: '/images/europa/back.png',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          cities: [
            {
              city: 'Lagos',
              country: 'Nigéria',
              image: '/images/europa/paises/paris.png',
              flag: '/images/europa/paises/paris_flag.png',
            },
            {
              city: 'Paris',
              country: 'França',
              image: '/images/europa/paises/paris.png',
              flag: '/images/europa/paises/paris_flag.png',
            },
            {
              city: 'Roma',
              country: 'Itália',
              image: '/images/europa/paises/roma.png',
              flag: '/images/europa/paises/roma_flag.png',
            },
            {
              city: 'Praga',
              country: 'República Tcheca',
              image: '/images/europa/paises/praga.png',
              flag: '/images/europa/paises/praga_flag.png',
            },
            {
              city: 'Amsterdã',
              country: 'Holanda',
              image: '/images/europa/paises/amsterda.png',
              flag: '/images/europa/paises/amsterda_flag.png',
            },
          ]          
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/continents', () => {
      return this.schema.all('continent')
    });

    this.get('continents/:slug', (schema, request) => {
      const slug = request.params.slug;
      // const data = JSON.parse(request.requestBody)
      console.log("SLUG: ", slug)

      return schema.db.continents.findBy({ slug: slug });
    })

    // this.get('continents/:id', (schema, request) => {
    //   const id = request.params.id;
    //   // const data = JSON.parse(request.requestBody)

    //   return schema.db.continents.find(id);
    // })

    //Reseta o namespace para vazio após as rotas
    this.namespace = '';

    // Adiciona o passthrough para ignorar rotas que não existem no mirage
    this.passthrough()
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>  
      <Header />    
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp