import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLoader } from '../context/Contextuploader'


export default function HomePage() {
    const [films, setFilms] = useState([])

    const { setLoading } = useLoader();

    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:3000/films')
            .then(response => response.json())
            .then(data => setFilms(data))
        setLoading(false)
    }, [])

    return (
        <div className="container py-5">
            <h2 className="catalog-title mb-4">Catalogo Film</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {films.map(film => (
                    <div className="col" key={film.id}>
                        <div className="card film-card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{film.title}</h5>
                                <p className="card-text mb-1">{film.genre}</p>
                                <p className="card-text">{film.release_year}</p>
                            </div>
                            <div className="card-footer">
                                <Link to={`/films/${film.id}`} className="btn btn-sm btn-detail">
                                    Dettaglio →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}