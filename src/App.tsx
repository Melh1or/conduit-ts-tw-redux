import { FC, useEffect } from "react";
import { Route, Routes, useMatch, useNavigate } from "react-router-dom";

import { routes } from "./core/routes";

import { Header } from "./common/components/header/header.component";

interface AppProps {}

export const App: FC<AppProps> = () => {
  const isGlobalFeedPage = useMatch(routes.globalFeed.path);
  const navigate = useNavigate();

  useEffect(() => {
    if (isGlobalFeedPage) {
      navigate(routes.personalFeed.path);
    }
  }, []);

  return (
    <div className="pb-16">
      <Header />
      <Routes>
        {Object.values(routes).map((route) => (
          <Route path={route.path} element={<route.Element />} />
        ))}
      </Routes>
    </div>
  );
};
