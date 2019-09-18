import React from "react";
import HomePage from './home';
import AboutPage from './about';
const routes = {
  "/HomePage": () => <HomePage />,
  "/AboutPage": () => <AboutPage />
};

export default routes;