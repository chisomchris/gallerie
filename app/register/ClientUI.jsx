"use client"
import { useFormik } from "formik"
import * as yup from 'yup'
import { useState } from "react"
import { Input, PasswordInput } from "@/app/components/Inputs"
import Link from "next/link"
import { Button } from "@/app/components/Button"

export const Register = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const onSubmit = async (values) => {
        try {
            setLoading(true)
            const { email, password } = values
            const response = await fetch('/api/users', {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password
                }),
                headers: {
                    "Content-Type": 'application/json'
                }
            }
            )

            if (!response.ok || response.error) {
                setError('Invalid email or password')
            }
        } catch (error) {
            setError(error?.message || 'An error occured')
        } finally {
            setLoading(false)
        }
    }

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: yup.object().shape({
            email: yup.string().trim().email('Invalid email address').required('email is required'),
            password: yup.string().required('password is required'),
            confirm_password: yup.string().required('confirm password is required').oneOf([yup.ref('password')], "passwords must match")
        }),
        onSubmit
    })

    return (
        <div className="min-h-screen py-16 wrapper grid place-items-center">
            <div className="max-w-2xl">
                <h2 className='text-2xl italic font-semibold mb-3'><span className='text-[3rem] text-pink-700'>G</span>allerie</h2>
                <p className='mb-6'>Register now to get exclusive images for your eyes satisfaction</p>
                <form onSubmit={formik.handleSubmit} onChange={e => {
                    if (error) { setError('') }
                }}>
                    <Input name='email' type={'email'} formik={formik} placeholder='example@gmail.com' aria-label='Email address' />
                    <PasswordInput name='password' type={'password'} formik={formik} placeholder='password' aria-label='password' />
                    <PasswordInput name='confirm_password' type={'confirm_password'} formik={formik} placeholder='confirm password' aria-label='confirm password' />
                    {error && <p className="text-red-500">{error}</p>}
                    <Button label={'Register'} loading={loading} />
                </form>
                <p className="pt-6">Already have a Gallerie account? <Link href='/auth/login' className="ml-2 font-[500] text-pink-700">Login Here</Link></p>
            </div>
        </div>
    )
}