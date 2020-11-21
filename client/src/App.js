import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Layout/Header';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
