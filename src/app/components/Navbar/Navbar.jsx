import Image from "next/image"
import Link from "next/link"
import { BsCart2 } from 'react-icons/bs';
import MenuDropDown from "./MenuDropDown";
import SearchBox from "./SearchBox";

function Navbar() {

    return (

        <header className="flex flex-wrap  sm:justify-start sm:flex-nowrap z-50 w-full 
       bg-caramel text-sm py-1 dark:bg-coffee 
        sticky top-0



        ">
            <nav className=" pl-12 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
                <div className="flex items-center justify-between">
                    <Link href={'/'}>  <Image src={'/assets/imgs/logo.png'} alt="logo" width={100} height={100} className="w-[65px] " /></Link>
                    <div className="sm:hidden">
                        <button type="button" className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                            <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div id="navbar-collapse-with-animation" className="hs-collapse hidden transition-all duration-300 basis-full grow sm:block">


                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
                        <SearchBox />
                        {/* <MenuDropDown />

                        <Link href={'/'}
                            className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium w-fit
                
                            shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 
                            focus:ring-offset-white transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"

                        >Restaurants
                        </Link> */}

                        {false ? <div className="flex items-center gap-4" >
                            <Image
                                width={40}
                                height={40}
                                alt="userName"
                                className="rounded-full"
                                src={"https://nishadchowdhury.netlify.app/static/media/avatar.d31a77cfec8e0748d8e2.jpg"} />
                            <p className=" dark:text-white poppins md:block lg:block">{"userName"}</p>
                        </div> : (
                            <>
                                <Link href={'/login'}
                                    className=" py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium w-fit
                
                            shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-1 
                            focus:ring-offset-white transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"

                                >Login
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

