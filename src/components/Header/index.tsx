import { Flex, Icon, Image, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { IoChevronBack } from "react-icons/io5";

export function Header() {
  const { asPath, back } = useRouter();

  // console.log(back)

  return (
    <Flex
      w="100vw"
      h={["50", "70", "100"]} 
      flexDir="row"
      align="center" 
      justify="center"
    >
      <Flex 
        flexDir="row" 
        justify="center" 
        alignItems="center"
        w="100%"
        maxW={1440} 
        position="relative"
      >
        { asPath !== "/" &&
          <Icon as={IoChevronBack} fontSize={["16", "20", "25"]} position="absolute" left={["4", "16", "40"]} />        
        }
        <Image src='/images/logo.svg' alt='logo' boxSize={["81px", "100px", "184px"]} />
      </Flex>
    </Flex>
  )
}