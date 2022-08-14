import React from 'react';
import { 
  Flex, 
  Text, 
  Divider, 
  useBreakpointValue, 
} from '@chakra-ui/react';
import Image from 'next/image';

export default function About() {
  const bodyVariant = useBreakpointValue({ base: '18px', md: '24px' });
  const headerVariant = useBreakpointValue({ base: '42', md: '48' });
  return (
    <Flex
    height={'100%'}
    textAlign={'center'}
    flexDirection='column'
    bg={'brand.bgLight'}
    color='brand.secondary'
    px={'19.5vw'}
    py={'10vh'}>
      <Text 
      fontSize={headerVariant}
      fontWeight='bold'
      >
        ABOUT RR TENNIS
      </Text>
      <Divider alignSelf={'center'} width={'159px'} borderWidth="1px" borderColor={'brand.accent'}></Divider>
      <Text 
      pt={'4.5vh'}
      fontSize={bodyVariant}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      </Text>
    </Flex>
  )
}