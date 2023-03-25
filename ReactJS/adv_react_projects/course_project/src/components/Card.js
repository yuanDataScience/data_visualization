import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { queryByTitle } from "@testing-library/react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <HStack backgroundColor="white" borderRadius="5px">
      <VStack align='left' textColor="black">
        <Image src={imageSrc} borderRadius="5px" />
        <Heading size="sm" textColor="black" paddingLeft={'10px'}>{title}</Heading>
        <Text paddingLeft={'10px'}>{description}</Text>
        <HStack paddingLeft={'10px'}>
          <Heading size ="xs">
            See more 
          </Heading>
          <Heading>
            <FontAwesomeIcon icon={faArrowRight} size="sm" ></FontAwesomeIcon>
          </Heading>  
        </HStack>
        
      </VStack>
    </HStack>
    
  );
};

export default Card;
