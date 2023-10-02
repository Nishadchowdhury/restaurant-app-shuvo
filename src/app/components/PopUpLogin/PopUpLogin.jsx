"use client"

import Button from "../Button/Button"
import googleSVG from '/public/assets/svgs/google.svg'
import facebookSVG from '/public/assets/svgs/facebook.svg'
import Image from "next/image"
import { signIn, signOut, useSession } from 'next-auth/react';

function PopUpLogin() {




    return (
        <div className='w-full flex gap-7 ' >
            <Button
                className={'w-1/2 bg-black bg-opacity-20 '}

                onClick={() => signIn("google")}

            >
                <div className='w-full flex items-center justify-evenly h-full' > <Image className='inline' src={googleSVG} alt='googleSVG' width={30} height={0} /> Login with google </div>
            </Button>
            <Button className={'w-1/2 bg-black bg-opacity-20'} onClick={() => window.alert("login with google")} >
                <div className='w-full flex items-center justify-evenly h-full' > <Image className='inline' src={facebookSVG} alt='facebookSVG' width={30} height={0} /> Login with facebook </div>
            </Button>
        </div>
    )
}
export default PopUpLogin