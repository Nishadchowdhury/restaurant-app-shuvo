"use client";
import { useEffect } from "react";
import HomePageSlider from "./components/Sliders/HomePageSlider";
import Restaurants from "./components/Restaurants/Restaurants";
import Footer from "./components/Footer/Footer";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  const theme = "dark";

  useEffect(() => {
    import("preline");
  }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between
       bg-[#FEDE7E]  text-black
       ${"theme"} dark:text-white  dark:bg-coffee `}
    >
      <section className="w-full">
        <div className=" p-6">
          <HomePageSlider />
          <Restaurants />
        </div>
        <Footer />
      </section>
    </main>
  );
}
