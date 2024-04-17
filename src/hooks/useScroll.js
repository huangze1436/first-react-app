import {react, useEffect, useState} from 'react';

function useScroll () {
    const [scrollX, setScrollX] = useState(0)
    const [scrollY, setScrollY] = useState(0)
    
    useEffect(() => {
        function handleScroll () {
            // console.log(window.scrollY)
            setScrollY(window.scrollY)
            setScrollX(window.scrollX)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return [scrollX, scrollY]

}

export default useScroll