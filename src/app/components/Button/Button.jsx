function Button({ className, onClick, text, children }) {

    return (
        <button

            onClick={onClick}
            type="button" class={`py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-inherit font-semibold   focus:ring-gray-800 transition-all text-sm dark:hover:bg-gray-900 dark:border-gray-900 dark:hover:border-gray-900 dark:text-white dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800 hover:rounded-full  ${className}`}>


            {children ? children : (text || "Button")}

        </button>
    )
}
export default Button