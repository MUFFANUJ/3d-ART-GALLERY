import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  SpotLight,
  Text,
  ScrollControls,
  Scroll,
  Html,
  RoundedBox,
} from "@react-three/drei";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { TextureLoader, Vector3, Color } from "three";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { IoArrowBack } from "react-icons/io5";
import "./Gallery.css";
import ENDPOINT from "./helpers/constants";

const WallArt = (props) => {
  const { art, i, addToCart } = props;
  const { width: w, height: h } = useThree((state) => state.viewport);
  const gap = 2;
  const imageWidth = 3;
  const imageHeight = h / 2;
  const texture = useLoader(TextureLoader, art.imageUrl);

  const xPosition = (i + 1) * (imageWidth + gap) + (i + 1);
  const baseYPosition = 0;
  const titleAndPriceYPosition = baseYPosition + imageHeight / 2 + 0.5;
  const yPositionButton = baseYPosition - imageHeight / 2 - 0.5;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log(`Adding ${art.name} to cart`);
    addToCart(art);
  };

  return (
    <group>
      <SpotLight
        position={[xPosition - w / 4, 2.5, 1]}
        penumbra={1}
        angle={0.6}
        attenuation={1}
        anglePower={5}
        intensity={10}
        distance={10}
        castShadow
        color={0xffffff}
      />

      <mesh castShadow position={[xPosition, baseYPosition, 0]}>
        <boxBufferGeometry
          attach="geometry"
          args={[imageWidth, imageHeight, 0.07]}
        />
        <meshStandardMaterial
          attach="material"
          map={texture}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      <Text
        position={[xPosition, titleAndPriceYPosition, 0]}
        scale={[1.8, 1.8, 1.8]}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4C0f-w.woff"
        maxWidth={imageWidth}
      >
        {art.name} - {`$${art.price}`}
      </Text>
      <mesh
        position={[xPosition, yPositionButton, 0]}
        onClick={handleAddToCart}
        onPointerOver={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <RoundedBox args={[1.2, 0.4, 0.1]} radius={0.05} smoothness={16}>
          <meshStandardMaterial color={0xffffff} />
        </RoundedBox>
        <Text
          position-z={0.1}
          scale={[1.6, 1.6, 1.6]}
          color="black"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
        >
          Add to Cart
        </Text>
      </mesh>
    </group>
  );
};

