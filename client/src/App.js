import { lazy, Suspense } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Layout/Header';
import Loading from './Components/Loading';

const Home = lazy(() => import("./Components/Home/Home"));
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}> 
        <Header />
        <Route path="/" component={Home} />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
