import { useEffect, useState } from "react"

export default function useFetch(url) {
    const [data, setData] = useState([])
    useEffect(() => {
        let getData = async () => {
            let response = await fetch(url)
            let data = await response.json()
            setData(data)
        }
        getData()
    }, [url])
    return data
}