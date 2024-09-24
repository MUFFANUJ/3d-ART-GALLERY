import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
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
import { useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import './Collection.css';

const ART_PIECES = {
  nature:[
    {
      title: "Flowers And Fruits",
      imgPath: "assests/images/naturepalete/n1.webp",
      price: 2610,
    },
    {
      title: "Graphic Botanical Mini",
      imgPath: "assests/images/naturepalete/n2.webp",
      price: 6750,
    },
    {
      title: "Green Twig No 3",
      imgPath: "assests/images/naturepalete/n4.webp",
      price: 3770,
    },
    {
      title: "Flowers And Fruits",
      imgPath: "assests/images/naturepalete/n1.webp",
      price: 2610,
    },
    {
      title: "Graphic Botanical Mini",
      imgPath: "assests/images/naturepalete/n2.webp",
      price: 6750,
    },
    {
      title: "Green Twig No 3",
      imgPath: "assests/images/naturepalete/n4.webp",
      price: 3770,
    },
    {
      title: "Flowers And Fruits",
      imgPath: "assests/images/naturepalete/n1.webp",
      price: 2610,
    },
  ],
  pichwai: [
    {
      title: "Beautiful Beast",
      imgPath: "assests/images/pichwai/p1.webp",
      price: 3770,
    },
    {
      title: "Stillness",
      imgPath: "assests/images/pichwai/p2.webp",
      price: 3770,
    },
    {
      title: "Foxy",
      imgPath: "assests/images/pichwai/p3.webp",
      price: 3330,
    },
    {
      title: "Gentle Giant",
      imgPath: "assests/images/pichwai/p4.webp",
      price: 3770,
    },
    {
      title: "Purity",
      imgPath: "assests/images/pichwai/p5.webp",
      price: 2410,
    },
    {
      title: "Lonely Together",
      imgPath: "assests/images/pichwai/p6.webp",
      price: 2080,
    },
    {
      title: "Owl",
      imgPath: "assests/images/pichwai/p7.webp",
      price: 2410,
    },
  ],
};

const WallArt = ({ art, i, addToCart }) => {
  const { width: w, height: h } = useThree((state) => state.viewport);
  const gap = 2;
  const imageWidth = 3;
  const imageHeight = h / 2;
  const texture = useLoader(TextureLoader, art.imgPath);

  const xPosition = (i + 1) * (imageWidth + gap) + (i + 1);
  const baseYPosition = 0; // Center y position of the image
  const titleAndPriceYPosition = baseYPosition + imageHeight / 2 + 0.5; // Above the image
  const yPositionButton = baseYPosition - imageHeight / 2 - 0.5; // Below the image

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
        position={[xPosition, titleAndPriceYPosition, 0]}
        scale={[1.8, 1.8, 1.8]} // Slightly larger font scale
        color="white"
        anchorX="center"
        anchorY="middle"
        font="https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4C0f-w.woff"
        maxWidth={imageWidth} // Ensure text does not exceed the image width
      >
        {art.title}  -   {`$${art.price}`}
      </Text>

      {/* <Text
        position={[xPosition, titleAndPriceYPosition - 0.5, 0]} // Slightly lower position to reduce vertical distance
        scale={[1.6, 1.6, 1.6]} // Uniform font scale with title
        color="black"
        anchorX="center" // Adjust to 'center' for consistent alignment with the title
        anchorY="middle"
        font="https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap"
        maxWidth={imageWidth} // Same as title to keep within image bounds
      >
        {`$${art.price}`}
      </Text> */}

      <mesh
        position={[xPosition, yPositionButton, 0]}
        onClick={handleAddToCart}
        onPointerOver={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
      >
        <RoundedBox // Using RoundedBox for rounded corners
          args={[1.2, 0.4, 0.1]} // width, height, depth
          radius={0.05} // The border radius
          smoothness={16} // Higher smoothness for smoother corners
        >
          <meshStandardMaterial color={0x000000} />
        </RoundedBox>
        <Text
          position-z={0.1}
          scale={[1.6, 1.6, 1.6]} // Increased scale for larger font
          color="white"
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
            color="#FFFFFF"
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
          {/* <Text
            position={[0, -0.5, 1.5]}
            anchorX="center"
            anchorY="top"
            font="https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4C0f-w.woff"
          >
            ~ Scott Adams
          </Text> */}

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

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

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
                background: "#008081",
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
                          backgroundColor: "#008081",
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
                          backgroundColor: "#008081",
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
                        backgroundColor: "#008081",
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
              // borderTop: "1px solid #ddd",
            }}
          >
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              Total: ${calculateTotal()}
            </span>
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
              onClick={() => alert('Proceed to Checkout')}
            >
              Buy Now
            </button>
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
  scene.background = new Color("#008081"); // Dark grey background
  return null;
};

function Collection() {
  const navigate = useNavigate();
  const { category } = useParams();
  const selectedArtPieces = ART_PIECES[category] || [];
  console.log("this is my category -> ", category);
  
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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
      <button
        className="back-button"
        onClick={() => navigate('/')}  // Navigate directly to the landing page
        style={{ position: 'absolute', top: '20px', left: '20px', zIndex: 1000 }}
      >
        <IoArrowBack size={25} /> Back
      </button>
      <Canvas shadows camera>
        <GradientBackground />
        <ambientLight intensity={0.5} color={0xffffff} />
        <SpotLight intensity={50} position={[8, 8, 8]} angle={Math.PI / 5} />
        <EffectComposer>
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        <Rig />
        <Scene
          addToCart={handleAddToCart}
          selectedArtPieces={selectedArtPieces}
        />
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
