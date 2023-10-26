"use client";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Ready from "@/components/ready/ready";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ready />
      </main>
    </>
  );
}
