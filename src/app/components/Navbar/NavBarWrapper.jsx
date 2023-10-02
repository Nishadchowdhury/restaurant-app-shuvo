"use client"
import { useState } from "react"
import CartModal from "../Modals/CartModal"
import Navbar from "./Navbar"
import { useSession } from "next-auth/react"
import AddAddress from "../AddAddress/AddAddress"

function NavBarWrapper() {

  const [modal, setModal] = useState(false)
  const [modalAddress, setModalAddress] = useState(true)
  const { data: session, status } = useSession()

  return (
    <>
      <Navbar showModal={setModal} session={session} />
      <CartModal visible={modal} showModal={setModal} />
      {/* <AddAddress session={session} visible={modalAddress} showModal={setModalAddress} /> */}
    </>
  )
}
export default NavBarWrapper