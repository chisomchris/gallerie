'use client'

export default function GlobalError({ error, reset }) {
    return (
        <html>
            <body>
                <div className="wrapper">
                    <h2 className='text-2xl italic font-semibold'><span className='text-[3rem] text-pink-700'>G</span>allerie</h2>
                    <h2 className="my-6">Something went wrong!</h2>
                    <button onClick={() => reset()}>Try Again</button>
                </div>
            </body>
        </html>
    )
}