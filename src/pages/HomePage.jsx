import { useState, useEffect } from 'react'

export default function HomePage() {

    const [films, setFilms] = useState([])

    useEffect(() => {
        const api_url = import.meta.env.VITE_API_SERVER_ADDRESS + '/films'

        fetch(api_url)
            .then(response => response.json())
            .then(data => setFilms(data))
    }, [])


    return (
        <div>
            {films.map(film => (
                <div key={film.id}>
                    <h2>{film.title}</h2>
                    <p>{film.genre}</p>
                    <p>{film.release_year}</p>
                </div>
            ))}
        </div>
    )
}