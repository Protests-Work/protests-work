/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FC, ReactNode } from "react";
import { Box, Link, Image } from "rebass";
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
    <Box as="nav" id={id} className={className} py={3} bg='primary'>
      <Container>
        <Link href="/" variant="nav" fontSize={3}>
          Protests Work
        </Link>
        <Link href="/about" variant="nav">
          About
        </Link>
      </Container>
    </Box>
  );
};

export default Nav;
