import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function singleFilm() {
    const [film, setFilm] = useState(null);
    const { id } = useParams();
    const Server_Address = import.meta.env.VITE_API_SERVER_ADDRESS;

    useEffect(() => {
        fetch(`${Server_Address}/films/${id}`)
            .then(response => response.json())
            .then(data => setFilm(data));
    }, [id])

    return (
        <div className="container py-5">
            {film && (
                <>
                    <Link to="/" className="btn btn-sm mb-4" style={{ background: 'transparent', border: '1px solid #e94560', color: '#e94560' }}>
                        ← Torna alla lista
                    </Link>
                    <h1 className="mb-1" style={{ color: '#e0e0e0' }}>{film.title}</h1>
                    <p style={{ color: '#e94560' }}>{film.genre} · {film.release_year}</p>
                    <hr style={{ borderColor: '#0f3460' }} />
                    <h5 className="mt-4 mb-3" style={{ color: '#e0e0e0' }}>Recensioni</h5>
                    {film.reviews && film.reviews.map(review => (
                        <div className="card mb-3" key={review.id} style={{ background: '#16213e', border: '1px solid #0f3460' }}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-2">
                                    <strong style={{ color: '#e0e0e0' }}>{review.name}</strong>
                                    <span style={{ color: '#e94560' }}>{'★'.repeat(review.vote)}</span>
                                </div>
                                <p className="mb-0" style={{ color: '#888' }}>{review.text}</p>
                            </div>
                        </div>
                    ))}
                </>
            )}
        </div>
    )
}