import { useState } from 'react';

export default function Formreview({ movieId, onFormsubmite }) {
    const [name, setName] = useState('');
    const [text, setText] = useState('');
    const [vote, setVote] = useState(5);

    const Server_Address = import.meta.env.VITE_API_SERVER_ADDRESS;

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name: name,
            text: text,
            vote: parseInt(vote)
        };

        fetch(`${Server_Address}/films/${movieId}/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(() => {
                setName('');
                setText('');
                setVote(5);
                onFormsubmite();
            })
            .catch(err => console.error("Error reveiw submite", err));
    };

    return (
        <section className="mt-5 p-4 rounded review-form-container">
            <h4 className="review-form-title mb-4">Lascia una recensione</h4>

            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-8 mb-3">
                        <label className="form-label small text-uppercase fw-bold">Il tuo Nome</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            placeholder="Inserisci il tuo nome..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div className="col-md-4 mb-3">
                        <label className="form-label small text-uppercase fw-bold">Voto</label>
                        <select
                            className="form-select custom-input"
                            value={vote}
                            onChange={(e) => setVote(e.target.value)}
                        >
                            {[1, 2, 3, 4, 5].map(v => (
                                <option key={v} value={v}>
                                    {v} {v === 1 ? 'Stella' : 'Stelle'}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mb-4">
                    <label className="form-label small text-uppercase fw-bold">La tua Opinione</label>
                    <textarea
                        className="form-control custom-input"
                        rows="4"
                        placeholder="Cosa ne pensi di questo film?"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
                    ></textarea>
                </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                    <button type="submit" className="btn btn-submit px-5 py-2">
                        Invia Recensione
                    </button>
                </div>
            </form>
        </section>
    );
}