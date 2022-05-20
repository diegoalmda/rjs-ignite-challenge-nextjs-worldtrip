import { Swiper, SwiperSlide } from "swiper/react";
import { Flex, Heading, Text, Box, Image, Stack } from '@chakra-ui/react';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";
import { SliderItem } from "./SliderItem";

export default function Slider() {
  return (
    <Flex w="100%" maxW={1240} mx="auto" mb={["5", "10"]} h={[250, 450]}>
      <Swiper 
        pagination={true} 
        modules={[Autoplay, Pagination, Navigation]} 
        className="mySwiper" 
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        style={{width: '100%', flex: '1'}}
      >
        <SwiperSlide>
          <SliderItem image="url(/images/slider/europe.png)">
            <Link href="/europe">
              <a>
                <Heading as='h1' line-height="none" fontSize={['md', '4xl']} fontWeight={500} color="gray.50">Europa</Heading>
                <Text as="p" fontSize={['xs', 'lg']} fontWeight={600} color="gray.100">O continente mais antigo.</Text>
              </a>
            </Link>
          </SliderItem>          
        </SwiperSlide>        
        <SwiperSlide>
          <SliderItem image="url(/images/slider/asia.png)">
            <Link href="/europe">
              <a>
                <Heading as='h1' line-height="none" fontSize={['md', '4xl']} fontWeight={500} color="gray.50">Ásia</Heading>
                <Text as="p" fontSize={['xs', 'lg']} fontWeight={600} color="gray.100">O continente mais zen.</Text>
              </a>
            </Link>
          </SliderItem>          
        </SwiperSlide>          
        <SwiperSlide>
          <SliderItem image="url(/images/slider/oceania.png)">
            <Link href="/europe">
              <a>
                <Heading as='h1' line-height="none" fontSize={['md', '4xl']} fontWeight={500} color="gray.50">Oceania</Heading>
                <Text as="p" fontSize={['xs', 'lg']} fontWeight={600} color="gray.100">O continente mais animal.</Text>
              </a>
            </Link>
          </SliderItem>          
        </SwiperSlide>          
        <SwiperSlide>
          <SliderItem image="url(/images/slider/africa.png)">
            <Link href="/europe">
              <a>
                <Heading as='h1' line-height="none" fontSize={['md', '4xl']} fontWeight={500} color="gray.50">África</Heading>
                <Text as="p" fontSize={['xs', 'lg']} fontWeight={600} color="gray.100">O continente mais colorido.</Text>
              </a>
            </Link>
          </SliderItem>          
        </SwiperSlide>          
        <SwiperSlide>
          <SliderItem image="url(/images/slider/southamerica.png)">
            <Link href="/europe">
              <a>
                <Heading as='h1' line-height="none" fontSize={['md', '4xl']} fontWeight={500} color="gray.50">América do Sul</Heading>
                <Text as="p" fontSize={['xs', 'lg']} fontWeight={600} color="gray.100">O continente das belezas naturais.</Text>
              </a>
            </Link>
          </SliderItem>          
        </SwiperSlide>          
        <SwiperSlide>
          <SliderItem image="url(/images/slider/northamerica.png)">
            <Link href="/europe">
              <a>
                <Heading as='h1' line-height="none" fontSize={['md', '4xl']} fontWeight={500} color="gray.50">América do Norte</Heading>
                <Text as="p" fontSize={['xs', 'lg']} fontWeight={600} color="gray.100">O continente onde os negócios acontecem.</Text>
              </a>
            </Link>
          </SliderItem>          
        </SwiperSlide>          
      </Swiper>
    </Flex>
  );
}