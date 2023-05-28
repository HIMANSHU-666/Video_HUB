import {React,} from 'react'
import { Heading, Stack, VStack, Text, Button } from '@chakra-ui/react'
import { useState } from 'react';
import ReactPlayer from 'react-player';


const Videos = () => {

  const videosArr = [
    "https://www.youtube.com/embed/HYb4FGDTBmw",
    'https://www.youtube.com/embed/cGAdC4A5fF4',
    'https://www.youtube.com/embed/AhCSfuG9Jxw',
    'https://www.youtube.com/embed/iWx_o5Iatpw',
    'https://www.youtube.com/embed/MUMCZZl9QCY',
    'https://www.youtube.com/embed/0ZwyCRhhK60',
    'https://www.youtube.com/embed/P-0AaNgYvFM',
  ];

  const [videoSrc, setVideoSrc] = useState(videosArr[0]);

  return (
    <>
      <Stack direction={["column","row"]} h={"100vh"}>
        <VStack  w={"full"} my={"3"} mx={"3"}>
          {/* <iframe src={videoSrc} style={{height:"80%",width:"100%",borderBottomRightRadius:" 20px"}}  ></iframe> */}
          <ReactPlayer url={videoSrc} controls={true} height={"80%"} width={"100%"} />
          <VStack alignItems={"flex-start"} w={"full"} py={"4"} px={"8"} overflowY={"auto"}>
            <Heading>Sample Videos 1</Heading>
            <Text>This is a sample video for testing and demo called description</Text>
          </VStack>

        </VStack>
        <VStack w={["full","xl"]} alignItems={"stretch"} p={"8"} spacing={"8"} overflow={"auto"}>
          {
            videosArr.map((item,index)=>(
              <Button variant={"ghost"} colorScheme={"purple"} onClick={()=> setVideoSrc(item)}>Lecture-{index + 1}</Button>
            ))
          }
        </VStack>
      </Stack>
    </>
  )
}

export default Videos
