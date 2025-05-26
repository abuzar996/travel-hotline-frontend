import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import App from "src/app/App";
import ErrorElement from "src/components/error-element";
import Loader from "src/components/loader";
const Home = lazy(() => import("src/pages/home"));
const About = lazy(() => import("src/pages/about"));
const History = lazy(() => import("src/pages/history"));
// const BuildTrip = lazy(() => import("src/pages/build-trip"));
const Discover = lazy(() => import("src/pages/discover"));
const TripInfo = lazy(() => import("src/pages/trip-info"));
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
      { index: true, element: <Navigate to="home" /> },
    ],
  },
];
