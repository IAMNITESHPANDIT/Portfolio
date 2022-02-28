import './App.css';
import NavBar from './components/Navbar/navbar';
import About from  './components/about/about.component';
import Service from  './components/service/service.component';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <About/>
    <Service/>
    </div>
  );
}

export default App;
