// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Design from './Design.css' 
import NavBar from './Components/NavBar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
    </div>
  );
}

export default App;
