import { Flex, Heading, Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Slider = dynamic(() => import ('../components/Slider'), {ssr: false});
const HomeBody = dynamic(() => import ('./Home'), {ssr: false});

import { createServer, Model } from 'miragejs';

async function createFakeData() {
  await createServer({
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
            backgroundImage: '',
            description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
            cities: [
              {
                city: 'Londres',
                country: 'Reino Unido',
                image: '',
                flag: ''
              },
            ]          
          },
          {
            id: 2,
            name: 'África',
            slug: 'africa',
            backgroundImage: '',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            cities: [
              {
                city: 'Lagos',
                country: 'Nigéria',
                image: '',
                flag: ''
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
  
        return this.schema.find(slug, 'continent');
      })
    }
  })
}

createFakeData();

export default function Home() {

  // useEffect(() => {
  //   async function loadData() {
  //     await fetch('http://localhost:3000/api/continents')
  //       .then(response => response.json())
  //       .then(data => console.log(data));
  //   }
  //     loadData()
  //   }, []);


  return (
    <>
      <HomeBody />
      <Flex alignItems="center" justify="center" mb="14">
        <Box w={["10", "20"]} borderBottomWidth='2px' borderColor='gray.700'></Box>
      </Flex>
      <Flex justify="center" align="center" mb="14">
        <Heading as='h1' line-height="none" textAlign="center" fontSize={['md', '4xl']} fontWeight={500} color="gray.700">
          Vamos nessa?<br />Então escolha seu continente
        </Heading>
      </Flex>
      <Slider />
    </>
  )
}