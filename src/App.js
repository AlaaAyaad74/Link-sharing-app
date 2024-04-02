import { createContext } from "react";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage";
import Profile from "./pages/Profile";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
export const sharedData = createContext();
const data = {
  firstName: "",
  lastName: "",
  email: "",
  links: [],
};

function App() {
  return (
    <sharedData.Provider value={data}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </sharedData.Provider>
  );
}

export default App;
