// src/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { router } from "./routes.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Log requests (simple dev logging)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next();
});

// Routes
app.use("/api", router);

// Root route
app.get("/", (req, res) => {
  res.json({
    message: "DynamoDB CRUD API is running",
    docs: "/api/health",
    endpoints: {
      listItems: "GET /api/items",
      getItem: "GET /api/items/:id",
      createItem: "POST /api/items",
      updateItem: "PUT /api/items/:id",
      deleteItem: "DELETE /api/items/:id",
    },
  });
});

// Fallback 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// General Error handling
app.use((error, request, response, next) => {
  console.log("ERROR! Things are not working.", error.stack);

  response.status(500).json({
    error: error.name,
    message: error.message,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 DynamoDB CRUD API listening on http://localhost:${PORT}`);
});
