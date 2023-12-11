import { useState } from "react"



export const useSidebar = () => {
    const [sidebar, setSidebar] = useState(false)


    const handleClick = () => {
        setSidebar(!sidebar)
    }



    return {
        sidebar,
        handleClick
    }
}