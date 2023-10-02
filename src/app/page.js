import HomePageSlider from "./components/Sliders/HomePageSlider";
import Restaurants from "./components/Restaurants/Restaurants";
import Footer from "./components/Footer/Footer";
import Foods from "./components/foodItems/Foods";
import CartModal from "./components/Modals/CartModal";

export default function Home() {
  const theme = "dark";

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between
     
       ${"theme"}    `}
    >
      <section className="w-full  bg-background  ">
        <div className=" p-6">
          <HomePageSlider />
          <Restaurants />
          {/* <Restaurants /> */}

          <Foods />
        </div>
        <Footer />
      </section>
    </main>
  );
}
