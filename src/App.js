import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Blogs from "./components/Blogs/Blogs";

function App() {
  return (
    <div className="body-container">
      <Header></Header>
      <Main></Main>
      <Blogs></Blogs>
    </div>
  );
}

export default App;
