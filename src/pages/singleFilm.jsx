import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import Formreview from '../components/Formreview';

export default function singleFilm() {
    const [film, setFilm] = useState(null);
    const { id } = useParams();
    const Server_Address = import.meta.env.VITE_API_SERVER_ADDRESS;

    const getFilmData = () => {
        fetch(`${Server_Address}/films/${id}`)
            .then(response => response.json())
            .then(data => setFilm(data));
    };

    useEffect(() => {
        getFilmData();
    }, [id])

    return (
        <div className="container py-5">
            {film && (
                <>
                    <Link to="/" className="btn btn-sm btn-back mb-4">
                        ← Torna alla lista
                    </Link>
                    <h1 className="film-title mb-1">{film.title}</h1>
                    <p className="film-meta">{film.genre} · {film.release_year}</p>
                    <hr className="film-divider" />
                    <h5 className="reviews-title mt-4 mb-3">Recensioni</h5>
                    {film.reviews && film.reviews.map(review => (
                        <div className="card review-card mb-3" key={review.id}>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-2">
                                    <strong className="review-author">{review.name}</strong>
                                    <span className="review-vote">{'★'.repeat(review.vote)}</span>
                                </div>
                                <p className="review-text mb-0">{review.text}</p>
                            </div>
                        </div>
                    ))}

                    <Formreview movieId={id} onFormsubmite={getFilmData} />
                </>
            )}
        </div>
    )
}