import profileImage from './assets/images/myphoto.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1> My Portfolio </h1>
      <h2> IMRAN ALI SOLANGI </h2>
      <img src={profileImage} alt="Profile-Image"/>
    </div>
  );
}

export default App;
