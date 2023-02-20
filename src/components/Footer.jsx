import React from "react";
import { Flex, Image, Box, Heading, Text } from "@chakra-ui/react";

function Footer() {
  return (
    <Flex
      as={"footer"}
      flexDirection={{ base: "column", lg: "row" }}
      justifyContent={"space-evenly"}
      background={
        "linear-gradient(90.07deg, rgba(30, 42, 93, 0.04) 30.91%, rgba(48, 62, 130, 0.04) 64.79%, rgba(60, 80, 157, 0.04) 91.94%);"
      }

      // alignItems={"center"}
    >
      <Image
        src="/images/logo.png"
        alt="page logo"
        mb={"2em"}
        margin={{ base: "0 auto", lg: "5%" }}
        h={{ base: "58px", lg: "125px" }}
        w={{ base: "75px", lg: "161px" }}
      />
      <Flex
        flexDirection={{ base: "column", lg: "column" }}
        justifyContent={"space-evenly"}
        textAlign={"left"}
        padding={"2em"}
      >
        <Box
          color={"#0E2368"}
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={"600"}
          lineHeight={"35px"}
          letterSpacing={".03em"}
        >
          Contact Us
        </Box>
        <Box
          color={"#646874"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"12px"}
          lineHeight={"12px"}
          mb={".8em"}
        >
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market,
        </Box>
        <Box
          color={"#646874"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"12px"}
          lineHeight={"12px"}
          mb={".8em"}
        >
          XYZ-343434
        </Box>
        <Box
          color={"#646874"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"12px"}
          lineHeight={"12px"}
          mb={".8em"}
        >
          food-blog@blog.com
        </Box>
        <Box
          color={"#646874"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"12px"}
          lineHeight={"12px"}
        >
          (91)343434675867
        </Box>
      </Flex>
      <Flex
        flexDirection={{ base: "column", lg: "column" }}
        justifyContent={"space-evenly"}
        textAlign={"left"}
        padding={"2em"}
        justifyItems={"left"}
      >
        <Box
          color={"#0E2368"}
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={"600"}
          lineHeight={"35px"}
          letterSpacing={".03em"}
        >
          More
        </Box>
        <Box
          color={"#646874"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"12px"}
          lineHeight={"12px"}
          mb={".8em"}
        >
          About Us
        </Box>
        <Box
          color={"#646874"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"12px"}
          lineHeight={"12px"}
          mb={".8em"}
        >
          Products
        </Box>
        <Box
          color={"#646874"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"12px"}
          lineHeight={"12px"}
          mb={".8em"}
        >
          Careers
        </Box>
        <Box
          color={"#646874"}
          fontStyle={"normal"}
          fontWeight={"400"}
          fontSize={"12px"}
          lineHeight={"12px"}
        >
          Contact Us
        </Box>
      </Flex>
      <Flex
        flexDirection={{ base: "column", lg: "column-reverse" }}
        textAlign={"left"}
        justify={"space-evenly"}
        alignItems={{ base: "center", lg: "flex-end" }}
      >
        <Flex>
          <Text
            color={"#646874"}
            fontStyle={"normal"}
            fontWeight={"400"}
            fontSize={"12px"}
            lineHeight={"12px"}
          >
            © 2023 Food Truck Example
          </Text>
        </Flex>
        <Flex flexDirection={"row"}
        
        my={{base:"1em", lg:"0"}}
        >
          <a>
            <Image src="/icons/insta.png" />
          </a>
          <a>
            <Image
              marginLeft={"1em"}
              marginRight={"1em"}
              src="/icons/twitter.png"
            />
          </a>
          <a>
            <Image src="/icons/fb.png" />
          </a>
        </Flex>
        <Box
          display={{ base: "none", lg: "block" }}
          color={"#0E2368"}
          fontSize={"16px"}
          fontStyle={"normal"}
          fontWeight={"600"}
          lineHeight={"35px"}
          letterSpacing={".03em"}
        >
          Social Links
        </Box>
      </Flex>
    </Flex>
  );
}

export default Footer;
