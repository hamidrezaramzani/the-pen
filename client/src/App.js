import { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Header from './Components/Layout/Header';
import Loading from './Components/Loading';
const Home = lazy(() => import("./Components/Home/Home"));
const Register = lazy(() => import("./Components/User/Register"));
const Login = lazy(() => import("./Components/User/Login"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}> 
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/sign-up" component={Register} />
        <Route path="/sign-in" component={Login} />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
