"use client"
import { usePathname } from 'next/navigation'
import { useState } from "react";
import Form from "../components/Form/Form";
import Input from "../components/Inputs/Input";
import Image from "next/image";
import logo from '/public/assets/imgs/logo.png'
import Link from 'next/link';
import Button from '../components/Button/Button';
import PopUpLogin from '../components/PopUpLogin/PopUpLogin';
import CreateUser from '../components/createUser/CreateUser';



function Login() {

    const [email, setEmail] = useState({ value: "", error: "" })
    const [password, setPassword] = useState({ value: "", error: "" })
    const [loginMode, setLoginMode] = useState(true)

    const submitLogin = (e) => {
        if (email?.value.includes("@") && password.value) {
            e.preventDefault();
            //other login logics

            window.alert(email.value + password.value + "")
        }
    }


    return (
        <div className={`baseGradient transition-all duration-1000 h-screen relative overflow-hidden w-full mx-auto flex flex-col items-center justify-center  `} >

            <div className={`pt-${loginMode ? "20" : "5"}  bg-black bg-opacity-30 z-10 w-full h-full flex items-center flex-col justify-start backdrop-blur-lg `} >
                <Link href={"/"} > <Image src={logo} width={100} height={100} alt="log" /> </Link>

                <h1 className="text-3xl mb-8" >{loginMode ? "Login" : "Sign in"} with</h1>


                <div className='w-full ' >



                    <div className='w-1/2 mx-auto text-black ' >
                        {loginMode ?

                            <Form className="flex mx-auto w-3/4 flex-col items-center justify-center " >

                                <Input className={"my-3 m-2 w-full p-3 bg-transparent border "}
                                    onChange={setEmail} value={email.value} placeholder={"email"} type={"email"} name={"email"} required={true}
                                />



                                <Input className={"my-3 m-2 w-full p-3 bg-transparent border "}
                                    onChange={setPassword} value={password.value} placeholder={"password"} type={"password"} name={"password"} required={true} />


                                <Input type={'submit'} submit={submitLogin} placeholder={"Login"} className={`text-white w-full p-3 cursor-pointer border transition-all duration-1000 `} />
                            </Form>
                            :
                            <CreateUser />
                        }
                    </div>

                    <div className='w-1/2 mx-auto flex flex-col items-center justify-center  ' >
                        <div className='mb-1' >
                            <span className=' inline-block w-20 h-0.5  bg-primary -translate-y-[3px] mx-6  '>
                            </span>
                            <span>OR</span>
                            <span className=' inline-block w-20 h-0.5  bg-primary -translate-y-[3px] mx-6  '>
                            </span>
                        </div>

                        <div className='h-auto  w-3/4' >
                            <PopUpLogin />

                            <h1 className='text-center mt-2 cursor-default' > {loginMode ? "New here?" : " Already have an account? "} <strong className='cursor-pointer hover:underline' onClick={() => setLoginMode((prev) => !prev)} >{loginMode ? " Create an account" : " Log in"}</strong>  </h1>
                        </div>


                    </div>
                </div>
            </div>

            <svg className='absolute bottom-0 z-1 ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"> <path fill="#0099ff" fillOpacity="1" d="M0,256L60,240C120,224,240,192,360,192C480,192,600,224,720,250.7C840,277,960,299,1080,256C1200,213,1320,107,1380,53.3L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
            </svg>
        </div>
    )
}
export default Login