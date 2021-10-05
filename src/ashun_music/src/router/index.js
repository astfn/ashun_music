import React from "react";
import { Redirect } from "react-router";

import discoverRoutes from "./discover";
const Discover = React.lazy(() => import("@/pages/discover"));

const Friends = React.lazy(() => import("@/pages/friends"));
const Mine = React.lazy(() => import("@/pages/mine"));
const Player = React.lazy(() => import("@/pages/player"));

//不能使用这样的引入形式
// const Discover = () => import("@/pages/discover");
// const Friends = () => import("@/pages/friends");
// const Mine = () => import("@/pages/mine");

const routes = [
  {
    path: "/",
    exact: true,
    render: () => <Redirect to="/discover" />,
  },
  {
    ...discoverRoutes,
  },
  {
    path: "/song",
    component: Discover,
    routes: [{ path: "/song", exact: true, component: Player }],
  },
  {
    path: "/friends",
    component: Friends,
  },
  {
    path: "/mine",
    component: Mine,
  },
];
export default routes;
