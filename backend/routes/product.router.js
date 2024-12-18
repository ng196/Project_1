import express from "express";
import {
    getproduct,
    createproduct,
    updateproduct,
    deleteproduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Routes
router.get("/", getproduct);
router.post("/", createproduct);
router.put("/:id", updateproduct);
router.delete("/:id", deleteproduct);

export default router;
