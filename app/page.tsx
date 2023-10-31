"use client";
import Navbar from "@/components/navbar/navbar";
import Hero from "@/components/hero/hero";
import Ready from "@/components/ready/ready";
import Trips from "@/components/trips/trips";
import Experience from "@/components/experience/experience";
import Testimonials from "@/components/testimonials/testimonials";
import GetStarted from "@/components/getStarted/getStarted";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ready />
        <Trips />
        <Experience />
        <Testimonials />
        <GetStarted />
      </main>
      <Footer />
    </>
  );
}
