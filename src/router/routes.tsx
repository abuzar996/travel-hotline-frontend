import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import App from "src/app/App";
import ErrorElement from "src/components/error-element";
import Loader from "src/components/loader";
const MinorInfo = lazy(() => import("src/pages/minor-info"));
const Home = lazy(() => import("src/pages/home"));
const About = lazy(() => import("src/pages/about"));
const History = lazy(() => import("src/pages/history"));
const Discover = lazy(() => import("src/pages/discover"));
const TripInfo = lazy(() => import("src/pages/trip-info"));
const CarDetailPage = lazy(() => import("src/pages/car-details"));
const PersonalInfo = lazy(() => import("src/pages/personal-info"));
const FlightDetails = lazy(() => import("src/pages/flight-details"));
const PaymentDetails = lazy(() => import("src/pages/payment-details"));
const FlightSummary = lazy(() => import("src/pages/flight-sumary"));
export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "home",
        errorElement: <ErrorElement />,
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        errorElement: <ErrorElement />,
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "build-my-trip",
        errorElement: <ErrorElement />,
        element: (
          <Suspense fallback={<Loader />}>
            <Discover />
          </Suspense>
        ),
      },
      {
        path: "my-trips",
        errorElement: <ErrorElement />,
        element: (
          <Suspense fallback={<Loader />}>
            <History />
          </Suspense>
        ),
      },
      {
        path: "discover",
        errorElement: <ErrorElement />,
        element: (
          <Suspense fallback={<Loader />}>
            <Discover />
          </Suspense>
        ),
      },
      {
        path: "trip-info/:id",
        errorElement: <ErrorElement />,
        element: (
          <Suspense fallback={<Loader />}>
            <TripInfo />
          </Suspense>
        ),
      },
      {
        path: "car-details",
        element: (
          <Suspense fallback={<Loader />}>
            <CarDetailPage />
          </Suspense>
        ),
      },
      {
        path: "flight-details",
        element: (
          <Suspense fallback={<Loader />}>
            <FlightDetails />
          </Suspense>
        ),
      },
      {
        path: "flight-summary",
        element: (
          <Suspense fallback={<Loader />}>
            <FlightSummary />
          </Suspense>
        ),
      },
      {
        path: "payment-details",
        element: (
          <Suspense fallback={<Loader />}>
            <PaymentDetails />
          </Suspense>
        ),
      },
      {
        path: "personal-info",
        element: (
          <Suspense fallback={<Loader />}>
            <PersonalInfo />
          </Suspense>
        ),
      },
      {
        path: "minor-info",
        element: (
          <Suspense fallback={<Loader />}>
            <MinorInfo />
          </Suspense>
        ),
      },
      { index: true, element: <Navigate to="home" /> },
    ],
  },
];
