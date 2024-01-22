import "../src/styles/blog.scss";
import "../src/styles/utils.scss";
import "../src/styles/header.scss";
import "../src/styles/banner.scss";
import Blog from "./components/Blog";
import Header from "./components/Header"
import Banner from "./components/Banner";

function App() {

  return (
    <>
    <Header />
    <Banner />
    <Blog />
    </>
  )
}

export default App
