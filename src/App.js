import './App.css';
import NavBar from './components/Navbar/navbar';
import About from  './components/about/about.component';
import Service from  './components/service/service.component';
import Portfolio from './components/portfolio/portfolio.component';
import Review from './components/review/review.component';
import Footer from './components/footer/footer.component';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <About/>
    <Service/>
    <Portfolio/>
    <Review/>
    <Footer/>
    </div>
  );
}

export default App;
