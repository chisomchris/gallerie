'use client'
import { useAppContext } from './ContextProvider'

export const Header = () => {
    const { filter, onChange } = useAppContext()

    return (
        <header className='shadow-md sticky top-0 bg-white left-0'>
            <div className='wrapper flex items-center justify-between gap-8'>
                <h1 className='font-bold text-3xl'>Gallerie</h1>
                <input type='search' onChange={onChange} value={filter} placeholder='Search Here...' className='px-4 py-1 w-full border-[1px] border-[#3333] border-solid outline-none focus:border-[#333e] sm:w-fit' />
            </div>
        </header>
    )
}
