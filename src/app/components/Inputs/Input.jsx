"use client"
function Input({ submit, onChange, placeholder, value, type, className, name, ...rest }) {

    const inputClass = ` bg-inherit block rounded-md shadow-sm  text-sm focus:z-10 
     dark:bg-slate-900 dark:border-gray-700 text-black ${className}`

    return (
        <>{type === "submit" ?


            <input className={inputClass}
                onClick={submit}
                placeholder={placeholder}
                type="submit"
                value={placeholder}
                {...rest}
            />

            :


            <input
                class={inputClass}

                name={name || ""}
                type={type || "text"}
                onChange={(e) => onChange(e.target.value)}
                value={value}
                placeholder={placeholder}
                {...rest}
            />}

        </>
    )
}
export default Input