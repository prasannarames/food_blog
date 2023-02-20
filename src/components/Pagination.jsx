import { Image, Flex, Text } from "@chakra-ui/react";
import React from "react";

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage <= totalPages && currentPage != 1 ) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <Flex justifyContent={"center"} padding={"3em"}>
      <Image src="/icons/left_chevron.png"onClick={previousPage} />
      <Text px={".5em"}>
        {currentPage}/{totalPages}
      </Text>
      <Image src="/icons/right_chevron.png" onClick={nextPage} />
    </Flex>
  );
}

export default Pagination;
