import Image from "next/image";
import hero from "assets/Hero-2.png";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <Image
        src={hero}
        className="top-0 fixed w-full h-80 -z-50"
        alt="Chamba Valley Tomatoes"
      />
      <h1>This is my site</h1>
    </main>
  );
}
