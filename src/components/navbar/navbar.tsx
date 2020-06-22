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
    <Box as="header">
      <Container>
        <Flex variant="navContainer" justifyContent="space-between" as="nav" id={id} className={className} py={3} alignItems="center">
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
