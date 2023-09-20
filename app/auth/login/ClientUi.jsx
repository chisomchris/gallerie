'use client'
import { useFormik } from "formik"
import * as yup from 'yup'
import { signIn } from 'next-auth/react'
import { useState } from "react"
import { Input, PasswordInput } from "@/app/components/Inputs"
import Link from "next/link"
import { Button } from "@/app/components/Button"
import { useSearchParams, useRouter } from 'next/navigation'


export const Login = () => {
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const searchParams = useSearchParams()
    const router = useRouter()
    const callbackUrl = searchParams.get('calbackUrl') || '/'
    const onSubmit = async (values) => {
        try {
            setLoading(true)
            const { email, password } = values
            const response = await signIn('credentials', {
                email,
                password,
                redirect: false,
                callbackUrl
            })
            if (!response.ok || response.error) {
                return setError('Invalid email or password')
            }
            if (!response?.error) {
                router.push(callbackUrl)
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
            password: yup.string().required('password is required')
        }),
        onSubmit
    })

    return (
        <div className="min-h-screen py-16 wrapper grid place-items-center">
            <div className="max-w-2xl">
                <h2 className='text-2xl italic font-semibold mb-3'><span className='text-[3rem] text-pink-700'>G</span>allerie</h2>
                <p className='mb-6'>Login now to get to view exclusive images to your eyes&#39; satisfaction</p>
                <form onSubmit={formik.handleSubmit} onChange={e => {
                    if (error) { setError('') }
                }}>
                    <Input name='email' type={'email'} formik={formik} />
                    <PasswordInput name='password' formik={formik} />
                    {error && <p className="text-red-500">{error}</p>}
                    <Button label={'Login'} loading={loading} />
                </form>
                <p className="pt-6">New to Gallerie? <Link href='/register' className="ml-2 font-[500] text-pink-700">Create an account</Link></p>
            </div>
        </div>
    )
}