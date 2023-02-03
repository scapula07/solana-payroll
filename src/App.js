
import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Layout from './layout';
import Home from './pages/Home';
import Staff from './pages/Staff';
import Documents from './pages/Documents';
import Boards from './pages/ProjectBoards';
import { WalletConnectProvider } from './walletprovider';
import '@solana/wallet-adapter-react-ui/styles.css'


function App() {
  return (
    <div className="App">
      <WalletConnectProvider>
      <Layout>
     
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Staff />}  />
          <Route exact path="/documents" element={<Documents />}  />
          <Route exact path="/boards" element={<Boards />}  />
        </Routes>
      
      </Layout>
      </WalletConnectProvider>
     
    </div>
  );
}

export default App;
