"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import {
  loadStripe,
  // Stripe,
  // StripeElements,
  Appearance,
} from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useStripe, useElements } from "@stripe/react-stripe-js";

const appearance: Appearance = {
  theme: "stripe",

  variables: {
    colorPrimary: "dark:slate-800",
    colorBackground: "#ffffff",
    colorText: "#30313d",
    colorDanger: "#df1b41",
    fontFamily: "Ideal Sans, system-ui, sans-serif",
    spacingUnit: "2px",
    borderRadius: "4px",
    // See all possible variables below
  },
};

// Pass the appearance object to the Elements instance
// const elements = stripe.elements({clientSecret, appearance});

// https://docs.stripe.com/testing
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

function CheckoutPage() {
  const searchParams = useSearchParams();

  const orderId = searchParams.get("orderId");
  const cartId = searchParams.get("cartId");

  const fetchClientSecret = useCallback(async () => {
    const response = await axios.post("/api/payment", {
      orderId,
      cartId,
    });
    return response.data.clientSecret;
    // }, []);
  }, [cartId, orderId]);

  const options = { fetchClientSecret };

  return (
    <div className="productsContent px-0.5 sm:px-2 pt-4 pb-4 lg:mt-2">
      <div id="checkout" className="min-w-[400px] max-w-[1280px] mx-auto">
        <div className="px-2 grid gri-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4 justify-between mb-4 border-2">
          <p>example card visa</p>
          <p>number: 4242424242424242</p>
          <p>cvc: any 3 digits</p>
          <p>date: any future date</p>
        </div>
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout className="bg-muted/80 text-black dark:text-white" />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  );
}
export default CheckoutPage;
