import SingleFood from './SingleFood'
import { baseURL } from "../../hooks/envCheck";

async function getData() {
    const res = await fetch(`${baseURL}/api/cuisines`);
    const data = await res.json()

    return { data: data.status, cuisines: data.cuisineList };
}

async function Foods() {
    const { cuisines } = await getData();

    return (
        <div className="  mt-7 "  >
            <h1 className=" ml-14 text-2xl font-bold "> {`Name's cuisines`} </h1>
            <div className="border-dashed border-2 border-gray-600 rounded-md grid gap-4 grid-cols-2 2xl:grid-cols-6 xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3  mt-6  p-3 ">





                {
                    cuisines && cuisines.map(({ cuisineId, cuisineData }) => (

                        <SingleFood picture={cuisineData.cuisineImg} name={cuisineData.name} id={cuisineId} key={cuisineId} />

                    ))
                }

            </div>  </div>
    );
}
export default Foods



