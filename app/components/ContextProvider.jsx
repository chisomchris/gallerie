import { createContext, useContext, useState,useEffect } from 'react'
import { photos as PHOTOS } from '../constants'
const AppContext = createContext()

export const ContextProvider = ({ children }) => {
    const [photos, setPhotos] = useState(PHOTOS)
    const [filter, setFilter] = useState('')
    const [tag, setTag] = useState('')

    const onChange = (e) => {
        setFilter(e.target.value)
    }

     useEffect(() => {
        const filtered = PHOTOS.filter(photo => photo.tags.some(item => item.includes(filter.toLowerCase())))
        setPhotos(filtered)
    }, [filter, setPhotos])

    return (
        <AppContext.Provider value={{ photos, filter, tag, setPhotos, onChange }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)