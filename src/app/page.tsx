"use client"
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Homes from "@/components/Home";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Homes />
      </main>
      <Footer />
    </div>
  );
}
