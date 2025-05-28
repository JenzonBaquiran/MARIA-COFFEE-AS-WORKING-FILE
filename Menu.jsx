import React, { useEffect, useState } from 'react';
import './Menu.css';
import Navbar from "./navbar.jsx";
import Footer from "./Footer.jsx";
import './Footer.css';

const typeIcons = [
  { type: "Drinks", icon: "/src/img/icons/coffee.png", label: "Drinks" },
  { type: "Waffles", icon: "/src/img/icons/waffle.png", label: "Waffles" },
  { type: "PicaPica", icon: "/src/img/icons/nachos.png", label: "PicaPica" },
  { type: "SandwichBurger", icon: "/src/img/icons/burger.png", label: "SandwichBurger" },
  { type: "Pasta", icon: "/src/img/icons/dish.png", label: "Pasta" },
  { type: "Wings", icon: "/src/img/icons/fried-chicken.png", label: "Wings" },
  { type: "Ricebowls", icon: "/src/img/icons/ricebowl.png", label: "Ricebowls" },
];

function Menu() {
  const [products, setProducts] = useState([]);
  const [selectedType, setSelectedType] = useState(""); // For filtering

  useEffect(() => {
    fetch("http://localhost:1337/api/products")
      .then(res => res.json())
      .then(data => {
        const withImg = data.map(p => ({
          ...p,
          img: p.imageUrl ? `http://localhost:1337${p.imageUrl}` : "",
        }));
        setProducts(withImg);
      });
  }, []);

  // Filter products by type and availability
  const filteredProducts = products
    .filter(product => product.available)
    .filter(product => !selectedType || product.type === selectedType);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div style={{ flex: 0 }}>
        <div className="menu-header-row">
          <div className="menu-title">MENU</div>
          <div className="menu-icons">
            <button
              className={`menu-icon-circle${selectedType === "Drinks" ? " selected" : ""}`}
              onClick={() => setSelectedType("Drinks")}
              title="Drinks"
              type="button"
            >
              <img src="/src/img/icons/coffee.png" alt="Drinks" />
            </button>
            <button
              className={`menu-icon-circle${selectedType === "Waffles" ? " selected" : ""}`}
              onClick={() => setSelectedType("Waffles")}
              title="Waffles"
              type="button"
            >
              <img src="/src/img/icons/waffle.png" alt="Waffles" />
            </button>
            <button
              className={`menu-icon-circle${selectedType === "PicaPica" ? " selected" : ""}`}
              onClick={() => setSelectedType("PicaPica")}
              title="PicaPica"
              type="button"
            >
              <img src="/src/img/icons/nachos.png" alt="PicaPica" />
            </button>
            <button
              className={`menu-icon-circle${selectedType === "SandwichBurger" ? " selected" : ""}`}
              onClick={() => setSelectedType("SandwichBurger")}
              title="SandwichBurger"
              type="button"
            >
              <img src="/src/img/icons/burger.png" alt="SandwichBurger" />
            </button>
            <button
              className={`menu-icon-circle${selectedType === "Pasta" ? " selected" : ""}`}
              onClick={() => setSelectedType("Pasta")}
              title="Pasta"
              type="button"
            >
              <img src="/src/img/icons/dish.png" alt="Pasta" />
            </button>
            <button
              className={`menu-icon-circle${selectedType === "Wings" ? " selected" : ""}`}
              onClick={() => setSelectedType("Wings")}
              title="Wings"
              type="button"
            >
              <img src="/src/img/icons/fried-chicken.png" alt="Wings" />
            </button>
            <button
              className={`menu-icon-circle${selectedType === "Ricebowls" ? " selected" : ""}`}
              onClick={() => setSelectedType("Ricebowls")}
              title="Ricebowls"
              type="button"
            >
              <img src="/src/img/icons/ricebowl.png" alt="Ricebowls" />
            </button>
            {/* Show All button */}
            <button
              className={`menu-icon-circle${selectedType === "" ? " selected" : ""}`}
              onClick={() => setSelectedType("")}
              title="Show All"
              type="button"
            >
              <span style={{ fontWeight: "bold", fontSize: 18, color: "#DED4CC" }}>All</span>
            </button>
          </div>
        </div>

        <div className="product-list">
          {filteredProducts.map((product, idx) => (
            <div className="product-card" key={idx}>
              {product.img && (
                <img src={product.img} alt={product.name} />
              )}
              <div className="product-info">
                <span className="product-name">{product.name}</span>
                <span className="product-price">
                  ₱{Number(product.price).toFixed(2)}
                </span>
              </div>
              <div className="product-description">
                {product.description}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;