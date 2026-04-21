import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/films')
            .then(response => response.json())
            .then(data => setFilms(data))
    }, [])

    return (
        <div className="container py-5">
            <h2 className="mb-4" style={{ color: '#e94560', letterSpacing: '1px' }}>Catalogo Film</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {films.map(film => (
                    <div className="col" key={film.id}>
                        <div className="card h-100" style={{ background: '#16213e', border: '1px solid #0f3460' }}>
                            <div className="card-body">
                                <h5 className="card-title" style={{ color: '#e0e0e0' }}>{film.title}</h5>
                                <p className="card-text mb-1" style={{ color: '#888' }}>{film.genre}</p>
                                <p className="card-text" style={{ color: '#888' }}>{film.release_year}</p>
                            </div>
                            <div className="card-footer" style={{ borderTop: '1px solid #0f3460', background: 'transparent' }}>
                                <Link to={`/films/${film.id}`} className="btn btn-sm" style={{ background: '#e94560', color: '#fff', border: 'none' }}>
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