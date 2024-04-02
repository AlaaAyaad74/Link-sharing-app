import { createContext, useState } from "react";
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
  const [state, setState] = useState(data);
  function changeData(name, value) {
    const cloned = { ...data };
    cloned[name] = value;
    setState(cloned);
  }
  return (
    <sharedData.Provider value={(data, changeData, state)}>
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
