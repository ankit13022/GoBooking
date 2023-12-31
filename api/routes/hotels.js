import express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, getHotelRooms, updateHotel } from "../controllers/hotel.js";

const router = express.Router();

router.post("/", createHotel);

router.put("/:id", updateHotel);

router.delete("/:id", deleteHotel);

router.get("/find/:id", getHotel);

router.get("/", getAllHotel);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router