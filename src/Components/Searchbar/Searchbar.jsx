import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = "110d18c3a7a47b2f8739f8c719ff1aef";
const SEARCH_API = `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=`;

function Searchbar() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (query.trim() === "") {
            setResults([]);
            return;
        }

        setLoading(true);

        const delayDebounce = setTimeout(() => {
            fetch(SEARCH_API + query)
                .then((res) => res.json())
                .then((data) => {
                    setResults(data.results || []);
                    setLoading(false);
                })
                .catch((err) => {
                    console.error("Search error:", err);
                    setLoading(false);
                });
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [query]);

    return (
        <>
            <div className="bg-black text-white min-h-screen p-6">
                <div className="max-w-3xl mx-auto">
                    <input
                        type="text"
                        placeholder="Search for movies or TV shows..."
                        className="w-full p-3 rounded text-white mb-6 outline-0 border border-gray-500"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        autoFocus
                    />

                    {loading ? (
                        <p className="text-center text-gray-400">Loading...</p>
                    ) : results.length > 0 ? (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {results.map((item) => (
                                item.poster_path && (
                                    <Link to={`/${item.media_type}/${item.id}`} key={item.id}>
                                        <div className="rounded overflow-hidden bg-[#1e1e1e] hover:scale-105 transition duration-200">
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                                                alt={item.title || item.name}
                                                className="w-full h-auto"
                                            />
                                            <div className="p-2">
                                                <p className="text-sm font-semibold truncate">{item.title || item.name}</p>
                                                <p className="text-xs text-gray-400">{item.media_type.toUpperCase()}</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            ))}
                        </div>
                    ) : (
                        query && <p className="text-gray-500 text-center">No results found for “{query}”</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Searchbar