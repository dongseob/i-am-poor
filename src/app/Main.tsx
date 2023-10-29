"use client"
import { useEffect } from "react"

const Main = () => {
    useEffect(() => {
        console.log(123)
    }, [])

    return (
        <div>main</div>
    )
}
export default Main