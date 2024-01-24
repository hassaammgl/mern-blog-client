import "../src/styles/blog.scss";
import "../src/styles/utils.scss";
import "../src/styles/header.scss";
import "../src/styles/banner.scss";
import Blog from "./components/Blog";
import "../src/styles/blogdetails.scss";
import Header from "./components/Header";
import Banner from "./components/Banner";
import "../src/styles/blogcontainer.scss";
// import BlogContainer from "./components/BlogContainer";
import BlogDeatils from "./components/BlogDeatils";

function App() {

  return (
    <>
    <Header />
    <Banner />
    <Blog />
    <BlogDeatils />
    </>
  )
}

export default App
