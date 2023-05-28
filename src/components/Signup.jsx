import { Container, Heading, VStack, Input, Button, Text, Avatar } from '@chakra-ui/react'
import {Link} from "react-router-dom"
import React from 'react'

const Signup = () => {
  return (
    <>
      <Container maxW={"container.xl"} h={"120vh"} p={"16"}my={"10"} py={"5"}>
        <form action="">
            <VStack alignItems={"stretch"} spacing={"5"} w={"96"} m={"auto"} my={"16"}>
                <Heading>SIGN UP!</Heading>
                <Avatar alignSelf={"center"} boxSize={"32"}/>
                <Input border={" 1px solid"} focusBorderColor={"purple.500"} placeholder='Enter Name' required type={"text"} />
                <Input border={" 1px solid"} focusBorderColor={"purple.500"} placeholder='Enter Phone' maxLength={"10"} minLength={"10"} required type={"tel"} />
                <Input border={" 1px solid"} focusBorderColor={"purple.500"}  required type={"date"} />
                <Input border={" 1px solid"} focusBorderColor={"purple.500"} placeholder='Enter Email' required type={"email"} />
                <Input border={" 1px solid"} focusBorderColor={"purple.500"} placeholder='Enter Password' required type={"password"} />
                <Input border={" 1px solid"} focusBorderColor={"purple.500"} placeholder='Confirm Password' required type={"password"} />
                <Button colorScheme={"purple"} type={"submit"}>SignUp</Button>
                <Text textAlign={"right"}>Existing User?
                <Button variant={"link"} alignSelf={"flex-end"} mx={"2"} colorScheme={"purple"}>
                    <Link to={"/login"}>LogIn</Link>
                </Button>
                </Text>
                
            </VStack>
        </form>
      </Container>
    </>
  )
}

export default Signup
