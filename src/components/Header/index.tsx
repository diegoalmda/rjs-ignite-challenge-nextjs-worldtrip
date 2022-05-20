import { Flex, Icon, Image, Stack } from '@chakra-ui/react'
import Link from 'next/link';
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
      bg="white"
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
          <a onClick={() => back()}>
            <Icon as={IoChevronBack} fontSize={["16", "20", "25"]} position="absolute" left={["4", "16", "40"]} />  
          </a>
        }
        <Link href="/">
          <a>
            <Image src='/images/logo.svg' alt='logo' boxSize={["81px", "100px", "184px"]} />
          </a>
        </Link>
      </Flex>
    </Flex>
  )
}