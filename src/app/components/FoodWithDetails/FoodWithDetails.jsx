import Image from "next/image";
import { IoFastFood } from "react-icons/io5";
import AddToCart from "./AddToCart"

function FoodWithDetails({ cuisineImg, price, availableAt, isExclusive, name, quantity, setCheck }) {

    const food = {
        cuisineImg: cuisineImg,
        price: price,
        availableAt: availableAt,
        isExclusive: isExclusive,
        name: name
    }

    return (
        <div className={`${setCheck && "text-sm"} msm:text-xs flex relative pb-2 text-primary `} >
            <div className={`${setCheck && "hidden"}  msm:hidden h-full w-10 absolute inset-0 flex items-center justify-center`}>
                <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>
            <div className={`${setCheck && "hidden"}  msm:hidden flex-shrink-0 w-10 h-10 rounded-full bg-orange-400 bg-opacity-60 inline-flex items-center justify-center  relative z-10`}>
                <IoFastFood style={{ scale: "1.5" }} />
            </div>

            <div className="msm:pl-0 flex-grow pl-4  ">
                <h2 className="font-medium title-font text-sm mb-1 tracking-wider ">{name}</h2>

                <div className="rounded-md overflow-hidden flex flex-row gap-3   ">
                    <div className="w-3/4 flex flex-row gap-3">
                        <Image width={150} height={150} src={cuisineImg} alt="cuisineImg" className="rounded-md overflow-hidden" />

                        <div>
                            <span> Price:- {price} BDT </span>
                            <br />
                            Serving restaurant:- <span className="rounded-full bg-orange-400 inline-block px-2 py-1" >
                                {availableAt}
                            </span>

                            <br />

                            {isExclusive && <span className="text-green-600"> {"It's an exclusive item.!"} </span>}

                        </div>
                    </div>
                    <div className="w-1/4 flex items-center justify-center  ">
                        <AddToCart food={food} cartQuantity={quantity} setCheck={setCheck} />

                    </div>



                </div>


            </div>
        </div>
    )
}
export default FoodWithDetails