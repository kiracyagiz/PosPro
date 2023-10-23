"use client"
import { useEffect,useState } from "react"
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

const BackToTopButton = () => {
    const [backToTop,setBackToTop] = useState(false)

    useEffect(() => {
      window.addEventListener("scroll",()=> {
        if(window.scrollY > 150){
            setBackToTop(true)
        }
        else {
            setBackToTop(false)
        }
      }) 
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        })
    }
    
  return (
    <div>
        {backToTop && (
            <button className="fixed bottom-1 z-50 right-0 p-4" onClick={scrollUp}>
                <BsFillArrowUpCircleFill size={35} className="text-primaryYellow bg-black rounded-full"/>
            </button>
        )}
    </div>
  )
}

export default BackToTopButton