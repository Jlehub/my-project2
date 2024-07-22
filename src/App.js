
import './App.css';
import FooterOne from './FooterOne';
import FooterTwo from './FooterTwo';
import HomePage from './HomePage';
import NavigationBar from './NavigationBar';


function App() {
  return (

   
        <div className="App">
          <NavigationBar/>
          <HomePage/>
          
          <FooterTwo/>
          <FooterOne/>
        </div>
    
  );
}

export default App;

