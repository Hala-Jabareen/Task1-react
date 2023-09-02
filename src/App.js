import logo from './logo.svg';
import './App.css';
import PageHeader from './PageHeader';
import Post from './Post';
import SidePage from './SidePage'; 
import "./style.css";
import Button from './Button';

function App() {
  return (
    <div className="App">
      <PageHeader/>
      <Post/>
      <Post/>
      <Post/>
      <SidePage/>
    
    </div>
  );
}

export default App;