const Scene = ({ addToCart, category }) => {
  console.log("this is category in scene  -> ", category);

  const [ART_PIECES, SetART_PIECES] = useState([]);

  const { width: screenWidth } = useThree((state) => state.viewport);
  console.log("screenWidth", screenWidth);
  const textScale = screenWidth < 5.5 ? 2 : 4;

  useEffect(() => {
    console.log("this is gallery : ");
    const getAll = async () => {
      const response = await fetch(`${ENDPOINT}/api/products/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      const res = await response.json();

      if (category === "all") {
        SetART_PIECES(res);
      } else {
        const byCategory = res.filter((ele, idx) => {
          return ele.category === category;
        });

        SetART_PIECES(byCategory);
      }
    };

    getAll();
  }, [category]);

  return (
    <Suspense
      fallback={
        <Html
          style={{ fontSize: "6vw", whiteSpace: "nowrap", color: "white" }}
          center
        >
          Loading 3D Art Gallery...
        </Html>
      }
    >
      <ScrollControls
        infinite
        horizontal
        damping={4}
        pages={28 * Math.exp(-0.11 * screenWidth)}
        distance={1}
      >
        <Scroll>
          <Text
            position-z={0}
            anchorX="center"
            anchorY="bottom"
            scale={[textScale, textScale, textScale]}
            color="#94A6FF"
            font="https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4C0f-w.woff"
            castShadow
          >
            Creativity is allowing yourself to make mistakes.
          </Text>
          <Text
            position-z={1}
            anchorX="center"
            anchorY="top"
            scale={[textScale, textScale, textScale]}
            color="#FBA90A"
            font="https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4C0f-w.woff"
            castShadow
          >
            Art is knowing which ones to keep.
          </Text>
          <Text
            position={[0, -0.5, 1.5]}
            anchorX="center"
            anchorY="top"
            font="https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4C0f-w.woff"
          >
            ~ Scott Adams
          </Text>

          {ART_PIECES.map((art, i) => (
            <WallArt key={i} i={i} art={art} addToCart={addToCart} />
          ))}
        </Scroll>
      </ScrollControls>
    </Suspense>
  );
};

export const Cart = ({ cart, setCart, onIncrement, onDecrement, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleBuyNow = async () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        clearCart();
      }, 1000);
    }, 2000);
  };

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ color: "white", fontSize: "24px" }}
        />
        {cart.length > 0 && (
          <span style={{ color: "white", fontSize: "24px" }}>
            {cart.length}
          </span>
        )}
      </div>

      {isOpen && (
        <div
          className="cart"
          style={{
            position: "absolute",
            top: 60,
            right: 20,
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            border: "1px solid #ddd",
            fontFamily: "Arial, sans-serif",
            width: "300px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                margin: 0,
                paddingBottom: "10px",
                borderBottom: "1px solid #ddd",
                fontSize: "18px",
                color: "#333",
              }}
            >
              Your Cart
            </h3>
            <button
              style={{
                cursor: "pointer",
                background: "black",
                borderRadius: "20px",
                borderWidth: "10px",
                borderStyle: "solid",
                borderColor: "white",
                fontSize: "20px",
                color: "white",
                padding: "2px 10px",
              }}
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
          </div>

          {cart.length === 0 ? (
            <p style={{ marginTop: "10px", color: "#777" }}>No items in cart</p>
          ) : (
            <ul
              style={{ padding: 0, listStyleType: "none", marginTop: "15px" }}
            >
              {cart.map((item, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "15px",
                    paddingBottom: "10px",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      {item.name}
                    </span>
                    <span style={{ color: "#888" }}>
                      {item.price} x {item.quantity}
                    </span>
                  </div>

                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <button
                        style={{
                          padding: "5px 10px",
                          fontSize: "16px",
                          borderRadius: "5px",
                          backgroundColor: "black",
                          border: "1px solid #ccc",
                          cursor: "pointer",
                          marginRight: "10px",
                        }}
                        onClick={() => onDecrement(item)}
                      >
                        -
                      </button>
                      <button
                        style={{
                          padding: "5px 10px",
                          fontSize: "16px",
                          borderRadius: "5px",
                          backgroundColor: "black",
                          border: "1px solid #ccc",
                          cursor: "pointer",
                          marginRight: "10px",
                        }}
                        onClick={() => onIncrement(item)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      style={{
                        padding: "5px 10px",
                        fontSize: "14px",
                        borderRadius: "5px",
                        backgroundColor: "black",
                        border: "none",
                        color: "white",
                        cursor: "pointer",
                      }}
                      onClick={() => onDelete(item)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div
            style={{
              marginTop: "15px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              Total: ${calculateTotal()}
            </span>
            {isLoading ? (
              <div>Loading...</div>
            ) : showToast ? (
              <span style={{ color: "#4CAF50", fontSize: "16px" }}>
                Payment Successful
              </span>
            ) : (
              <button
                style={{
                  padding: "8px 16px",
                  fontSize: "16px",
                  borderRadius: "5px",
                  backgroundColor: "#909090",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                }}
                onClick={handleBuyNow}
                disabled={cart.length === 0}
              >
                Buy Now
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const Rig = () => {
  const { camera, mouse } = useThree();
  const vec = new Vector3();
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 0.5, mouse.y * 0.5, camera.position.z),
      0.2
    )
  );
};

const GradientBackground = () => {
  const { scene } = useThree();
  scene.background = new Color("#000000");
  return null;
};

function Gallery() {
  const navigate = useNavigate();
  const { category } = useParams();
  console.log("this is my category -> ", category);
  const [cart, setCart] = useState([]);
  const [cartId, setCartId] = useState();

  const user = localStorage.getItem("user");

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = async (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.name === item.name
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    try {
      const bodyd = JSON.stringify({
        userId: JSON.parse(user).id,
        productId: item.id,
        quantity: 1,
      });
      console.log("this is the userId and productId -> ", bodyd);

      const response = await fetch(`${ENDPOINT}/api/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("token")}`,
        },
        body: bodyd,
      });
      const data = await response.json();
      console.log(data);
      setCartId(data.cartItem.cartId);

      if (response.ok) {
        alert("Product added successfully!");
      } else {
        alert("Failed to add product");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product");
    }
  };

  const handleIncrement = async (item) => {
    const response = await fetch(`${ENDPOINT}/api/cart/increment`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ productId: item.id, cartId: cartId }),
    });

    console.log("this is response -> ",{ productId: item.id, cartId: cartId })

    if (response.ok) {
      alert("Product incremented successfully!");
    } else {
      alert("Failed to increment product");
    }
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.name === item.name
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const handleDecrement = async (item) => {
    const response = await fetch(`${ENDPOINT}/api/cart/decrement`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ productId: item.id, cartId: cartId }),
    });

    if (response.ok) {
      alert("Product decremented successfully!");
    } else {
      alert("Failed to decrement product");
    }
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.name === item.name && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const handleDelete = async (item) => {
    const response = await fetch(`${ENDPOINT}/api/cart/remove`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ productId: item.id, cartId: cartId }),
    });
    console.log("carttt", cartId);
    console.log("carttt", item.id);
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.name !== item.name)
    );
    if (response.ok) {
      alert("Product deleted successfully!");
    } else {
      alert("Failed to delete product");
    }
  };

  return (
    <>
      <button
        className="back-button"
        onClick={() => navigate("/")}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          zIndex: 1000,
        }}
      >
        <IoArrowBack size={25} /> Back
      </button>
      <Canvas shadows camera>
        <GradientBackground />
        <ambientLight intensity={0.6} color={0xffffff} />
        <SpotLight intensity={50} position={[8, 8, 8]} angle={Math.PI / 5} />
        <EffectComposer>
          <Vignette eskil={false} offset={0.1} darkness={0.5} />
        </EffectComposer>
        <Rig />
        <Scene addToCart={handleAddToCart} category={category} />
      </Canvas>
      <Cart
        cart={cart}
        setCart={setCart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      />
    </>
  );
}

export default Gallery;
