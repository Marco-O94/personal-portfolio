"use client";
import {
  NextUIProvider,
} from "@nextui-org/react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LayoutContainer from "./components/LayoutContainer";
export default function Home() {
  return (
    <NextUIProvider>
         <LayoutContainer>
            <Hero />
         </LayoutContainer>
     </NextUIProvider>
  );
}
