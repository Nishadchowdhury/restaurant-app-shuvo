"use client"
import { usePathname } from 'next/navigation'
import Image from "next/image"
import Link from "next/link"
import { BsArrowRightSquare } from 'react-icons/bs';
import SearchBox from "./SearchBox";
import Button from "../Button/Button";
import { useEffect, useState, } from "react";
import { signOut, useSession } from 'next-auth/react';
import { FaCartShopping } from "react-icons/fa6"
import CartModal from '../Modals/CartModal';

function Navbar({ showModal, session }) {

    const [cart, serCart] = useState([]);

    useEffect(() => {
        // import("preline");
        typeof window !== "undefined" && serCart(JSON.parse(localStorage.getItem("userCart")) || [])
    }, []);

    const pathname = usePathname()

    const hiddenPaths = ['/login',]

    const isShow = () => {
        ////console.log("isShow()")

        if (hiddenPaths.includes(pathname)) {
            return false
        } else {
            return true
        }

    }

    if (pathname.includes('/restaurant/')) {
        setTimeout(() => {
            typeof window !== "undefined" && serCart(JSON.parse(localStorage.getItem("userCart")) || [])
        }, 1000);
    }

    return (

        <header className={`flex flex-wrap  backdrop-blur-sm sm:justify-start sm:flex-nowrap z-50 w-full sticky top-0 ${!isShow() && "hidden"} `}>
            <nav className=" pl-12 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-between">
                    <Link href={'/'}>  <Image src={'/assets/imgs/logo.png'} alt="logo" width={100} height={100} className="w-[65px] " /></Link>
                    <div className="sm:hidden">

                        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden transition-all duration-300 basis-full grow sm:block">


                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">



                        <button onClick={() => showModal(p => !p)} >
                            <span className="relative inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200">
                                <FaCartShopping />
                                <span className='absolute bg-primary top-0 right-0 text-black rounded-full min-w-[20px] text-center' >{cart?.length || ""}</span>
                            </span>
                        </button>




                        <SearchBox />

                        {session ? <div className="flex items-center gap-4" >
                            <Image
                                width={40}
                                height={40}
                                alt="userName"
                                className="rounded-full"
                                src={`${session.user.image} ` || " https://nishadchowdhury.netlify.app/static/media/avatar.d31a77cfec8e0748d8e2.jpg"} />
                            <p className=" dark:text-white poppins md:block lg:block">{session.user.name}</p>

                            <button onClick={() => signOut()} >     <BsArrowRightSquare style={{ width: "20px", height: "20px" }} /> </button>

                        </div> : (
                            <>
                                <Link href={'/login'}
                                >
                                    <Button className={'text-white'} text={"Login"} />
                                </Link>

                            </>
                        )}

                    </div>


                </div>
            </nav>
        </header >


    )
}
export default Navbar

