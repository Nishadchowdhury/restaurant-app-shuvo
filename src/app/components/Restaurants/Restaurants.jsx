"use client"
import Image from "next/image"
import { useEffect, useState } from "react";
import { Grid, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react"
import SingleRestaurant from "./SingleRestaurant";



function Restaurants() {

    const [restaurants, setRestaurants] = useState([])

    useEffect(() => {

        async function getData() {
            const res = await fetch("/restaurants.json");
            const data = await res.json()
            setRestaurants(data)
        }

        getData()
    }, [])


    return (
        <div className="  mt-7 "  >
            <h1 className="text-center text-2xl font-bold "> All Restaurants </h1>
            <div className="border-dashed border-2 border-gray-600 rounded-md grid gap-4 grid-cols-2 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3  mt-6  p-3 ">



                {
                    restaurants && restaurants.map(({ name, picture, _id, price }) => (

                        <SingleRestaurant key={_id} picture={picture} name={name} id={_id} />

                    ))
                }

            </div>  </div>
    );
}
export default Restaurants



