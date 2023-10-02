"use client"
function Input({ submit, onChange, placeholder, value, type, className, name, ...rest }) {

    const varClass = `bg-inherit block rounded-md shadow-sm  text-sm focus:z-10 
     dark:bg-slate-900 dark:border-gray-700 text-white bg-transparent  placeholder:text-white 
     ${className}`

    return (
        <>{type === "submit" ?
            <input className={varClass}
                onClick={submit}
                placeholder={placeholder}
                type="submit"
                value={placeholder}
                {...rest}
            />
            :
            <input
                className={varClass}
                name={name || ""}
                type={type || "text"}
                onChange={(e) => onChange(prev => ({ ...prev, value: e.target.value, }))}
                value={value}
                placeholder={placeholder}


                {...rest}
            />}

        </>
    )
}
export default Input