import React from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  VStack,
  Text
} from '@chakra-ui/react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
        <Stack direction={['column', 'row']}>
          <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textAlign={"center"} textTransform={'uppercase'}>
              Subscribe to get updates
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
              <Input
                placeholder="Enter Email Here..."
                border={'none'}
                outline={'none'}
                focusBorderColor={'transparent'}
              />
              <Button
                p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
              >
                <AiOutlineSend size={'20'} />
              </Button>
            </HStack>
          </VStack>
          <VStack
            w={'full'}
            borderLeft={['none', '1px solid white']}
            borderRight={['none', '1px solid white']}
          >
            <Heading size={"md"} textTransform={"uppercase"} color={"purple.400"} textAlign={"center"}>
                Video Hub
            </Heading>
            <Text>
            ©2023 All rights are reserved by Himanshu
            </Text>
          </VStack>
          <VStack w={'full'}>
            <Heading size={"md"}  textTransform={"uppercase"}>
                Social Media
            </Heading>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
                <a href="####">Youtube</a>
            </Button>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
                <a href="####">Instagram</a>
            </Button>
            <Button variant={"link"} colorScheme={"whiteAlpha"}>
                <a href="####">Github</a>
            </Button>
          </VStack>
        </Stack>
      </Box>
    </>
  );
};

export default Footer;
