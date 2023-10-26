"use client";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Ready from "@/components/ready/ready";
import Trips from "@/components/trips/trips";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ready />
        <Trips />
      </main>
    </>
  );
}
