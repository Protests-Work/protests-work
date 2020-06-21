/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FC, ReactNode } from "react";
import { Box, Flex, Link } from "rebass";
import Container from "../container/container";

interface Props {
  className?: string;
  id?: string;
  children?: ReactNode;
}

const Nav: FC<Props & JSX.IntrinsicElements["nav"]> = ({
  className = "",
  id = ""
}) => {
  return (
    <Box as="header" mb={4}>
      <Container>
        <Flex justifyContent="space-between" as="nav" id={id} className={className} py={3} color='text' alignItems='center' variant="navContainer">
          <Link href="/" variant="navLink" fontSize={3}>Protests Work</Link>
          <Link href="/about/index.html" variant="navLink">
            About
          </Link>
        </Flex>
      </Container>
    </Box>

  );
};

export default Nav;
