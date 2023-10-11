// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar';
import HeroSection from './Components/Herosection';
// import Card from './Components/Card';
import Footer from './Components/Footer';
import SignInSide from './Components/Login';
function App() {
  return (
    <div className="App">
      {/* <NavBar /> */}
      {/* <HeroSection /> */}
      {/* <Card /> */}
      <SignInSide />
      <div>
      <Footer />
      </div>
    </div>
  );
}
export default App;
