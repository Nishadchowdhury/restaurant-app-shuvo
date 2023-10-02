"use client"
import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'
import { TbCurrencyTaka } from "react-icons/tb"
import Image from "next/image";
import getTotalPrice from "../../hooks/getTotalPrice";
import banner from "../../../../public/assets/imgs/checkoutPage.png"

function checkoutType({ params }) {
    const searchData = useSearchParams();


    const cuisineImg = searchData.get('cuisineImg')
    const isExclusive = searchData.get('isExclusive')
    const availableAt = searchData.get('availableAt')
    const findWith = searchData.get('findWith')
    const name = searchData.get('name')
    const price = searchData.get('price')

    const food = {
        cuisineImg,
        isExclusive,
        availableAt,
        findWith,
        name,
        price
    }

    const [foods, setFoods] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        if (params.checkoutType === "cartDataOnly") {
            const cartData = JSON.parse(localStorage.getItem("userCart")) || []
            setFoods(cartData)
            setTotalPrice(getTotalPrice(cartData))
        } else {
            setTotalPrice(food.price)
            setFoods([food])
        }
    }, [params])


    return (
        <section className="text-primary body-font">
            <div className="container mx-auto flex px-5 pt-10 gap-4 md:flex-row flex-col items-start">
                <div className=" h-fit 2xl:h-[80vh] border w-2/6 mb-10 md:mb-0">
                    <Image className="h-full object-center " src={banner} width={500} height={900} alt="img" />


                </div>

                <div className="w-4/6 border md:pl-4 flex flex-col md:items-start md:text-left items-center text-center">
                    <div className="w-full flex flex-col">
                        <div className="-m-1.5 overflow-x-auto">
                            <div className="p-1.5 min-w-full inline-block align-middle">
                                <div className="overflow-hidden">
                                    <table className="min-w-full divide-y divide-gray-700">
                                        <thead className="text-white" >
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase dark:">Picture</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase dark:">Name</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase dark:">Restaurant</th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase dark:">price</th>

                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

                                            {foods.length > 0 ?
                                                foods?.map(({ cuisineImg, availableAt, name, price }) => (
                                                    <tr key={name + price + availableAt}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium h-24 w-36 ">
                                                            <Image className="rounded-md" src={cuisineImg} width={150} height={150} alt="cuisineImg" />
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium ">{name}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm ">{availableAt}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm ">{price}</td>

                                                    </tr>
                                                )) : <tr>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium "> <span> No order found...! </span>
                                                    </td>
                                                </tr>
                                            }
                                        </tbody>

                                        <tfoot>
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium "></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium "></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm "></td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm flex flex-row items-center">Total: {totalPrice} <span > < TbCurrencyTaka /></span> </td>

                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default checkoutType