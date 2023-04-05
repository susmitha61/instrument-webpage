
import './App.css';
// import Naving from './Component/Naving'
import Routing from './Component/Routing';
import Web from './Component/Web';
import UncontrolledExample from './Component/UncontrolledExample';
import LinkedExample from './Component/LinkedExample';
import Footer from './Component/Footer';


function App() {
  return (
    <div className="App">
      {/* <Naving/> */}
      <Routing/>
      <Web/> 
     <UncontrolledExample/>
     <br></br><br></br>
      <LinkedExample/>
       <Footer/> 

    </div>
  );
}

export default App;
