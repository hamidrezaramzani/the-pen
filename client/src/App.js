import { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Layout/Header";
import Loading from "./Components/Loading";
import UsersProvider from "./Context/UsersProvider";
import { publicRoutes } from "./routes";
const queryCache = new QueryCache();

const renderPublicRoutes = () => {
  return publicRoutes.map((route) => <Route {...route} />);
};
function App() {
  return (
    <UsersProvider>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Header />
            {renderPublicRoutes()}
            <Footer />
          </Suspense>
        </BrowserRouter>
      </ReactQueryCacheProvider>
    </UsersProvider>
  );
}

export default App;
