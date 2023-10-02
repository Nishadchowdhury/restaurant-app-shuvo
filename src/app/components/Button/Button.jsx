"use Client"
function Button({ className, onClick, children }) {

    return (
        <button

            onClick={onClick}
            type="button" className={`py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-inherit font-semibold   focus:ring-gray-800 transition-all text-sm dark:hover:bg-gray-900 dark:border-gray-900 hover:rounded-full   ${className}`}>


            {children ? children : (text || "Button")}

        </button>
    )
}
export default Button