
"use client"

import { useEffect } from "react"

function Form({ children, onSubmit, className }) {



    return (
        <form onSubmit={onSubmit} className={className}>
            {children}
        </form>
    )
}
export default Form