
import Image from "next/image"
import Link from "next/link"
import { BiRightArrowCircle } from "react-icons/bi";


function SingleFood({ name, picture, id, }) {




    return (
        <Link href={`/foods/${id}`} >

            <div className="group relative hover:scale-105 transition-all overflow-hidden" >
                <div className="  bg-white shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] overflow-hidden">
                    <Image

                        className="w-full h-auto rounded-t-xl  group-hover:scale-105 overflow-hidden transition-all group-hover:brightness-50 "
                        alt="Image Description"
                        src={picture}
                        width={100}
                        height={100}
                    />

                </div>

                <div className="absolute w-full h-10 bg-black bg-opacity-30 backdrop-blur-sm transition-all -bottom-10  opacity-0  group-hover:bottom-0 group-hover:opacity-100 rounded-b-xl flex justify-between items-center px-5 " >
                    {name}

                    <BiRightArrowCircle className="scale-125" />
                </div>
            </div>
        </Link>
    )
}
export default SingleFood