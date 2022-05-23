import { Box, Heading, Stack, Image, Text, Flex, useBreakpointValue } from "@chakra-ui/react";

export default function HomeBody() {
  const isWideVersion = useBreakpointValue({
    base: false, // por padrão não está na wideversion
    lg: true, // a partir do large está
  })

  return (
    <>
      <Flex
        bgImage="url('/images/background.png')"
        bgPosition="cover"
        bgRepeat="no-repeat"
        bgSize="cover"
        h={[163, 300]}
        w="100%"        
      >
        <Stack display="flex" flexDir="column" w={["100%", "100%", "100%", "50%", "50%"]} h="100%" spacing="6" justifyContent="center" alignItems="flex-start" pl={["4", "4", "8", "20", "40"]} pr={["4", "4", "10", "10", "10"]}>      
          <Heading as='h1' line-height="none" fontSize={['md', '4xl']} fontWeight={500} color="gray.50">5 Continentes, infinitas possibilidades.</Heading>
          <Heading as='h6' line-height="none" fontSize={['xs', 'md']} fontWeight={400} color="gray.100">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Heading>
        </Stack>
        { isWideVersion &&
        <Box display="flex" w="50%" justifyContent="center" alignItems="flex-start" pr="10">
          <Image src='/images/airplane.svg' alt='airplane' boxSize={["81px", "100px", "420px"]}  />
        </Box> }
      </Flex>
      <Flex justify={["center", "center", "center", "space-between"]} h="60" pl={["4", "10", "40"]} pr={["4", "10", "40"]} flexWrap="wrap">
        <Flex flexDir={["row", "row", "row", "column"]} justify="center" alignItems="center" w={["40", "40", "56", "32"]}>
          { isWideVersion && <Image src='/images/cocktail.svg' alt='cocktail' boxSize={["85px"]} pb="4" /> }
          { !isWideVersion && <Text mr="2" display='inline-block' color='yellow.300' fontSize={["2xl", "4xl", "4xl"]}><span>&#8226;</span></Text>}
          <Text as="p" display='inline-block' fontSize={['xs', 'lg']} fontWeight={600} mr={["6", "6", "6", "0"]}>vida noturna</Text>
        </Flex>
        <Flex flexDir={["row", "row", "row", "column"]} justify="center" alignItems="center" w={["40", "40", "56", "32"]}>
          { isWideVersion && <Image src='/images/surf.svg' alt='surf' boxSize={["85px"]} pb="4" /> }
          { !isWideVersion && <Text mr="2" display='inline-block' color='yellow.300' fontSize={["2xl", "4xl", "4xl"]}><span>&#8226;</span></Text>}
          <Text as="p" display='inline-block' fontSize={['xs', 'lg']} fontWeight={600} mr={["6", "6", "6", "0"]}>praia</Text>
        </Flex>
        <Flex flexDir={["row", "row", "row", "column"]} justify="center" alignItems="center" w={["40", "40", "56", "32"]}>
          { isWideVersion && <Image src='/images/building.svg' alt='building' boxSize={["85px"]} pb="4" /> }
          { !isWideVersion && <Text mr="2" display='inline-block' color='yellow.300' fontSize={["2xl", "4xl", "4xl"]}><span>&#8226;</span></Text>}
          <Text as="p" display='inline-block' fontSize={['xs', 'lg']} fontWeight={600} mr={["6", "6", "6", "0"]}>moderno</Text>
        </Flex>
        <Flex flexDir={["row", "row", "row", "column"]} justify="center" alignItems="center" w={["40", "40", "56", "32"]}>
          { isWideVersion && <Image src='/images/museum.svg' alt='museum' boxSize={["85px"]} pb="4" /> }
          { !isWideVersion && <Text mr="2" display='inline-block' color='yellow.300' fontSize={["2xl", "4xl", "4xl"]}><span>&#8226;</span></Text>}
          <Text as="p" display='inline-block' fontSize={['xs', 'lg']} fontWeight={600} mr={["6", "6", "6", "0"]}>clássico</Text>
        </Flex>
        <Flex flexDir={["row", "row", "row", "column"]} justify="center" alignItems="center" w={["40", "40", "56", "32"]}>
          { isWideVersion && <Image src='/images/earth.svg' alt='earth' boxSize={["85px"]} pb="4" /> }
          { !isWideVersion && <Text mr="2" display='inline-block' color='yellow.300' fontSize={["2xl", "4xl", "4xl"]}><span>&#8226;</span></Text>}
          <Text as="p" display='inline-block' fontSize={['xs', 'lg']} fontWeight={600}>e mais...</Text>
        </Flex>
      </Flex>
    </>
  )
}