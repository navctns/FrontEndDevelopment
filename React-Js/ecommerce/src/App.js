import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import './main.css';
import BlogPosts from './BlogPosts.js';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BlogPosts/>
      <Footer/>
    </div>
  );
}

export default App;
