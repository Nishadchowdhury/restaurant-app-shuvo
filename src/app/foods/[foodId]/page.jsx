import Image from "next/image"
import Link from "next/link";
import { baseURL } from "../../hooks/envCheck";
import { TbCurrencyTaka } from "react-icons/tb"
import { HiShoppingBag } from "react-icons/hi2";
import Button from "../../components/Button/Button";
import useCartToLocalStorage from "../../hooks/useAddToCart";
import isMounted from "../../hooks/useMounted";



async function getFood(foodId) {

    let res = await fetch(`${baseURL}/api/cuisine`, {
        next: { revalidate: 10000 },
        headers: { foodId: foodId },
    },
    )
    res = await res.json();
    return res;
}




async function page({ params }) {
    const { food } = await getFood(params?.foodId);

    const { cuisineImg, isExclusive, availableAt, findWith, name, price, } = food || {};

    const customProps = { from: "occupation" };


    return (
        <section className="text-primary body-font overflow-hidden">
            <div className="container px-5  mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">

                    <Image alt="ecommerce" className="lg:w-1/2 w-full h-80 object-cover object-center rounded"
                        src={cuisineImg}

                        width={400} height={400} />
                    <div className="relative lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font  tracking-widest uppercase ">cuisine NAME</h2>
                        <h1 className=" text-3xl title-font font-medium mb-1 underline">{name}</h1>
                        <div className="flex flex-col my-4 ">
                            <h2 className="text-sm title-font  tracking-widest uppercase ">Restaurant NAME</h2>
                            <h1 className=" text-3xl title-font font-medium mb-1 underline">{availableAt}</h1>

                            {isExclusive && <span className="text-green-600  mt-4 "> {"It's an exclusive item.!"} </span>}
                        </div>


                        <div className="flex justify-between xl:absolute 2xl:absolute bottom-0 w-full">
                            <div className="flex flex-row items-center ml-2 text-xl "> {price} <span className="inline scale-110" >
                                <TbCurrencyTaka /></span> </div>

                            <div className="flex flex-row items-center justify-center">
                                <Link href={{
                                    pathname: `/checkout/${params?.foodId}`,
                                    query: food
                                }}>
                                    <button className="py-3 px-4 flex flex-row items-center justify-center gap-3 bg-primary bg-opacity-10 rounded-md hover:opacity-75 transition-all" >
                                        Place order <HiShoppingBag />
                                    </button>
                                </Link>


                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}
export default page