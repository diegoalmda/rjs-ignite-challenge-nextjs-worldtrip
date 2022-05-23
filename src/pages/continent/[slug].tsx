import { Box, Flex, Heading, Icon, Text, Tooltip, Image, Grid, GridItem } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface ContinentProps {
  id: number;
  name: string;
  slug: string;
  backgroundImage: string;
  description: string;
  cities: {
    city: string;
    country: string;
    image: string;
    flag: string;
  }[];      
}

export default function Continent() {
  const [continent, setContinent] = useState<ContinentProps>({} as ContinentProps);
  const { asPath, push } = useRouter();

  const slug = asPath.split("/continent/")[1].toString();

  useEffect(() => {
    async function loadData() {
      //   const response = await api.get(`/continents`);
      //   console.log(response.data.continents)
      const response = await api.get(`/continents/${slug}`);
      const continentInfo = {...response.data};
      
      if(Object.keys(continentInfo).length !== 0) { 
        setContinent(continentInfo);
      } else {
        // push('/')
      }
    }
     loadData();
  }, [asPath]);

  if(Object.keys(continent).length !== 0) {
    return (
      <>
        <Head>
          <title>{continent.name} | WorldTrip</title>
        </Head>

        <Flex
          display="flex"
          justify="center"
          alignItems="center"
          bgImage={`url(${continent.backgroundImage})`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          object-fit="cover"
          h={[150, 300, 400, 500]}
          w="100%"
          position="relative"        
        >
          <Heading fontSize={["28", "48"]} color="gray.50" position="absolute" fontWeight={600} transform={["translate(-50%, -50%)", "translate(-50%, -50%)", "translate(-50%, -50%)", "none"]} top={["50%", "50%", "50%", "380"]} left={["50%", "50%", "50%", "140"]}>{continent.name}</Heading>
        </Flex>
        <Flex flexDir={["column", "column", "column", "column", "row"]}>
          <Box flex="1" m={["6", "6", "6", "20"]} ml={["6", "6", "6", "140"]}>
            <Text color="gray.700" fontWeight={400} fontSize={[14, 18, 20, 24]} textAlign="justify">{continent.description}</Text>
          </Box>
          <Flex flex="1" mr={[6, 6, 6, 20, 140]} ml={[6, 6, 6, 140, 0]} justify="space-between" alignItems="center">
            <Flex flexDir="column" justify="center" alignItems="center">
              <Heading fontWeight={600} color="yellow.300" fontSize={[18, 24, 28, 32, 48]}>50</Heading>
              <Text color="gray.700" fontWeight={600} fontSize={[14, 18, 20, 22, 24]}>países</Text>
            </Flex>
            <Flex flexDir="column" justify="center" alignItems="center">
              <Heading fontWeight={600} color="yellow.300" fontSize={[18, 24, 28, 32, 48]}>60</Heading>
              <Text color="gray.700" fontWeight={600} fontSize={[14, 18, 20, 22, 24]}>línguas</Text>
            </Flex>
            <Flex flexDir="column" justify="center" alignItems="center">
              <Heading fontWeight={600} color="yellow.300" fontSize={[18, 24, 28, 32, 48]}>27</Heading>
              <Box>
                <Text color="gray.700" fontWeight={600} fontSize={[14, 18, 20, 22, 24]} display="inline-block" mr="2">cidades +100</Text>
                <Tooltip hasArrow label='Cidades +100' bg='gray.700' cursor="pointer" color="gray.50" shouldWrapChildren mt='3'>                
                  <Icon 
                    as={IoMdInformationCircleOutline} 
                    fontSize={["16"]} 
                    color="gray.200"
                  />
                </Tooltip>
              </Box>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDir="column" mr={[6, 6, 6, 20, 140]} ml={[6, 6, 6, 140, 140]}>
          <Heading color="gray.700" fontSize={["24", "30", "30", "36", "36"]} fontWeight={500} mb={["6", "8", "12", "12", "16"]} mt={["16", "16", "16", "16", "0"]}>Cidades +100</Heading>
          <Grid 
            templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)', 'repeat(5, 1fr)']} 
            justifyItems="center"
            alignContent="space-evenly"
            gap={[6, 10, 16, 16, 6, 20]} 
            mb="10"
          >
            {
              continent.cities.map((city) => {
                return (
                  <GridItem key={city.city} w={256}>
                    <Image src={city.image} alt="Imagem da cidade" />
                    <Flex 
                      p="6" 
                      flexDir="row" 
                      borderColor="yellow.100" 
                      borderWidth="1px" 
                      borderRadius="5" 
                      borderTopRadius="0" 
                      borderTop="none"
                      justify="space-between"
                      alignItems="center"
                      bg="white"
                    >
                      <Flex flexDir="column">
                        <Heading color="gray.700" fontFamily="barlow" fontSize="20" fontWeight={600}>{city.city}</Heading>
                        <Text color="gray.500" fontFamily="barlow" fontSize="16" fontWeight={500}>{city.country}</Text>
                      </Flex>
                      <Image src={city.flag} h={30} w={30} alt="bandeira" />
                    </Flex>
                  </GridItem>
                )
              })
            }
          </Grid>
        </Flex>
      </>
    )

  } else {
    return <Flex bg="black" color="gray.50" w="100%" h="90vh" justify="center" alignItems="center"><Text>404 - Page Not Found</Text></Flex>
  }
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  
//   const { slug } = params;

//   const response = await api.get(`/continents/${slug}`);

//   console.log(response.data)

//   // const objectBySlug = response.data.continents.find(continent => continent.slug === slug);

//   const continent = {...response.data};

//   return {
//     props: {
//       continent,
//     }
//   }
// }