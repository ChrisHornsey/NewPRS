import logo from './logo.svg';
import './App.css';
import RecipeList from './Components/RecipeList/RecipeList';
import { LogInBox } from './Components/LogInBox/LoginBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>PRS 2.0!</h1>
      </header>
      <LogInBox/>

      <RecipeList/>
    </div>
    
  );
}

export default App;
