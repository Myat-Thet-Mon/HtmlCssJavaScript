import React, { useEffect, useState } from 'react';
import {
  Box,
  ChakraProvider,
  CSSReset,
  Container,
  extendTheme,
  Heading,
  Link,
  SimpleGrid,
  Text,
  VStack,
  Button,
  HStack,
  Image,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Flex,

} from '@chakra-ui/react';
import { Link as ScrollLink, Element, Events, animateScroll as scroll } from 'react-scroll';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import img2 from './images/img2.jpg';
import stock from './images/stock.jpg';
import code from './images/code.jpg';
import dice from './images/dice.jpg';
import health from './images/health.jpg';

const theme = extendTheme({
  fonts: {
    heading: 'Montserrat',
    body: 'Arial',
  },

  components: {
    Input: {
      baseStyle: {
        border: '1px solid rgba(121, 188, 194, 1)',
      },
    },

    Textarea: {
      baseStyle: {
        border: '1px solid rgba(121, 188, 194, 1)',
      },
    },
  },
});

function App() {
  const [expandedProjects, setExpandedProjects] = useState([]);
  const projects = [
    {
      title: 'Stock Tracker',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: stock,
    },
    {
      title: 'Rat Race',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: dice,
    },
    {
      title: 'VM Translator',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: code,
    },
    {
      title: 'Baby Care',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit',
      image: health,
    },
  ];

  const toggleProjectExpansion = (index) => {
    if (expandedProjects.includes(index)) {
      setExpandedProjects(expandedProjects.filter((item) => item !== index));
    } else {
      setExpandedProjects([...expandedProjects, index]);
    }
  };
  const theme = extendTheme({
    fonts: {
      heading: 'Montserrat',
      body: 'Arial',
    },
  });


  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box>

        <header style={{
          borderColor: 'rgba(0, 0, 0, 0.1)',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          // position: 'fixed',
          width: '100%',
        }} >
          <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center" padding={1}>
            <HStack spacing={5} display="flex" alignItems="flex-end" justifyContent="center">
              <Link href="https://linkedin.com/yourprofile" isExternal >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
              <Link href="https://github.com/yourusername" isExternal >
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href="https://twitter.com/yourhandle" isExternal >
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link href="mailto:youremail@example.com" isExternal >
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </HStack>
            <HStack spacing={5} alignItems="flex-end">
              <ScrollLink to="projects" smooth={true} duration={500} >
                Projects
              </ScrollLink>
              <ScrollLink to="contact" smooth={true} duration={500} >
                Contact Me
              </ScrollLink>
            </HStack>
          </Container>
        </header>

        <Element name="landing" >
          <Container maxW="container.lg"
            py={16}
            style={{
              backgroundColor: '#f5f5f5',
              height: "400px",
              borderBottom: '1px solid rgba(121, 188, 194, 1)',
              borderWidth: "1px",
              borderRadius: '0 0 24px 24px',
              boxShadow: "0px 2px 4px rgba(121, 188, 194, 1)"

            }}>
            <VStack spacing={4} alignItems="center">
              <img src={img2}
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
              <Heading
                as="h1"
                fontSize="lg"
                py={4}
              >
                Hello,I'm Myat Thet Mon
              </Heading>
              <Text
                fontSize="2xl"
                py={4}
              >
                A Frontend Developer </Text>
            </VStack>
          </Container>
        </Element>

        <Element name="projects">
          <Container maxW="container.lg" py={8} style={{ backgroundColor: '#f5f5f5' }}>
            <Heading as="h2" fontSize="3xl" mb={4}>Featured Projects</Heading>
            <SimpleGrid columns={2} spacing={4}>
              {projects.map((project, index) => (
                <Box
                  key={index}
                  borderWidth="1px"
                  borderRadius="lg"
                  p={4}
                  boxShadow="0px 2px 4px rgba(121, 188, 194, 1)"
                  margin="10px">
                  {/* <Image src={`images/${project.image}`} alt={project.title} /> */}
                  <Image src={project.image} alt={project.title} mb={2} />

                  <Heading as="h3" fontSize="xl" mb={2}>
                    {project.title}
                  </Heading>

                  <Text>
                    {expandedProjects.includes(index)
                      ? project.description
                      : `${project.description.substring(0, 100)}...`}
                  </Text>
                  {project.description.length > 100 && (
                    <Text
                      mt={2}
                      fontSize="sm"
                      fontWeight={600}
                      onClick={() => toggleProjectExpansion(index)}>
                      {expandedProjects.includes(index) ? 'See Less' : 'See More'}
                    </Text>
                  )}
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Element>

        <Element name="contact">
          <Container maxW="container.lg" py={8} style={{ backgroundColor: '#f5f5f5' }}>
            <Heading as="h2" fontSize="3xl" mb={4}>
              Contact Me
            </Heading>
            <form>
              <VStack spacing={4}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input type="text"
                    boxShadow="0px 2px 4px rgba(121, 188, 194, 1)" />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email</FormLabel>
                  <Input type="email"
                    boxShadow="0px 2px 4px rgba(121, 188, 194, 1)" />
                </FormControl>
                <FormControl id="inquiry">
                  <FormLabel>Type of Inquiry</FormLabel>
                  <Input type="text"
                    boxShadow="0px 2px 4px rgba(121, 188, 194, 1)" />
                </FormControl>
                <FormControl id="message">
                  <FormLabel>Your Message</FormLabel>
                  <Textarea boxShadow="0px 2px 4px rgba(121, 188, 194, 1)" />
                </FormControl>

                <Button type="submit" width="100%" mt={4} boxShadow="0px 2px 4px rgba(121, 188, 194, 1)" >
                  Submit
                </Button>

              </VStack>
            </form>
          </Container>

        </Element>

      </Box>
    </ChakraProvider>
  );
}

export default App;
