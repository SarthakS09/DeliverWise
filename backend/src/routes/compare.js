import { Router } from "express";

const router = Router();

// Dummy function to calculate delivery charges
function calculateCharges(platform, pickup, drop, orderValue) {
  // Base charges for each platform
  const base = {
    zomato: 30,
    swiggy: 25,
    blinkit: 40,
    dunzo: 35,
  };

  // Distance factor (dummy logic)
  const distanceFactor = pickup.length + drop.length;

  // Price calculation
  const price = base[platform] + Math.floor(distanceFactor / 5) + Math.floor(orderValue * 0.05);

  // Time estimate (dummy logic)
  const time = `${20 + (distanceFactor % 10)}-${25 + (distanceFactor % 10)} min`;

  return { price, time };
}

// POST route for comparison
router.post("/", (req, res) => {
  const { pickup, drop, orderValue } = req.body;

  if (!pickup || !drop || !orderValue) {
    return res.status(400).json({ error: "pickup, drop and orderValue are required" });
  }

  const result = {
    zomato: calculateCharges("zomato", pickup, drop, orderValue),
    swiggy: calculateCharges("swiggy", pickup, drop, orderValue),
    blinkit: calculateCharges("blinkit", pickup, drop, orderValue),
    dunzo: calculateCharges("dunzo", pickup, drop, orderValue),
  };

  res.json(result);
});

export default router;
