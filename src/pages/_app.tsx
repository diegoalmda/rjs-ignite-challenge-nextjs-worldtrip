
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
          backgroundImage: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2972',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          cities: [
            {
              city: 'Lagos',
              country: 'Nigéria',
              image: 'https://images.unsplash.com/photo-1559897752-11f80cef5173?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176',
              flag: 'https://simg.nicepng.com/png/small/302-3027340_teamlogo-nigeria-flag-circle-png.png',
            },            
          ]          
        },
        {
          id: 3,
          name: 'Ásia',
          slug: 'asia',
          backgroundImage: 'https://images.unsplash.com/photo-1574236170878-f66e35f83207?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          cities: [
            {
              city: 'Hong Kong',
              country: 'China',
              image: 'https://images.unsplash.com/photo-1507904309054-5d475df55c14?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1136',
              flag: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/Circle_Flag_of_the_People%27s_Republic_of_China.svg',
            },
          ]          
        },
        {
          id: 4,
          name: 'América do Sul',
          slug: 'sulamerica',
          backgroundImage: 'https://images.unsplash.com/photo-1619546952812-520e98064a52?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          cities: [
            {
              city: 'Rio de Janeiro',
              country: 'Brasil',
              image: 'https://images.unsplash.com/photo-1627697296296-18810d90f298?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162',
              flag: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Brazilian_Flag_-_round.svg',
            },
          ]          
        },
        {
          id: 5,
          name: 'América do Norte',
          slug: 'norteamerica',
          backgroundImage: 'https://images.unsplash.com/photo-1546083381-2bed38b42cac?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          cities: [
            {
              city: 'Washington',
              country: 'Estados Unidos',
              image: 'https://images.unsplash.com/photo-1616697158585-b815801afeb9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092',
              flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/1024px-United-states_flag_icon_round.svg.png',
            },
          ]          
        },
        {
          id: 6,
          name: 'Oceania',
          slug: 'oceania',
          backgroundImage: 'https://images.unsplash.com/photo-1622732718352-d4c89c582f7c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1788',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          cities: [
            {
              city: 'Sidny',
              country: 'Austrália',
              image: 'https://images.unsplash.com/photo-1552826768-0638caedbd75?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160',
              flag: 'https://markblasdale.com/wp-content/uploads/2018/09/Australia-Flag-Round-PNG.png',
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