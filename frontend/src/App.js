import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import PaymentSuccess from './PaymentSuccess';
import DisplayData from './DisplayData';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/payment/success" element={<PaymentSuccess />}></Route>
        <Route path="/display-data" element={<DisplayData />}></Route>
      </Routes>
    </Router>
  );
}

export default App;