import SingleRestaurant from '../Restaurants/SingleRestaurant'
import { baseURL } from '../../hooks/envCheck';
// import { getServerSession } from 'next-auth';


async function getRestaurants() {
    // const session = await getServerSession();

    let res = await fetch(`${baseURL}/api/restaurants`, {
        next: { revalidate: 5 }
    })
    res = await res.json();
    return res?.restaurantList;
}

async function Restaurants() {
    const restaurants = await getRestaurants()

    return (
        <div className="mt-7">
            <h1 className="ml-14 text-2xl font-bold "> Order By Restaurants </h1>
            <div className="border-dashed border-2 border-gray-600 rounded-md grid gap-4 grid-cols-2 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3  mt-6  p-3 ">


                {restaurants && restaurants.map(({ restaurantId, restaurantData }) => (

                    <SingleRestaurant key={restaurantId} id={restaurantId} picture={restaurantData?.picture} name={restaurantData?.name} />
                ))}

            </div>  </div>
    );
}
export default Restaurants



