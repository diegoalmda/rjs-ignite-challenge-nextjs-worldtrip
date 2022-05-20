import { SwiperSlide } from "swiper/react";
import { Flex, Heading, Icon, Image, Stack, Text } from '@chakra-ui/react';
import Link from "next/link";
import { ReactNode } from "react";

interface SliderItemProps {
  image: string;
  children: ReactNode;
}

export function SliderItem({ image, children }: SliderItemProps) {
  return (
    <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justify="center"
            direction="column"
            bgImage={image}
            bgPosition="cover"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
          >
            {children}
          </Flex>
  );
}