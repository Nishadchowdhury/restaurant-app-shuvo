'use client'
import Form from "../Form/Form"
import { useState } from "react"
import Input from "../Inputs/Input";

function CreateUser() {
    const [name, setName] = useState({ value: "", error: "" });
    const [email, setEmail] = useState({ value: "", error: "" });
    const [phone, setPhone] = useState({ value: "", error: "" });
    const [password, setPassword] = useState({ value: "", error: "" });
    const [confirmPassword, setConfirmPassword] = useState({ value: "", error: "" });


    function submitSignIn(e) {
        if (password.value !== confirmPassword.value) {
            e.preventDefault();
            return window.alert('passwords are not the same')
        }

        if (email?.value?.includes("@") && password?.value && name?.value && confirmPassword?.value) {
            e.preventDefault();
            //other creation logics

            ////console.log(42432423)
        }
    }


    return (

        <Form onSubmit={submitSignIn} className="flex mx-auto w-3/4 flex-col items-center justify-center " >

            <Input className={"my-3 m-2 w-full p-3 bg-transparent border "}
                onChange={setName} value={name?.value} placeholder={"Name"} type={"text"} name={"name"} required={true}
            />

            <Input className={"my-3 m-2 w-full p-3 bg-transparent border "}
                onChange={setPhone} value={phone?.value} placeholder={"Phone"} type={"tel"} name={"phone"} required={true}
            />


            <Input className={"my-3 m-2 w-full p-3 bg-transparent border "}
                onChange={setEmail} autoComplete={true} value={email?.value} placeholder={"Email"} type={"email"} name={"email"} required={true}
            />


            <Input className={"my-3 m-2 w-full p-3 bg-transparent border "}
                onChange={setPassword} autoComplete={false} value={password?.value} minLength={6} placeholder={"password"} type={"password"} name={"password"} required={true}
            />


            <Input className={"my-3 m-2 w-full p-3 bg-transparent border "}
                onChange={setConfirmPassword} autoComplete={false} value={confirmPassword?.value} minLength={6} x placeholder={"password"} type={"password"} name={"password"} required={true}
            />


            <Input type={'submit'} placeholder={"Sign In"} className={`text-white w-full p-3 cursor-pointer border transition-all duration-1000
        `} />
        </Form>
    )
}
export default CreateUser