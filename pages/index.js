import { useEffect, useState } from "react"



export default function Home() {
    const [page,setPage] = useState(1)
    const [movies,setMovies] = useState(null)
    useEffect(()=>{
      fetch(`https://yts.torrentbay.to/api/v2/list_movies.json`)
        .then(res=>res.json())
        .then(data=>{
          setMovies(data)
        })
    },[])

    return (
      <div className="w3-row-padding w3-padding-16 w3-center">

      </div>
    )
}