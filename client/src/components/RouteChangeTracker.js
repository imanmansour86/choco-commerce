import React, { useEffect } from "react";

import ReactGA from "react-ga";

const RouteChangeTracker = ({ history }) => {
  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return <div></div>;
};

export default RouteChangeTracker;
