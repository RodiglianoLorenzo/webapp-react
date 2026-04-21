import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function SingleFilm() {

    const [film, setFilm] = useState(null);
    const { id } = useParams(); // ← "id" non "filmId" (come in App.jsx path="/films/:id")

    const Server_Address = import.meta.env.VITE_API_SERVER_ADDRESS;

    useEffect(() => {
        fetch(`${Server_Address}/films/${id}`) // ← tolto "/api"
            .then(response => response.json())
            .then(data => setFilm(data));
    }, [id])

    if (!film) return <p>Caricamento...</p>

    return (
        <div>
            <h1>{film.title}</h1>
            <p>{film.genre}</p>
            <p>{film.release_year}</p>

            <h2>Recensioni</h2>
            {film.reviews && film.reviews.map(review => (
                <div key={review.id}>
                    <p>{review.name}</p>
                    <p>{review.vote}</p>
                    <p>{review.text}</p>
                </div>
            ))}
        </div>
    )
}