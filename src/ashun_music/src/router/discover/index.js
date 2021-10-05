import React from "react";
import { Redirect } from "react-router";

const Discover = React.lazy(() => import("@/pages/discover"));
//引入子页面组件
const Artist = React.lazy(() => import("@/pages/discover/child-pages/artist"));
const DjRadio = React.lazy(() =>
  import("@/pages/discover/child-pages/djradio")
);
const NewAlbum = React.lazy(() =>
  import("@/pages/discover/child-pages/new-album")
);
const Ranking = React.lazy(() =>
  import("@/pages/discover/child-pages/ranking")
);
const Recommend = React.lazy(() =>
  import("@/pages/discover/child-pages/recommend")
);
const Songs = React.lazy(() => import("@/pages/discover/child-pages/songs"));

const childRoutes = [
  {
    path: "/discover",
    exact: true,
    render: () => <Redirect to="/discover/recommend" />,
  },
  {
    path: "/discover/recommend",
    component: Recommend,
  },
  {
    path: "/discover/ranking",
    component: Ranking,
  },
  {
    path: "/discover/songs",
    component: Songs,
  },
  {
    path: "/discover/djradio",
    component: DjRadio,
  },
  {
    path: "/discover/artist",
    component: Artist,
  },

  {
    path: "/discover/new-album",
    component: NewAlbum,
  },
];

const discoverRoutes = {
  path: "/discover",
  component: Discover,
  routes: childRoutes,
};

export default discoverRoutes;
