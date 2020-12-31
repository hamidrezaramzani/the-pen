import { Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Layout/Header";
import Loading from "./Components/Loading";
import UsersProvider from "./Context/UsersProvider";
import { publicRoutes, privateRoutes } from "./routes";
import PrivateRoute from "./Components/PrivateRoute";

const renderPublicRoutes = () => {
  return publicRoutes.map((route) => <Route {...route} />);
};
const renderPrivateRoutes = () => {
  return privateRoutes.map((route) => <PrivateRoute {...route} />);
};

function App() {
  return (
    <UsersProvider>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Header />
          {renderPublicRoutes()}
          {renderPrivateRoutes()}
          <Footer />
        </Suspense>
      </BrowserRouter>
    </UsersProvider>
  );
}

export default App;
