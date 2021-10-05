import { memo, Suspense } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

import routes from "./router";
import ASAppHeader from "components/app-header";
import ASAppFooter from "components/app-footer";
import ASAppPlayerBar from "./pages/player/app-player-bar";
import ASLoading from "@/components/loading";
export default memo(function App() {
  return (
    <main id="app">
      <HashRouter>
        <ASAppHeader />
        <Suspense fallback={<ASLoading />}>{renderRoutes(routes)}</Suspense>
        <ASAppPlayerBar />
        <ASAppFooter />
      </HashRouter>
    </main>
  );
});
