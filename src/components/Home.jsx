import React from 'react';
import { Box, Image, Heading, Container, Stack, Text} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {
  pos: 'absolute',
  top: '50%',
  left: '38%',
  transfrom: 'translate(-50%,-50%)',
  textTransform: 'uppercase',
  p: '2',
};
const Home = () => {
  return (
    <>
      <Box>
        <MyCarousel />
        <Container minH={'50vh'} maxW={"container.lg"}  p={'16'}>
          <Heading
            textTransform={'uppercase'}
            py={'2'}
            w={'fit-content'}
            borderBottom={'2px solid'}
            m={'auto'}
          >
            Services
          </Heading>
          <Stack
           h={"full"}
           p={"4"}
           alignItems={"center"}
           direction={["column","row"]}
          >

            <Image src={img5} filter={"hue-rotate(-130deg)"}h={["40","350"]} my={"5"}  />
            <Text letterSpacing={"widest"} lineHeight={"100%"} p={["4","16"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam expedita magni in assumenda sit eos eligendi sed aliquid vitae molestias fugiat, totam quas? Harum, iusto maxime aut repellat animi adipisci atque maiores expedita hic praesentium fuga eaque accusantium illo magni blanditiis pariatur! Fuga recusandae voluptates quidem. Odit placeat eveniet excepturi enim? Tempora tempore ratione ducimus beatae, pariatur magni sapiente, excepturi, cupiditate assumenda dolorem commodi ut saepe quae? Animi illo voluptatibus optio similique magnam, esse nostrum perferendis debitis voluptas? Porro, in. Nemo quidem asperiores perspiciatis iure illo quis ex similique! Voluptates.
            </Text>


          </Stack>
        </Container>
      </Box>
    </>
  );
};
const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Future Is Gaming
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Gaming On Console
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Night Life Is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
