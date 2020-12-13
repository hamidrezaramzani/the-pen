import { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Layout/Header";
import Loading from "./Components/Loading";
import UsersProvider from "./Context/UsersProvider";
import { publicRoutes , privateRoutes } from "./routes";
import PrivateRoute from './Components/PrivateRoute';
const queryCache = new QueryCache();

const renderPublicRoutes = () => {
  return publicRoutes.map((route) => <Route {...route} />);
};
const renderPrivateRoutes = () => {
  return privateRoutes.map((route) => <PrivateRoute {...route} />);
};


function App() {
  return (
    <UsersProvider>
      <ReactQueryCacheProvider queryCache={queryCache}>
        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Header />
            {renderPublicRoutes()}
            {renderPrivateRoutes()}
            <Footer />
          </Suspense>
        </BrowserRouter>
      </ReactQueryCacheProvider>
    </UsersProvider>
  );
}

export default App;
