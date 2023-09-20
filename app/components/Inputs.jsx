"use client"
import { useState } from "react"
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri'

export const Input = ({ name, type, formik, ...rest }) => {
    return (
        <div className="relative py-2">
            <input type={type || 'text'} name={name} {...rest} {...formik.getFieldProps(name)} className={`pr-14 rounded-md w-full py-2 mb-7 pl-6 outline-none text-black border-solid border-[1px] border-pink-100 focus:border-pink-300 ${(formik.touched[name] && formik.errors[name]) && 'border-red-500 focus:border-red-500'} ${(formik.touched[name] && !formik.errors[name]) && 'border-green-400 focus:border-green-400'}`} />
            {formik.touched[name] && formik.errors[name] && <p className="text-red-500 absolute bottom-2">{formik.errors[name]}</p>}
        </div>
    )
}

export const PasswordInput = ({ name, formik, ...rest }) => {
    const [isVisible, setIsVisible] = useState(false)
    const toggleVisibility = () => { setIsVisible(v => !v) }

    return (
        <div className="relative py-2">
            <button type="button" onClick={toggleVisibility} className="absolute right-4 top-5 text-[#666] text-xl">{isVisible ? <RiEyeOffFill /> : <RiEyeFill />}</button>
            <input type={isVisible ? 'text' : 'password'} name={name} {...rest} {...formik.getFieldProps(name)} className={`pr-14 rounded-md w-full py-2 mb-7 pl-6 outline-none text-black border-solid border-[1px] border-pink-100 focus:border-pink-300 ${(formik.touched[name] && formik.errors[name]) && 'border-red-500 focus:border-red-500'} ${(formik.touched[name] && !formik.errors[name]) && 'border-green-400 focus:border-green-400'}`} />
            {formik.touched[name] && formik.errors[name] && <p className="text-red-500 absolute bottom-2">{formik.errors[name]}</p>}
        </div>
    )
}