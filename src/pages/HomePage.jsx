import React, { useState } from 'react';

const data = [
    {
        id: 1,
        name: "A"
    },
    {
        id: 2,
        name: "B"
    }
];

function HomePage() {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(!show);
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            <div className='infor'></div>
            {show && data.map((item) => (
                <div key={item.id}>
                    <h1>{item.id}</h1>
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
    );
}

export default HomePage;
