import Image from "next/image"
import { baseURL } from "../../hooks/envCheck";
import FoodWithDetails from "../../components/FoodWithDetails/FoodWithDetails"

async function getRestaurants() {
    // const session = await getServerSession();

    let res = await fetch(`${baseURL}/api/restaurant`, {
        cache: "no-cache",
    })
    res = await res.json();
    return res;
}



async function page({ params }) {
    //console.log(params.restaurantId)

    const { restaurant } = await getRestaurants();

    const { closeAt, picture, cuisines, name } = restaurant || {};

    //console.log(restaurant.cuisines)

    return (

        <section className="text-gray-600 body-font relative flex items-center min-h-[600px] w-full xl:px-16   ">
            <div className="container px-5 py-24 mx-auto flex flex-wrap   ">
                <div className="flex items-center justify-center msm:flex-col w-full">

                    <div className=" lg:w-3/5 md:w-1/2 xl:w-1/3 2xl:w-1/3 object-cover object-center rounded-lg md:mt-0 mt-12 sticky top-1 " >
                        <div className="group relative overflow-hidden" >
                            <div className="  bg-white shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] overflow-hidden">
                                <Image

                                    className="w-full h-auto rounded-t-xl"
                                    alt="Image Description"
                                    src={picture}
                                    width={300}
                                    height={300}
                                />

                            </div>

                            <div className="absolute w-full h-10 bg-black bg-opacity-30 backdrop-blur-sm transition-all -bottom-10  opacity-0  group-hover:bottom-0 group-hover:opacity-100 rounded-b-xl flex justify-between items-center px-5 text-primary " >
                                {name}
                            </div>
                        </div>

                    </div>

                    {/* second part:- cuisines */}


                    <div className="lg:w-2/5 md:w-1/2 xl:w-2/3 2xl:w-2/3  md:pr-10 p-6   ">

                        {cuisines.map(({ cuisineImg, price, availableAt, isExclusive, name }) => (
                            <FoodWithDetails key={name + price + cuisineImg}
                                name={name}
                                cuisineImg={cuisineImg}
                                price={price}
                                availableAt={availableAt}
                                isExclusive={isExclusive}
                            />
                        ))

                        }

                    </div>

                    {/* --- */}
                </div>
            </div>
        </section>


    )
}
export default page