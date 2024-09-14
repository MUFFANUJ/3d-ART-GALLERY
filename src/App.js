import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import { SpotLight, Text, ScrollControls, Scroll, Html } from '@react-three/drei';
import { EffectComposer, Vignette } from '@react-three/postprocessing';
import { TextureLoader, Vector3, Color } from 'three';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const ART_PIECES = [
  { title: 'Beautiful Beast', imgPath: '/beauty_and_beast.jpeg', price: "\u20B9 400" },
  { title: 'Stillness', imgPath: '/crane.jpeg', price: "\u20B9 400" },
  { title: 'Foxy', imgPath: '/foxy.jpeg', price: "\u20B9 400" },
  { title: 'Gentle Giant', imgPath: '/horse_sketch.jpeg', price: "\u20B9 400" },
  { title: 'Purity', imgPath: '/kindness.jpeg', price: "\u20B9 400" },
  { title: 'Lonely Together', imgPath: '/lonely_together.jpeg', price: "₹ 400" },
  { title: 'Owl', imgPath: '/owl.jpeg', price: "₹ 400" },
  { title: 'Menace', imgPath: '/panther.jpeg', price: "\u20B9 400" },
  { title: 'Paradise', imgPath: '/paradise.jpeg', price: "₹ 400" },
  { title: 'Friendship', imgPath: '/sprited_away.jpeg', price: "₹ 400" },
  { title: 'Wanderlust', imgPath: '/wonder.jpeg', price: "₹ 400" },
  { title: 'Serenity', imgPath: '/forest.jpeg', price: "₹ 400" },
];

// const GirlFigure = ({ scrollPosition }) => {
//   const { nodes, materials } = useGLTF('/models/girl_model.glb');
//   const { viewport } = useThree();

//   useFrame(() => {
//     // Adjust the Y position based on scroll
//     const positionY = Math.sin(scrollPosition * 0.1) * 2; // Example animation
//     nodes.Girl.position.y = positionY;
//   });

//   return (
//     <group position={[viewport.width / 2 - 2, 0, 0]}>
//       <mesh
//         geometry={nodes.Girl.geometry}
//         material={materials.GirlMaterial}
//       />
//     </group>
//   );
// };



const WallArt = (props) => {
  const { art, i, addToCart } = props;
  const { width: w, height: h } = useThree((state) => state.viewport);
  const gap = 2;  // Horizontal gap between images
  const imageWidth = 3;
  const texture = useLoader(TextureLoader, art.imgPath);

  // Calculate positions dynamically based on index `i`
  const xPosition = (i + 1) * (imageWidth + gap) + (i + 1);
  const yPositionImage = 0;  // Base level for the image
  const yPositionTitle = yPositionImage + 2.5;  // Move the title above the image
  const yPositionPrice = yPositionImage - 2.5;   // Price below the image
  const yPositionButton = yPositionPrice - 0.8;  // Button below the price

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Stop event propagation to avoid bubbling issues
    console.log(`Adding ${art.title} to cart`);
    addToCart(art);
  };

  return (
    <group>
      {/* Spotlight for the image */}
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

      {/* Title above the artwork */}
      <mesh position={[xPosition, yPositionTitle, 0]}>
        <planeGeometry args={[1.25, 0.5]} />
        <meshStandardMaterial color={0xFAEBD7} />
        <Text
          position-z={0}
          scale={[2, 2, 2]}
          color="black"
          anchorX="center"
          anchorY="middle"
          font="https://fonts.gstatic.com/s/sacramento/v5/buEzpo6gcdjy0EiZMBUG4C0f-w.woff"
        >
          {art.title}
        </Text>
      </mesh>

      {/* Artwork Image */}
      <mesh castShadow position={[xPosition, yPositionImage, 0]}>
        <boxBufferGeometry attach="geometry" args={[imageWidth, h / 2, 0.07]} />
        <meshStandardMaterial attach="material" map={texture} roughness={0.2} metalness={0.8} color={0xFAEBD7}/>
      </mesh>

      {/* Price below the artwork */}
      {art.price && (
      <mesh position={[xPosition, yPositionPrice, 0]}>
        <planeGeometry args={[1.5, 0.6]} /> {/* Adjust dimensions if needed */}
        <meshStandardMaterial color={0xFAEBD7} />
        <Text 
          position-z={0.1} 
          scale={[3, 3, 3]} 
          color="black" 
          anchorX="center" 
          anchorY="middle" 
          font="https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap"
        >
          {art.price}
        </Text>
      </mesh>
    )}

      {/* Add to Cart Button below the price */}
      <mesh
        position={[xPosition, yPositionButton, 0]}  // Adjust position to be closer to the art
        onClick={handleAddToCart}  // Use the new function
        onPointerOver={(e) => e.stopPropagation()}  // Prevent event bubbling
        onPointerDown={(e) => e.stopPropagation()}  // Prevent event bubbling
      >
        {/* Rounded corners with vibrant color */}
        <planeGeometry args={[1.4, 0.6]} />
        <meshStandardMaterial color={0x1E90FF} />  {/* Vibrant blue color */}

        {/* Slightly offset to add shadow effect */}
        <mesh
          position={[0, 0, 0.01]}  // Create a shadow effect
          scale={[1.05, 1.05, 1]}  // Slightly larger for shadow
        >
          <planeGeometry args={[1.5, 0.7]} />
          <meshStandardMaterial color={0xFF6666} />  {/* Lighter blue for shadow */}
        </mesh>

        {/* Add text with bolder and more eye-catching font */}
        <Text
          position-z={0.1}  // Position text slightly above button
          scale={[2.2, 2.2, 2.2]}  // Larger scale for prominence
          color="white"  // Change text color to white for better contrast
          anchorX="center"
          anchorY="middle"
          font="https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap" // Bold Roboto font for clear visibility
        >
          Add to Cart
        </Text>
      </mesh>
    </group>
  );
};

