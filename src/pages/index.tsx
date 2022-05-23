import { Flex, Heading, Box } from '@chakra-ui/react';
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import ('../components/Slider'), {ssr: false});
const HomeBody = dynamic(() => import ('./Home'), {ssr: false});

export default function Home() {

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