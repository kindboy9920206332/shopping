import React from "react";
import Navbar from "./Navbar";
import Container from "./continer";

export default function Layout({ children }) {
  return (
    <Container>
      <div>
        <Navbar></Navbar>
        {children}
      </div>
    </Container>
  );
}
