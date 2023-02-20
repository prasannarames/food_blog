import React from "react";
import { Button, Heading, Text, Flex, Image } from "@chakra-ui/react";

function Card({ currentPageData }) {
  return (
    <>
      {currentPageData.map((item) => {
        return (
          <Flex
            flexDirection={"column"}
            marginTop={"2em"}
            justifyContent="center"
            alignItems={"center"}
            textAlign="center"
            border={"1px solid grey"}
            borderRadius={"1em"}
            px="0.5em"
            py="1em"
            mt="4em"
            h={{ base: "484px", lg: "554px" }}
            w={{ base: "271px", lg: "381px" }}
          >
            <Image
              src={item.coverImg}
              alt={item.alt}
              borderRadius={"21px"}
              h={{ base: "166px", lg: "258px" }}
              w={{ base: "204px", lg: "326px" }}
              objectFit={"cover"}
            />

            <Heading
              fontFamily={"Poppins"}
              color="#0E2368"
              fontStyle={"normal"}
              mt="16px"
              fontWeight={"700"}
              letterSpacing={"0.05em"}
              fontSize={{ base: "16px", lg: "21px" }}
              lineHeight={{ base: "35px", lg: "27px" }}
            >
              {item.title}
            </Heading>

            <Text
              size="md"
              color="#444957"
              opacity="0.8"
              fontWeight="normal"
              lineHeight={1.5}
              gap="21px"
              mt="16px"
              noOfLines={{ base: "5", lg: "3" }}
            >
              {item.description}
            </Text>

            <Button
              h="40px"
              w="120px"
              py="4px"
              px="33px"
              gap="13px"
              mt="16px"
              border={"2px solid #424961"}
              borderRadius="27px"
            >
              {" "}
              Read More
            </Button>
          </Flex>
        );
      })}
    </>
  );
}

export default Card;
