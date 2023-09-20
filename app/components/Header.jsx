'use client'
import { useState } from 'react'
import { useAppContext } from './ContextProvider'
import { FaBars } from 'react-icons/fa'
import { TbLogout } from 'react-icons/tb'
import { signOut, useSession } from 'next-auth/react'

export const Header = () => {
    const { filter, onChange } = useAppContext()
    const [showMenu, setShowMenu] = useState(false)
    const { data: session } = useSession()
    const onClick = () => {
        setShowMenu(v => !v)
    }
    const logOut = async () => {
        await signOut()
    }
    return (
        <header className='shadow-md sticky top-0 bg-white left-0'>
            <div className='wrapper flex items-center'>
                <h1 className='font-bold text-3xl italic mr-6 flex flex-nowrap items-end'><span className='text-pink-700 text-5xl'>G</span><span className='hidden min-[420px]:inline-block'>allerie</span></h1>
                <input type='search' onChange={onChange} value={filter} placeholder='Search Here...' className='ml-auto px-4 py-1 w-full border-[1px] border-[#3333] border-solid outline-none focus:border-[#333e] sm:w-fit md:mr-auto' />
                <button className='ml-2 px-2 py-2 rounded-sm active:bg-pink-100 focus:bg-pink-100 md:hidden'><FaBars className='text-pink-700 text-2xl' onClick={onClick} /></button>
                <div className='hidden ml-8 md:flex md:gap-4 md:items-center'>
                    <h3>{session?.user?.email}</h3>
                    <button className='ml-4 inline-flex items-center py-1 px-5 bg-pink-700 text-white' onClick={logOut}>Logout <TbLogout className='text-white ml-2' /></button>
                </div>
                <div className={`${showMenu ? 'block md:hidden' : 'hidden'} absolute top-full right-0 min-w-[18rem] bg-white py-8`}>
                    <div className='pr-[5%] pl-[2rem]'>
                        <h3 className='py-4 w-full'>{session?.user?.email}</h3>
                        <button className='py-4 flex items-center w-full hover:bg-pink-100' onClick={logOut}>Logout <TbLogout className='ml-2 text-2xl' /></button>
                    </div>
                </div>
            </div>
        </header>
    )
}
