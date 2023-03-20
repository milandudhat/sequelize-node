const express = require("express");
require("dotenv").config();
const db = require("../src/db/models/index.js");
const Products = db.products;
const Categories = db.categories;

const Sequelize = require("sequelize");

const port = process.env.PORT;

const app = express();

app.use(express.json());

// Refactored get request to use destructuring and removed try/catch
app.get("/", async ({ res }) => {
  const result = await Products.findAll().catch((error) => {
    console.error(error);
    return { success: false, data: error };
  });
  res.json({ success: true, message: "get all products", data: result });
});

// Refactored post request to use destructuring and removed try/catch
app.post("/", async ({ body }, res) => {

  const {
    title,
    amount,
    discount_type,
    discount_amount,
    avatar_image,
    images,
    short_description,
    description,
  } = body;
  const result = await Products.create({
    title,
    amount,
    discount_type,
    discount_amount,
    avatar_image,
    images,
    short_description,
    description,
  }).catch((error) => {
    console.error(error);
    return { success: false, data: error };
  });

  res.json({ success: true, message: "add product", data: result });
});

// Refactored delete request to use destructuring and removed try/catch
app.delete("/", async ({ headers: { id } }, res) => {
  const result = await Products.destroy({
    where: { id },
  }).catch((error) => {
    console.error(error);
    return { success: false, data: error };
  });

  res.json({ success: true, message: "delete product", data: result });
});

// Refactored put request to use destructuring and removed try/catch
app.put("/", async ({ headers: { id }, body }, res) => {
  const {
    title,
    amount,
    discount_type,
    discount_amount,
    avatar_image,
    images,
    short_description,
    description,
  } = body;

  const result = await Products.update(
    {
      title,
      amount,
      discount_type,
      discount_amount,
      avatar_image,
      images,
      short_description,
      description,
    },
    {
      where: { id },
    }
  ).catch((error) => {
    console.error(error);
    return { success: false, data: error };
  });

  res.json({ success: true, message: "update product", data: result });
});

// Refactored get request for categories to use destructuring and removed try/catch
app.get("/categories", async ({ res }) => {
  const result = await Categories.findAll().catch((error) => {
    console.error(error);
    return { success: false, data: error };
  });
  res.json({ success: true, message: "get all categories", data: result });
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});

