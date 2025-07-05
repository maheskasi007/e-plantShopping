import React, { useState, useEffect } from "react";
import "./ProductList.css";
import CartItem from "./CartItem";
import logo from "./assets/logo.png";
import { addItem } from "./CartSlice";
import { useDispatch, useSelector } from "react-redux";

function ProductList({ onHomeClick }) {
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "shoppingreact/src/assets/snake-plant.jpg",
          description: "Produces oxygen at night, improving air quality.",
          cost: "$15",
        },
        {
          name: "Spider Plant",
          image: "shoppingreact/src/assets/chlorophytum.jpg",
          description: "Filters formaldehyde and xylene from the air.",
          cost: "$12",
        },
        {
          name: "Peace Lily",
          image: "shoppingreact/src/assets/peace-lilies.jpg",
          description: "Removes mold spores and purifies the air.",
          cost: "$18",
        },
        {
          name: "Boston Fern",
          image: "shoppingreact/src/assets/boston-fem.jpg",
          description: "Adds humidity to the air and removes toxins.",
          cost: "$20",
        },
        {
          name: "Rubber Plant",
          image: "shoppingreact/src/assets/rubber-plant.jpg",
          description: "Easy to care for and effective at removing toxins.",
          cost: "$17",
        },
        {
          name: "Aloe Vera",
          image: "shoppingreact/src/assets/aloe-vera.jpg",
          description: "Purifies the air and has healing properties for skin.",
          cost: "$14",
        },
      ],
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        {
          name: "Lavender",
          image: "shoppingreact/src/assets/lavender.jpg",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20",
        },
        {
          name: "Jasmine",
          image: "shoppingreact/src/assets/jasmine.jpg",
          description: "Sweet fragrance, promotes relaxation.",
          cost: "$18",
        },
        {
          name: "Rosemary",
          image: "shoppingreact/src/assets/rosemary.jpg",
          description: "Invigorating scent, often used in cooking.",
          cost: "$15",
        },
        {
          name: "Mint",
          image: "shoppingreact/src/assets/mint.jpg",
          description: "Refreshing aroma, used in teas and cooking.",
          cost: "$12",
        },
        {
          name: "Lemon Balm",
          image: "shoppingreact/src/assets/balm.jpg",
          description: "Citrusy scent, relieves stress and promotes sleep.",
          cost: "$14",
        },
        {
          name: "Hyacinth",
          image: "shoppingreact/src/assets/hyacinth.jpg",
          description:
            "Hyacinth is a beautiful flowering plant known for its fragrant.",
          cost: "$22",
        },
      ],
    },
    {
      category: "Insect Repellent Plants",
      plants: [
        {
          name: "oregano",
          image: "shoppingreact/src/assets/oregano.jpg",
          description:
            "The oregano plants contains compounds that can deter certain insects.",
          cost: "$10",
        },
        {
          name: "Marigold",
          image: "shoppingreact/src/assets/marigold.jpg",
          description:
            "Natural insect repellent, also adds color to the garden.",
          cost: "$8",
        },
        {
          name: "Geraniums",
          image: "shoppingreact/src/assets/geraniums.jpg",
          description:
            "Known for their insect-repelling properties while adding a pleasant scent.",
          cost: "$20",
        },
        {
          name: "Basil",
          image: "shoppingreact/src/assets/tulsi.jpg",
          description: "Repels flies and mosquitoes, also used in cooking.",
          cost: "$9",
        },
        {
          name: "Lavender",
          image: "shoppingreact/src/assets/lavender.jpg",
          description: "Calming scent, used in aromatherapy.",
          cost: "$20",
        },
        {
          name: "Catnip",
          image: "shoppingreact/src/assets/catnip.jpg",
          description: "Repels mosquitoes and attracts cats.",
          cost: "$13",
        },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        {
          name: "Aloe Vera",
          image: "shoppingreact/src/assets/aloe-vera.jpg",
          description: "Soothing gel used for skin ailments.",
          cost: "$14",
        },
        {
          name: "Echinacea",
          image: "shoppingreact/src/assets/echinacea.jpg",
          description: "Boosts immune system, helps fight colds.",
          cost: "$16",
        },
        {
          name: "Peppermint",
          image: "shoppingreact/src/assets/peppermint.jpg",
          description: "Relieves digestive issues and headaches.",
          cost: "$13",
        },
        {
          name: "Lemon Balm",
          image: "shoppingreact/src/assets/balm.jpg",
          description: "Calms nerves and promotes relaxation.",
          cost: "$14",
        },
        {
          name: "Chamomile",
          image: "shoppingreact/src/assets/chamomile.jpg",
          description: "Soothes anxiety and promotes sleep.",
          cost: "$15",
        },
        {
          name: "Calendula",
          image: "shoppingreact/src/assets/calendula.jpg",
          description: "Heals wounds and soothes skin irritations.",
          cost: "$12",
        },
      ],
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        {
          name: "ZZ Plant",
          image: "shoppingreact/src/assets/zz-plant.jpg",
          description: "Thrives in low light and requires minimal watering.",
          cost: "$25",
        },
        {
          name: "Pothos",
          image: "shoppingreact/src/assets/pothos.jpg",
          description: "Tolerates neglect and can grow in various conditions.",
          cost: "$10",
        },
        {
          name: "Snake Plant",
          image: "shoppingreact/src/assets/snake-plant.jpg",
          description:
            "Needs infrequent watering and is resilient to most pests.",
          cost: "$15",
        },
        {
          name: "Cast Iron Plant",
          image: "shoppingreact/src/assets/cast-iron-plant.jpg",
          description: "Hardy plant that tolerates low light and neglect.",
          cost: "$20",
        },
        {
          name: "Succulents",
          image: "shoppingreact/src/assets/cacti.jpg",
          description: "Drought-tolerant plants with unique shapes and colors.",
          cost: "$18",
        },
        {
          name: "Aglaonema",
          image: "shoppingreact/src/assets/aglaonema.jpg",
          description: "Requires minimal care and adds color to indoor spaces.",
          cost: "$22",
        },
      ],
    },
  ];
  const styleObj = {
    backgroundColor: "#4CAF50",
    color: "#fff!important",
    padding: "15px",
    display: "flex",
    justifyContent: "space-between",
    alignIems: "center",
    fontSize: "20px",
  };
  const styleObjUl = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "1100px",
  };
  const styleA = {
    color: "white",
    fontSize: "30px",
    textDecoration: "none",
  };

  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false); // State to control the visibility of the About Us page
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddToCart = (product) => {
    dispatch(addItem(product));

    setAddedToCart((prevStat) => ({
      ...prevStat,
      [product.name]: true,
    }));
  };

  const handleHomeClick = (e) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
  };
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
    setShowCart(false); // Hide the cart when navigating to About Us
  };

  const handleContinueShopping = (e) => {
    e.preventDefault();
    setShowCart(false);
  };
  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <img src={logo} alt="" />
            <a href="/" onClick={(e) => handleHomeClick(e)}>
              <div>
                <h3 style={{ color: "white" }}>Paradise Nursery</h3>
                <i style={{ color: "white" }}>Where Green Meets Serenity</i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div>
            {" "}
            <a href="#" onClick={(e) => handlePlantsClick(e)} style={styleA}>
              Plants
            </a>
          </div>
          <div>
            {" "}
            <a href="#" onClick={(e) => handleCartClick(e)} style={styleA}>
              <h1 className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="68"
                  width="68"
                >
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>
                <div className="cart_quantity_count">{cartCount}</div>
              </h1>
            </a>
          </div>
        </div>
      </div>
      {!showCart ? (
        <div className="product-grid">
          {plantsArray.map((category, index) => (
            <div key={index}>
              <h1>
                <div>{category.category}</div>
              </h1>
              <div className="product-list">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="product-image"
                    />
                    <div className="product-title">{plant.name}</div>
                    <div className="product-description">
                      {plant.description}
                    </div>
                    <div className="product-cost">{plant.cost}</div>
                    <button
                      onClick={() => handleAddToCart(plant)}
                      className={
                        addedToCart[plant.name]
                          ? "product-button added-to-cart"
                          : "product-button"
                      }
                      disabled={!!addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name]
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={handleContinueShopping} />
      )}
    </div>
  );
}

export default ProductList;
