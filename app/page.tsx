import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { IsOpenProvider } from "@/components/Context";

export default function Home() {
  return (
    <IsOpenProvider>
      <main className="">
        <Header />
        <Hero />
      </main>
    </IsOpenProvider>
  );
}
