import { Container, Heading, VStack, Input, Button, Text } from '@chakra-ui/react'
import React from 'react'
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <>
      <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
        <form action="">
            <VStack alignItems={"stretch"} spacing={"8"} w={"96"} m={"auto"} my={"16"}>
                <Heading>Welcome Back!</Heading>
                <Input border={" 1px solid"} focusBorderColor={"purple.500"} placeholder='Enter Email' required type={"email"} />
                <Input border={" 1px solid"} focusBorderColor={"purple.500"} placeholder='Enter Password' required type={"password"} />
                <Button variant={"link"} alignSelf={"flex-end"} colorScheme={"purple"}>Forgot Password</Button>
                <Button colorScheme={"purple"} type={"submit"}>LogIn</Button>
                <Text textAlign={"right"}>New User?
                <Button variant={"link"} alignSelf={"flex-end"} mx={"2"} colorScheme={"purple"}>
                    <Link to={"/signup"}>SignUp</Link>
                </Button>
                </Text>
                
            </VStack>
        </form>
      </Container>
    </>
  )
}

export default Login
