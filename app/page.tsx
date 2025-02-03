import Image from "next/image";
import Hero from "./components/landind-page/hero";
import Header from "./components/landind-page/header";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto ">
      <Header />
      <Hero />

      {/* 
  
  
    <Pricing/>
    <Faq/> */}
    </div>
  );
}
