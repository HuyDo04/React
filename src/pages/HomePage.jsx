import React, { useState } from 'react';

const data = [
    { id: 1, name: "A" },
    { id: 2, name: "B" }
];

function HomePage() {
    const [show, setShow] = useState(false);

    function handleClick() {
        setShow(!show);
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            {show && data.map((item) => (
                <div key={item.id}>
                    <h1>{item.id}</h1>
                    <h2>{item.name}</h2>
                </div>
            ))}
        </div>
        
    );
}

// function Counter() {
//     const [count, setCount] = useState(0);

//     return (
//         <div>
//             <p>Số lần bấm: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Tăng</button>
//             <button onClick={() => setCount(count - 1)}>Giảm</button>
//         </div>
//     );
// }

export default HomePage;
// export { Counter };
