import {createContext} from 'react'

const MainContext = createContext({
    isResumeOpen: false,
    setIsResumeOpen: ()=>{ }
}) 

export default MainContext