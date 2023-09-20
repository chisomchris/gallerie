'use client'

import Link from "next/link"

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <div className="wrapper">
                    <h1 className='text-2xl italic font-semibold mt-8 mb-6'><span className='text-[3rem] text-pink-700'>G</span>allerie</h1>
                    <h2 className="mb-4">404 - Page Not Found!</h2>
                    <Link href='/' className="text-pink-700">Go Home</Link>
                </div>
            </body>
        </html>
    )
}