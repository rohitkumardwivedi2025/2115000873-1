import express from 'express';
import axios from 'axios';
import cors  from 'cors'
import { getToken } from './tokenGeneration.js';
const app = express();
const port = 3000;

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions));

let token = "";

const itemsArray = [
  "Phone",
  "Computer",
  "TV",
  "Earphone",
  "Tablet",
  "Charger",
  "Mouse",
  "Keypad",
  "Bluetooth",
  "Remote",
  "Speaker",
  "Headset",
  "Laptop",
  "PC",
];

const initializeToken = async () => {
  try {
    token = await getToken();
    console.log("Token initialized successfully");
  } catch (error) {
    console.error("Error fetching token:", error.message || error);
  }
};

initializeToken().then(() => {
  app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
  });
});

app.get("/categories/:categoryname/products", async (request, response) => {
  const { categoryname } = request.params;
  console.log(categoryname, "asdfksdjfkdsjfko");
  // const { n } = request.query;
  // console.log('Query Parameters:', request.query); // Log the entire query object
  // console.log(${n} ${categoryname});

  if (!itemsArray.includes(categoryname)) {
    return response.status(404).json({ error: "Category not found" });
  }

  try {
    const res = await axios.get(`http://20.244.56.144/test/companies/AMZ/categories/${categoryname}/products?top=10&minPrice=1&maxPrice=10000`,
      // {
      // http://20.244.56.144/test/companies/AMZ/categories/${categoryname}/products?10&minPrice=1&maxPrice=10000
      // params: {
      //     n: 10, // Provide a default value for n
      //     minprice: 1,
      //     maxprice: 1000
      // },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    response.status(200).json(res.data);
  } catch (error) {
    console.error("Error:", error.message || error);
    response.status(500).json({ error: "Error fetching products" });
  }
});