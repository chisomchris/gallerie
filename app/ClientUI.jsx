'use client'
import { ContextProvider } from "./components/ContextProvider";
import { Header } from "./components/Header";
import { SortableGrid } from "./components/SortableGrid";

export const ClientUI = () => {
    return (
        <ContextProvider>
            <Header />
            <main>
                <div className="wrapper">
                    <SortableGrid />
                </div>
            </main>
            <footer className="pt-12">
                <div className='wrapper flex flex-wrap gap-y-4 gap-x-12 items-end'>
                    <h2 className='text-2xl italic font-semibold'><span className='text-[3rem] text-pink-700'>G</span>allerie</h2>
                    <p className='text-xl text-[#666]'>&copy; {new Date().getFullYear()}, Created by Chisomchris</p>
                </div>
            </footer>
        </ContextProvider>
    );
}
