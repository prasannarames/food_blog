import React from "react";
import Card from "./Card";
import { Flex, Heading, Box } from "@chakra-ui/react";
import data from "../data/data";

import { useState } from "react";
import Pagination from "./Pagination";

function Articles() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(3);

  const lastIndexOfThePage = currentPage * pageLimit;
  const firstIndexOfThePage = lastIndexOfThePage - pageLimit;
  const currentPageData = data.slice(firstIndexOfThePage, lastIndexOfThePage);
  const totalPages = data.length / pageLimit

  

  return (
    <Box
      as="section"
      margin={"0 auto"}
      marginTop={"4.5em"}
      h={{ base: "1915px", lg: "825px" }}
      w={{ base: "375px", lg: "1325px" }}
    >
      <Heading
        as="h2"
        fontSize="46px"
        fontWeight="600"
        color="#0E2368"
        lineHeight="42px"
        letterSpacing={"0.04em"}
        textAlign={{base:"center", lg:"left"}}
      >
        Latest Articles
      </Heading>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        flexWrap={"wrap"}
        justifyContent={{ base: "space-evenly", lg: "space-between" }}
        alignItems={{ base: "center" }}
      >
        <Card
          currentPageData= {currentPageData}
        />
      </Flex>
      <Pagination
        totalData={data.length}
        pageLimit={pageLimit}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </Box>
  );
}

export default Articles;
