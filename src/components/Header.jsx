import React from "react";
import {
  Box,
  Image,
  Text,
  Heading,
  Flex,
  Button,
  Stack,
} from "@chakra-ui/react";

export default function Header() {
  return (
    <Flex
      as={"header"}
      flexDirection={{
        base: "column",
        md: "row-reverse",
        lg: "row-reverse",
        xl: "row-reverse",
      }}
      justifyContent={"space-around"}
    >
      <Image
        position="relative"
        width={{
          base: "375px",
          sm: "375px",
          md: "375px",
          lg: "735px",
          xl: "745px",
          "2xl": "765px",
        }}
        // right={{ xl: "0" }}
        src="/src/assets/images/header-img.png"
        alt="header-image"
      />
      <Image
        position="absolute"
        width={{ base: "375px", sm: "375px", lg: "750px" }}
        top={{ base: "0" }}
        right={{ base: "0" }}
        src="/src/assets/images/header-img-rel.png"
      />
      <Box
        display={"flex"}
        justifyContent="center"
        alignItems="center"
        position="absolute"
        h={{ base: "41px", lg: "41px" }}
        w={{ base: "97px", lg: "122px" }}
        textAlign="center"
        fontWeight={"800"}
        fontSize={"11px"}
        border="1px solid white"
        right={{ base: "10px", lg: "120px" }}
        top={{ base: "10px" }}
        borderRadius="28px"
        color="#FFFFFF"
        gap="10px"
        py={{ lg: "3px" }}
        px={{ lg: "26px" }}
      >
        Get In Touch
      </Box>

      <Flex
        flexDirection={"column"}
        justifyContent={"space-between"}
        alignItems={{ base: "center", lg: "flex-start" }}
        padding={"4em"}
      >
        <Stack
          spacing={3}
          w={{ base: "80%", md: "40%" }}
          align={["center", "center", "flex-start", "flex-start"]}
        >
          <Image
            display={{ base: "none", lg: "block" }}
            mb={{ lg: "9em" }}
            src="/src/assets/images/logo.png"
            alt="site-logo"
          />

          <Heading
            as="h1"
            fontSize="62px"
            fontWeight="700"
            color="#0E2368"
            lineHeight="69px"
            textAlign={["center", "center", "left", "left"]}
          >
            Discover the{" "}
            <Text as="span" color={"#E23744"}>
              Best{" "}
            </Text>
            Food and Drinks
          </Heading>
          <Text
            size="md"
            color="#444957"
            opacity="0.8"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={["center", "center", "left", "left"]}
          >
            Naturally made Healthcare Products for the better care & support of
            your body
          </Text>

          <Button
            h={{ base: "40px", lg: "63px" }}
            w={{ base: "120px", lg: "190px" }}
            py="12px"
            px="30px"
            gap="6px"
            borderRadius="30px"
            bg={"#E23744"}
            colorScheme={"FFFFFF"}
          >
            {" "}
            Explore Now!
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
}
