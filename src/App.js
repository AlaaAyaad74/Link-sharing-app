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
import LinkedinSvg from "./components/svgs/LinkedinSvg";
import Github from "./components/svgs/Github";
import YoutubeSvg from "./components/svgs/YoutubeSvg";
import Preview from "./pages/Preview";
export const sharedData = createContext();
const data = {
  firstName: "",
  lastName: "",
  email: "",
  profileImage: "",
  links: [
    {
      name: "Linkedin",
      icon: <LinkedinSvg />,
      backgroundColor: "#0a66c2",
      path: "",
    },
    {
      name: "Github",
      icon: <Github />,
      backgroundColor: "#000000",
      path: "",
    },
    {
      name: "Youtube",
      icon: <YoutubeSvg />,
      backgroundColor: "red",
      path: "",
    },
  ],
};
// const save = false;

function App() {
  const [state, setState] = useState({ old: data, new: data });
  // console.log(state.old.profileImage);
  function changeData(name, value) {
    const cloned = { ...state };
    cloned.old[name] = value;
    // cloned[name] = value;
    // setState(cloned);
  }
  function changeLinks(name, value) {
    const cloned = { ...state };
    // cloned.old.links
    cloned.old.links = [
      ...cloned.old.links.push({
        name,
        path: value,
      }),
    ];
    console.log(cloned.old.links);
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  function getPath() {
    const path = window.location.pathname;
    console.log(path);
    return path;
  }
  function save() {
    const cloned = {
      ...state,
    };
    cloned.new = cloned.old;
    if (getPath() === "/profile") {
      cloned.new.email = validateEmail(state.old.email)
        ? state.old.email
        : alert(`${state.old.email} \n This Email is not valid`);
    }
    setState(cloned);
  }
  return (
    <sharedData.Provider value={{ state, changeData, save, changeLinks }}>
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
      </Router>
    </sharedData.Provider>
  );
}

export default App;
