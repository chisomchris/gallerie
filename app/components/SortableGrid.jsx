import Image from 'next/image'
import { useRef, useEffect, useState } from 'react'
import Sortable from 'sortablejs'
import { useAppContext } from './ContextProvider'

export const SortableGrid = () => {
    const gridRef = useRef(null)
    const sortableRef = useRef(null)
    const { photos, setPhotos } = useAppContext()

    useEffect(() => {
        const onListChange = () => {
            const newData = [...gridRef.current.children]
                .map(i => i.dataset.id)
                .map(id => photos.find(photo => String(photo.id) === String(id)))
            setPhotos(newData)
        }

        sortableRef.current = new Sortable(gridRef.current, {
            animation: 150,
            onEnd: onListChange
        })
    }, [])

    return (
        <ul ref={gridRef} className='grid gap-4 sm:gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 xl:grid-cols-4'>
            {
                photos.map(({ id, src, tags }) => <li key={id} data-id={id}>
                    <Card tags={tags} src={src} />
                </li>)
            }
        </ul>
    )
}

const Card = ({ src, tags }) => {
    const [loaded, setLoaded] = useState(false)
    return (
        <div className='shadow-lg reletive'>
            <div className={` w-full aspect-[5/3] bg-[#3338]`} >
            <Image src={src} alt={tags.join(' ')} width={400} height={200} className={`w-full aspect-[5/4] object-center object-cover`} onLoad={(e) => { setLoaded(true) }} />
            </div>
            <div>
                <ul className='flex items-center flex-wrap px-1 py-3 gap-4'>
                    {
                        tags.map((tag, index) => <button key={index} className='capitalize border-[#2228] border-[1px] border-solid rounded-sm py-0 px-2'>{tag}</button>)
                    }
                </ul>
            </div>
        </div>
    )
}