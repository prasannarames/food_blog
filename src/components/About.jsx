import React from "react";
import { Flex, Image, Heading, Text, Button } from "@chakra-ui/react";

export default function About() {
  return (
    <>
      <Flex
        as={"section"}
        flexDirection={"row"}
        justifyContent={{ base: "center", lg: "space-around" }}
        alignItems={{ base: "center", lg: "center" }}
        px={{ base: "3em", lg: "3em" }}
        marginTop={"5em"}
        h={{ base: "416px", lg: "467px" }}
        textAlign={{ base: "center", lg: "left" }}
        background={
          "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%);"
        }
      >
        <Image
          display={{ base: "none", lg: "block" }}
          h={"468px"}
          w={"364px"}
          src="/src/assets/images/about-section-img.png"
          alt="site-logo"
        />
        <Flex
          flexDirection={"column"}
          alignItems={{ base: "center", lg: "flex-start" }}
          justifyContent={"space-between"}
          h={"254px"}
          w={"447px"}
        >
          <Heading
            as="h1"
            fontSize="3rem"
            fontWeight="800"
            color="#0E2368"
            lineHeight="46px"
          >
            About Us
          </Heading>
          <Text
            size="md"
            color="#444957"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            gap="21px"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            laborum ea accusantium labore, numquam eveniet rerum obcaecati
            maiores molestias aliquid amet, nisi ipsa id tempore vel quisquam
            possimus, commodi minima!
          </Text>

          <Button
            h="40px"
            w="120px"
            py="12px"
            px="30px"
            gap="6px"
            borderRadius="30px"
            bg={"#E23744"}
            colorScheme={"FFFFFF"}
          >
            {" "}
            Read More
          </Button>
        </Flex>
      </Flex>
    </>
  );
}
