'use client'
import { useEffect, useState } from "react"
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'
import { MdDeleteForever, } from 'react-icons/md'
import useCartToLocalStorage from "../../hooks/useAddToCart"
var _ = require('lodash');

function AddToCart({ food, cartQuantity, setCheck }) {
    const [quantity, setQuantity] = useState({ value: 0 })

    const { cuisineImg, price, availableAt, name } = food || {};

    const localStorageItem = () => {
        const i = typeof window !== "undefined" && JSON.parse(localStorage.getItem("userCart")) || [];
        const found = i.find(item => {
            return item.name === name && item.price === price && item.availableAt === availableAt && item.cuisineImg === cuisineImg
        });

        setQuantity({ value: found?.quantity || 0 })
        return found;
    }

    setTimeout(() => {
        localStorageItem();
    }, 2000);


    useEffect(() => {
        localStorageItem();
        if (cartQuantity > 0) {
            setQuantity({ value: cartQuantity });
        }
    }, [cartQuantity, setCheck])


    if (quantity.value > 25) {
        setQuantity(prev => ({ ...prev, value: 25 }))
    }
    function cartQuantityManage(e) {


        if (e === "up" && quantity.value < 25) {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useCartToLocalStorage(food, e)
            if (setCheck) {
                setCheck(p => !p)
            }
            setQuantity(prev => ({ ...prev, value: +quantity.value + 1 }))

        }

        if (e === "down" && quantity.value > 1) {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useCartToLocalStorage(food, e)
            if (setCheck) {
                setCheck(p => !p)
            }
            setQuantity(prev => ({ ...prev, value: +quantity.value - 1 }))
        }

        if (e === "delete") {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            useCartToLocalStorage(food, e)
            if (setCheck) {
                setCheck(p => !p)
            }
        }
        localStorageItem();
    }







    return (
        <div className={`opacity-100`} >
            <div className="flex gap-1 bg-gray-800 rounded-full p-1 ">
                <button className=" flex  items-center justify-center" onClick={() => cartQuantityManage("up")} >
                    <span className="inline-block rounded-full overflow-hidden mx-auto" > <  AiFillPlusCircle style={{ width: "25px", height: "25px", color: "#f05900", backgroundColor: "#FFFFFF" }} /></span>
                </button>

                <span className={" text-primary mx-0.5 "} >{quantity.value}</span>

                <button disabled={quantity.value < 2} className="  flex items-center justify-center disabled:opacity-50" onClick={() => cartQuantityManage("down")} >
                    <span className="inline-block rounded-full overflow-hidden mx-auto" > <  AiFillMinusCircle style={{ width: "25px", height: "25px", color: "#f05900", backgroundColor: "#FFFFFF" }} /></span>
                </button>

                <button disabled={quantity.value == 0} className="  flex items-center justify-center disabled:opacity-50" onClick={() => cartQuantityManage("delete")} >
                    <span className="inline-block rounded-full overflow-hidden mx-auto" > <  MdDeleteForever style={{ width: "25px", height: "25px", color: "red", backgroundColor: "#FFFFFF" }} /></span>
                </button>
            </div>

            <button></button>

        </div>
    )
}
export default AddToCart