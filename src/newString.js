import React, { useState, useEffect } from 'react';

function NewString({ id }) {
    const [coinData, setCoinData] = useState(null);

    useEffect(() => {
        fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
            .then(response => response.json())
            .then(data => setCoinData(data));
    }, [id]);

    if (!coinData) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{coinData.name}</h1>
            {coinData.categories.map((category, index) => 
                <p key={index}>{category}</p>
            )}
        </div>
    );
}

export default NewString;