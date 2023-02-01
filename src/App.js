import './App.css';
import Header from './modules/Header/Header.jsx';
import Home from './modules/Home/Home.jsx';
// import Work from './modules/Work/Work.jsx' ;
import AboutMe from './modules/AboutMe/AboutMe.jsx' ;
import Footer from './modules/Footer/Footer.jsx' ;



function App() {
  return (
    <div className="App" >
      <Header />
      <Home />
      <AboutMe />
      {/* <Work /> */}
      <Footer />
    </div>
  );
}



export default App;