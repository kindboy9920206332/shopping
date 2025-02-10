"use client";
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer_Home";
import Container from "./continer";
import { usePathname } from "next/navigation";
import Bnner_footer_home from "./Banner_footer_home";

export default function Layout({ children }) {
  const pathname = usePathname();

  if (pathname !== "/Login") {
    return (
      <>
        <Navbar />
        <Container>
          <div>{children}</div>
        </Container>

        <Footer />
      </>
    );
  } else {
    return (
      <>
        <div>{children}</div>
      </>
    );
  }
}