const Scene = ({ addToCart }) => {
  const { width: screenWidth } = useThree((state) => state.viewport);
  console.log("screenWidth", screenWidth);
  const textScale = screenWidth < 5.5 ? 2 : 4;

  return (
    <Suspense fallback={
      <Html style={{ fontSize: '6vw', whiteSpace: 'nowrap', color: 'white' }} center>
        Loading 3D Art Gallery...
      </Html>
    }>
      <ScrollControls infinite horizontal damping={4} pages={28 * Math.exp(-0.11 * screenWidth)} distance={1}>
        <Scroll>
        {/* <GirlFigure />
          {ART_PIECES.map((art, i) => (
            <WallArt
              key={i}
              i={i}
              art={art}
              addToCart={addToCart}
            />
          ))} */}
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
            <WallArt
              key={i}
              i={i}
              art={art}
              addToCart={addToCart}
            />
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
          position: 'absolute',
          top: 20,
          right: 20,
          cursor: 'pointer'
        }} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <FontAwesomeIcon icon={faCartShopping} style={{ color: 'white', fontSize: '24px' }}/>
         {cart.length > 0 && <span style={{ color: 'white', fontSize: '24px'}}>{cart.length}</span>}
      </div>

      {/* Cart Popup */}
      {isOpen && (
        <div className="cart" style={{
          position: 'absolute',
          top: 60,
          right: 20,
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
          border: '1px solid #ddd',
          fontFamily: 'Arial, sans-serif',
          width: '300px' 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{
              margin: 0,
              paddingBottom: '10px',
              borderBottom: '1px solid #ddd',
              fontSize: '18px',
              color: '#333'
            }}>Your Cart</h3>

            {/* Cross button to close the popup */}
            <button 
              style={{ cursor: 'pointer', background: 'none', border: 'none', fontSize: '20px' }} 
              onClick={() => setIsOpen(false)}
            >
              &times;
            </button>
          </div>
          
          {cart.length === 0 ? (
            <p style={{ marginTop: '10px', color: '#777' }}>No items in cart</p>
          ) : (
            <ul style={{ padding: 0, listStyleType: 'none', marginTop: '15px' }}>
              {cart.map((item, index) => (
                <li key={index} style={{
                  marginBottom: '15px',
                  paddingBottom: '10px',
                  borderBottom: '1px solid #eee'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '16px' }}>{item.title}</span>
                    <span style={{ color: '#888' }}>{item.price} x {item.quantity} </span>
                  </div>
                  
                  <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <button
                        style={{
                          padding: '5px 10px',
                          fontSize: '16px',
                          borderRadius: '5px',
                          backgroundColor: '#f5f5f5',
                          border: '1px solid #ccc',
                          cursor: 'pointer',
                          marginRight: '10px'
                        }}
                        onClick={() => onDecrement(item)}
                      >-</button>

                      <button
                        style={{
                          padding: '5px 10px',
                          fontSize: '16px',
                          borderRadius: '5px',
                          backgroundColor: '#f5f5f5',
                          border: '1px solid #ccc',
                          cursor: 'pointer',
                          marginRight: '10px'
                        }}
                        onClick={() => onIncrement(item)}
                      >+</button>
                    </div>
      
                    <button
                      style={{
                        padding: '5px 10px',
                        fontSize: '14px',
                        borderRadius: '5px',
                        backgroundColor: '#FF6666',
                        border: 'none',
                        color: 'white',
                        cursor: 'pointer'
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
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * 0.5, mouse.y * 0.5, camera.position.z), 0.2));
};

const GradientBackground = () => {
  const { scene } = useThree();
  scene.background = new Color('#1D2951'); // Dark grey background
  return null;
};

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.title === item.title);
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
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.title !== item.title));
  };
  // const addToCart = (art) => {
  //   // Log to verify function call
  //   console.log(`Adding ${art.title} to cart`);
  //   setCart((prevCart) => [...prevCart, art]);
  // };

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
        <Scene addToCart={handleAddToCart} />
      </Canvas>
      <Cart cart={cart} onIncrement={handleIncrement} onDecrement={handleDecrement} onDelete={handleDelete} />
    </>
  );
}


export default App;

