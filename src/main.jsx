import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Headers from "./components/custom/Header";
import CreateTrip from "./create-trip/CreateTrip";
import { Toaster } from "@/components/ui/sonner"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import ViewTrip from "./viewTrip/[tripId]/ViewTrip";
import MyTrips from "./my-trips/components/MyTrips";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },

  {
    path: "/create-trip",
    element: <CreateTrip/>
  },
  {
    path: '/view-trip/:tripId',
    element: <ViewTrip />
  },
  {
    path: '/my-trips',
    element: <MyTrips />
  }

])

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
  <Headers />
  <Toaster/>
  <RouterProvider router={router}/>
  </GoogleOAuthProvider>
  </StrictMode>
);
