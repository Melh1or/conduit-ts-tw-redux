import { FC } from "react";
import { Banner } from "./common/components/banner/banner.component";
import { Header } from "./common/components/header/header.component";
import { Feed } from "./modules/feed/components/feed/feed.component";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Feed />
    </div>
  );
};
