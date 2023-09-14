"use client";
import { useEffect } from "react";
import HomePageSlider from "./components/Sliders/HomePageSlider";
import Restaurants from "./components/Restaurants/Restaurants";
import Footer from "./components/Footer/Footer";
import { SessionProvider } from "next-auth/react";
import Navbar from "./components/Navbar/Navbar";

export default function Home() {
  const theme = "dark";

  useEffect(() => {
    import("preline");
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between
     
       ${"theme"}    `}
    >
      <section className="w-full  bg-background  ">
        <div className=" p-6">
          <HomePageSlider />
          <Restaurants />
        </div>
        <Footer />
      </section>
    </main>
  );
}
