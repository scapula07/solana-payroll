
import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from './layout';
import Home from './pages/Home';
import Employees from './pages/Employees';




function App() {
  return (
    <div className="App">
      <Layout>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Employees />}  />
        </Routes>

      </Layout>
     
    </div>
  );
}

export default App;
