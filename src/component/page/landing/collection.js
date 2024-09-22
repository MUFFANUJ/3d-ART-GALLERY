import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { Suspense, useState} from "react";
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
import { useParams } from "react-router-dom";

const ART_PIECES = {
  pichwai:[
    {
      title: "Beautiful Beast",
      imgPath: "assests/images/pichwai/p1.webp",
      price: "\u20B9 3770",
    },
    { title: "Stillness", imgPath: "assests/images/pichwai/p2.webp", price: "\u20B9 3770" },
    { title: "Foxy", imgPath: "assests/images/pichwai/p3.webp", price: "\u20B9 3330" },
    { title: "Gentle Giant", imgPath: "assests/images/pichwai/p4.webp", price: "\u20B9 3770" },
    { title: "Purity", imgPath: "assests/images/pichwai/p5.webp", price: "\u20B9 2410" },
    {
      title: "Lonely Together",
      imgPath: "assests/images/pichwai/p6.webp",
      price: "₹ 2080",
    },
    { title: "Owl", imgPath: "assests/images/pichwai/p7.webp", price: "₹ 2410" },
  ]
}
;

const WallArt = (props) => {
  const { art, i, addToCart } = props;
  const { width: w, height: h } = useThree((state) => state.viewport);
  const gap = 2; 
  const imageWidth = 3;
  const imageHeight = h / 2; 
  const texture = useLoader(TextureLoader, art.imgPath);

  const xPosition = (i + 1) * (imageWidth + gap) + (i + 1);
  const baseYPosition = 0; 
  const yPositionTitle = baseYPosition - imageHeight / 2 - 0.5; 
  const yPositionPrice = yPositionTitle - 0.6; 
  const yPositionButton = yPositionPrice - 1.0; 
  const yPositionDescription = yPositionButton - 1.5; 

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
        color="black"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4C0f-w.woff"
      >
        {art.title}
      </Text>

      <Text
        position={[xPosition, yPositionPrice, 0]}
        scale={[2, 2, 2]}
        color="black"
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

const Scene = ({ addToCart, selectedArtPieces }) => {
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

          {selectedArtPieces.map((art, i) => (
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

      {isOpen && (
        <div
          className="cart"
          style={{
            position: "absolute",
            top: 60,
            right: 20,
            backgroundColor: "#fff",
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
                background: "none",
                border: "none",
                fontSize: "20px",
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
                          backgroundColor: "#f5f5f5",
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
                          backgroundColor: "#f5f5f5",
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
                        backgroundColor: "#FF6666",
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
  scene.background = new Color("#008081"); // Dark grey background
  return null;
};

function Collection() {
  const {category} = useParams();
  const selectedArtPieces = ART_PIECES[category] || [];
  console.log("this is my category -> ",category);
  // category?:(data[0].category.map(()=>{

  // })):()
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
        <ambientLight intensity={0.5} color={0xffffff} />
        <SpotLight intensity={50} position={[8, 8, 8]} angle={Math.PI / 5} />
        <EffectComposer>
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        <Rig />
        <Scene addToCart={handleAddToCart} selectedArtPieces={selectedArtPieces}/>
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

export default Collection;
