import React from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";
const RouteChangeTracker = () => {
  let location = useLocation();

  React.useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  }, [location]);

  return <div></div>;
};

export default RouteChangeTracker;
