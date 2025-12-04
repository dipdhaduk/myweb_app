import express from "express";
import dotenv from "dotenv";
import Stripe from "stripe";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(bodyParser.json());

// 🪙 Create Checkout Session
app.post("/create-checkout-session", async (req, res) => {
  try {
    // Expect product data in the request body
    const product = req.body;

    // Calculate price in cents
    const productPrice = parseFloat(product.productprice) * 100;

    // Apply discount if exists (e.g., "10%" → 10)
    let discountPercent = 0;
    if (product.discount) {
      discountPercent = parseFloat(product.discount.replace("%", ""));
    }
    const discountedPrice = productPrice - (productPrice * discountPercent) / 100;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "INR",
            product_data: {
              name: product.producttitle,
              description: product.productdescription,
              images: [product.productimage],
            },
            unit_amount: Math.round(discountedPrice), // in cents
          },
          quantity: parseInt(product.quantity),
        },
      ],
      success_url: "http://localhost:5000/success",
      cancel_url: "http://localhost:5000/cancel",
    });

    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Test routes
app.get("/success", (req, res) => res.send("✅ Payment Successful!"));
app.get("/cancel", (req, res) => res.send("❌ Payment Cancelled."));

app.listen(process.env.PORT || 5000, () =>
  console.log(`Server running on http://localhost:${process.env.PORT || 5000}`)
);