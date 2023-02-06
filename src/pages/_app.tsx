import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { Amplify } from "aws-amplify";
import awsconfig from "../aws-exports";
import AuthContext from "@/context/AuthContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

Amplify.configure({ ...awsconfig, ssr: true });

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContext>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
          breakpoints: {
            xs: 500,
            sm: 800,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
        }}>
        <Elements stripe={stripePromise}>
          <Component {...pageProps} />
        </Elements>
      </MantineProvider>
    </AuthContext>
  );
}
