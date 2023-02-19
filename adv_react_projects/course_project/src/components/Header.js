import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => { 

  const headRef = useRef(null);

  useEffect(() => {
  // no need to keep it in a reference, only
  // need to update whenever useEffect is rendered
  let prevScrollY = window.scrollY;

  const handleScroll = () =>{
    const currentScrollY = window.scrollY;
    const headElement = headRef.current;
    if (!headElement) {
      return;
    }

    // going down increase the y coordinate, so
    // pre > current means going up
    prevScrollY > currentScrollY ? 
    headElement.style.transform = 'translateY(0)' :
    headElement.style.transform = 'translateY(-200px)';

    prevScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
  
}, []);

const handleClick = (anchor) => () => {
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  

  return (
    <Box position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
           <HStack spacing={8}>
           {socials.map((social, index) => {
              return (                
                <Box key={index}>
                  <a href={social.url}>
                    <FontAwesomeIcon icon={social.icon} size={"2x"}></FontAwesomeIcon>
                  </a>
                </Box>                
              )
            })}
           </HStack>            
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              {
              [{id: "contactme", url: "/#contact-me", name: "Contact Me"}, 
               {id: "projects", url: "/#projects", name: "Projects" }]
               .map(section =>{
                return (
                  <Box key={section.id}>
                    <a href={section.url} onClick={handleClick(section.id)}>{section.name}</a>
                  </Box>
                )
               } )
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
