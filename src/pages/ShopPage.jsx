import { useState } from "react";
import './ShopPage.css'

const data = [
	{ id: 1, title: "T-shirt", price: 100, description: "This is a T-shirt" },
	{ id: 2, title: "Shirt", price: 200, description: "This is a Shirt" },
	{ id: 3, title: "Pants", price: 300, description: "This is a Pants" },
	{ id: 4, title: "Shoes", price: 400, description: "This is a Shoes" },
];

function ShopPage () {
    const [grid, setGrid] = useState(false);

      return (
        <div className="container">
        <button className="toggle-btn" onClick={() => setGrid(!grid)}>
            Layout ({grid ? "List View" : "Grid View"})
        </button>

        <div className={grid ? "grid-container" : "list-container"}>
            {data.map((item) => (
            <div key={item.id} className="product-card">
                <h2>{item.title}</h2>
                <p>Giá: {item.price} VND</p>
                <button className="detail-btn">Xem chi tiết</button>
            </div>
            ))}
        </div>
    </div>
  );
}
export default ShopPage
    