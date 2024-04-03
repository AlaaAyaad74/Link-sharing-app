import { createContext, useState } from "react";
import HomePage from "./components/HomePage";
import Profile from "./pages/Profile";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Preview from "./pages/Preview";
import SaveAlert from "./components/savealert/SaveAlert";

export const sharedData = createContext();
const data = {
  firstName: "",
  lastName: "",
  email: "",
  profileImage: "",
  links: [],
};
// const save = false;

function App() {
  const path = window.location.pathname;
  const [state, setState] = useState({ old: { ...data }, new: { ...data } });
  const [saveAlert, setSaveAlert] = useState(false);
  function changeData(name, value) {
    const cloned = { ...state };
    cloned.old[name] = value;
    setState(cloned);
  }
  function editLink(index, item) {
    const cloned = { ...state };
    const clonedOldLinks = [...cloned.old.links];
    const link = { ...clonedOldLinks[index] };
    const newLink = { ...link, ...item };
    clonedOldLinks[index] = newLink;
    let old = { ...cloned.old };
    old.links = clonedOldLinks;
    setState({ ...state, old });
  }
  /********************* */
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  /**************************** */
  function isValidUrl(str) {
    const pattern = new RegExp(
      "^([a-zA-Z]+:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", // fragment locator
      "i"
    );
    return pattern.test(str);
  }
  /******************************* */

  function save() {
    const cloned = {
      ...state,
    };
    if (path === "/profile") {
      if (validateEmail(cloned.old.email)) {
        cloned.new = cloned.old;
        setSaveAlert(true);
      } else {
        alert(`${cloned.old.email} This Email is Not Valid`);
        cloned.old.email = " ";
      }
    }
    if (path === "/") {
      if (isValidUrl(cloned.old.links[cloned.old.links.length - 1].value)) {
        cloned.new = cloned.old;
        setSaveAlert(true);
      } else {
        alert(
          `${
            cloned.old.links[cloned.old.links.length - 1].value
          } This Url is Not Valid`
        );
        cloned.old.links[cloned.old.links.length - 1].value = " ";
      }
      console.log(cloned.old);
    }
    setState(cloned);
    setTimeout(() => {
      setSaveAlert(false);
    }, 1000);
  }
  const addLink = () => {
    const cloned = { ...state };
    const clonedOldLinks = [...cloned.old.links];
    clonedOldLinks.push({});
    cloned.old.links = clonedOldLinks;
    setState(cloned);
  };
  const deleteLink = (index) => {
    console.log("hello", index);
    const cloned = { ...state };
    let clonedOldLinks = [...cloned.old.links];
    // console.log(clonedOldLinks);
    let filter = clonedOldLinks.filter((l, i) => {
      console.log(l, i, index);
      return i != index;
    });
    // console.log({ filter });
    cloned.old.links = filter;
    setState(cloned);
  };
  return (
    <sharedData.Provider
      value={{ state, changeData, save, editLink, addLink, deleteLink }}
    >
      <Router>
        {/* <Header /> */}
        {saveAlert && <SaveAlert />}
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
