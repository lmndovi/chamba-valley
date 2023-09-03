import Image from "next/image";
import hero from "assets/Hero-2.png";
import Header from "@/components/Header";
import Headline from "@/components/Headline";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <Headline />
      <Hero />
    </main>
  );
}
