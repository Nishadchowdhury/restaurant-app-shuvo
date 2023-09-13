"use client"
function Input({ change, placeholder, value }) {
    return (
        <input type="text" id="hs-search-box-with-loading-5" name="hs-search-box-with-loading-5"

            class="py-3 px-4 bg-inherit  pl-11 block w-full  shadow-sm rounded-l-md text-sm focus:z-10 
            focus:border-0
            dark:bg-slate-900 dark:border-gray-700 text-black focus-within:outline-1 outline-offset-2
          placeholder-white

     focus:border-coffee 
        "

            onChange={(e) => change(e.target.value)}
            value={value}
            placeholder={placeholder}>

        </input>
    )
}
export default Input