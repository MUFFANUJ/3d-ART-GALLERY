import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import {
  SpotLight,
  Text,
  ScrollControls,
  Scroll,
  Html,
} from "@react-three/drei";
import { EffectComposer, Vignette } from "@react-three/postprocessing";
import { TextureLoader, Vector3, Color } from "three";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ART_PIECES = [
  {
    title: "Flowers And Fruits",
    imgPath: "assests/images/naturepalete/n1.webp",
    price: " 2610",
  },
  {
    title: "Graphic Botanical Mini",
    imgPath: "assests/images/naturepalete/n2.webp",
    price: " 6750",
  },
  {
    title: "Green Twig No 3",
    imgPath: "assests/images/naturepalete/n4.webp",
    price: " 3770",
  },
  {
    title: "Beautiful Beast",
    imgPath: "assests/images/pichwai/p1.webp",
    price: " 3770",
  },
  {
    title: "Stillness",
    imgPath: "assests/images/pichwai/p2.webp",
    price: " 3770",
  },
  { title: "Foxy", imgPath: "assests/images/pichwai/p3.webp", price: " 3330" },
  {
    title: "Gentle Giant",
    imgPath: "assests/images/pichwai/p4.webp",
    price: " 3770",
  },
  {
    title: "Purity",
    imgPath: "assests/images/pichwai/p5.webp",
    price: " 2410",
  },
  {
    title: "Lonely Together",
    imgPath: "assests/images/pichwai/p6.webp",
    price: "₹ 2080",
  },
  { title: "Owl", imgPath: "assests/images/pichwai/p7.webp", price: " 2410" },
];

const WallArt = (props) => {
  console.log("this is props in wallArt -> ", props);
  const { art, i, addToCart } = props;
  const { width: w, height: h } = useThree((state) => state.viewport);
  const gap = 2; // Horizontal gap between images
  const imageWidth = 3;
  const imageHeight = h / 2; // Adjusted to a variable for clarity and reusability
  const texture = useLoader(TextureLoader, art.imgPath);

  // Calculate positions dynamically based on index `i`
  const xPosition = (i + 1) * (imageWidth + gap) + (i + 1);
  const baseYPosition = 0; // Base level for the image

  // Adjust positions for title, price, and add to cart button
  const yPositionTitle = baseYPosition - imageHeight / 2 - 0.5; // Title at the bottom of the image
  const yPositionPrice = yPositionTitle - 0.6; // Price below the title
  const yPositionButton = yPositionPrice - 1.0; // Button below the price
  const yPositionDescription = yPositionButton - 1.5; // Description below the button

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log(`Adding ${art.title} to cart`);
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
        position={[xPosition, yPositionTitle, 0]}
        scale={[2, 2, 2]}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4C0f-w.woff"
      >
        {art.title}
      </Text>

      <Text
        position={[xPosition, yPositionPrice, 0]}
        scale={[2, 2, 2]}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap"
      >
        {`$${art.price}`}
      </Text>

      <mesh
        position={[xPosition, yPositionButton, 0]}
        onClick={handleAddToCart}
        onPointerOver={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <planeGeometry args={[1.4, 0.6]} />
        <meshStandardMaterial color={0x1e90ff} />
        <Text
          position-z={0.1}
          scale={[2.2, 2.2, 2.2]}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap"
        >
          Add to Cart
        </Text>
      </mesh>

      <Text
        position={[xPosition, yPositionDescription, 0]}
        scale={[1.5, 1.5, 1.5]}
        color="grey"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
      >
        "A brief description of the art piece here over two lines."
      </Text>
    </group>
  );
};

const Scene = ({ addToCart }) => {
  console.log("this is add to cart in -> ", addToCart);
  const { width: screenWidth } = useThree((state) => state.viewport);
  console.log("screenWidth", screenWidth);
  const textScale = screenWidth < 5.5 ? 2 : 4;

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

const Cart = ({ cart, onIncrement, onDecrement, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle cart visibility

  return (
    <div>
      {/* Cart Icon Button */}
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

      {/* Cart Popup */}
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

            {/* Cross button to close the popup */}
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
                      {item.title}
                    </span>
                    <span style={{ color: "#888" }}>
                      {item.price} x {item.quantity}{" "}
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
  scene.background = new Color("#000000"); // Dark grey background
  return null;
};

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (cartItem) => cartItem.title === item.title
      );
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const handleIncrement = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.title === item.title
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const handleDecrement = (item) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.title === item.title && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const handleDelete = (item) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem.title !== item.title)
    );
  };

  return (
    <>
      <Canvas shadows camera>
        <GradientBackground />
        <ambientLight intensity={0.6} color={0xffffff} />
        <SpotLight intensity={50} position={[8, 8, 8]} angle={Math.PI / 5} />
        <EffectComposer>
          <Vignette eskil={false} offset={0.1} darkness={0.5} />
        </EffectComposer>
        <Rig />
        <Scene addToCart={handleAddToCart} />
      </Canvas>
      <Cart
        cart={cart}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;
