import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import App from "src/app/App";
import ErrorElement from "src/components/error-element";
import Loader from "src/components/loader";
const Home = lazy(() => import("src/pages/home"));
const About = lazy(() => import("src/pages/about"));
const History = lazy(() => import("src/pages/history"));
const BuildTrip = lazy(() => import("src/pages/build-trip"));

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
            <BuildTrip />
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
      { index: true, element: <Navigate to="home" /> },
    ],
  },
];
