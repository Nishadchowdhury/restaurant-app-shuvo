import Link from "next/link"
import facebook from "public/assets/svgs/facebook.svg"
import instagram from "public/assets/svgs/instagram.svg"
import youtube from "public/assets/svgs/youtube.svg"
import messenger from "public/assets/svgs/messenger.svg"
import linkdIn from "public/assets/svgs/LinkdIn.svg"
import link from "public/assets/svgs/Link.svg"
import Image from "next/image"


function Footer() {
    return (

        <div className="bg-blue-900 h-60 text-white" >
            <div className="h-full w-full flex flex-row items-center  justify-around ">
                <div className="flex flex-col" >
                    <Link href={'/'}> Name Store </Link>
                    <Link href={'/'}> Visit All Restaurant </Link>
                    <Link href={'/'}> See All Categories </Link>
                </div>

                <div className="2xl:flex xl:flex lg:flex md:flex flex-col hidden " >
                    <Link href={'/'}> Names career</Link>
                    <Link href={'/'}> Privacy policy</Link>
                    <Link href={'/'}> Refund Policy</Link>
                    <Link href={'/'}> Terms & conditions</Link>
                </div>

                <div className="flex flex-col">
                    Call us in 10AM-7PM
                    <a href="tel:+8801986999889">(+880) 1986999889</a>
                </div>

                <div className="flex flex-col justify-center" >
                    <h1 className="text-center pb-1">Connect us on <Image className="inline invert -mt-1" src={link} alt="link" height={20} width={20} /> </h1>
                    <div className="flex flex-row items-center justify-center gap-1">
                        <Link href={'/'}>  <Image id="facebook" src={facebook} alt="facebook" width={40} height={40} />  </Link>
                        <Link href={'/'}>  <Image id="instagram" src={instagram} alt="instagram" width={40} height={40} />  </Link>
                        <Link href={'/'}>  <Image id="youtube" src={youtube} alt="youtube" width={43} height={43} />  </Link>
                        <Link href={'/'}>  <Image id="messenger" src={messenger} alt="messenger" width={40} height={40} />  </Link>
                        <Link href={'/'}>  <Image id="linkdIn" src={linkdIn} alt="linkdIn" width={40} height={40} />  </Link>

                    </div>
                </div>

            </div>
            <div className="h-6 bg-blue-950 text-center text-white " >
                Copyright © {`"Name"`} 2023. All Rights Reserved.
            </div>
        </div>
    )
}
export default Footer