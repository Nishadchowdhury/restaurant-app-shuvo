import Image from "next/image"
import Link from "next/link"

function SingleRestaurant({ name, picture, id, }) {




    return (
        <Link href={`/restaurant/${id}`} >

            <div class="flex hover:scale-105 transition-all flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] overflow-hidden">
                <Image

                    class="w-full h-auto rounded-t-xl  hover:scale-105 overflow-hidden transition-all "
                    alt="Image Description"
                    src={picture}
                    width={100}
                    height={100}
                />
                <div class="p-4 md:p-5">
                    <h3 class="text-lg font-bold text-gray-800 dark:text-white">
                        Visit restaurant
                    </h3>


                </div>
            </div>
        </Link>
    )
}
export default SingleRestaurant