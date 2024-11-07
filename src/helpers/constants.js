let ENDPOINT = "";

if (process.env.NODE_ENV === "production") {
  // console.log(process.enev.NODE_ENV);
  ENDPOINT = "https://threed-art-gallery-backend.onrender.com";
} else if (process.env.NODE_ENV === "development") {
  ENDPOINT = "http://localhost:3005"; 
}

export default ENDPOINT;
