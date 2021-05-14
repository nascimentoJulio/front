import { Route, Switch } from 'react-router-dom';
import './App.css';
import { ROUTES } from './enuns';
import { RegisterDriverScreen } from './ui/screens/register-driver/register-driver.screen';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={ROUTES.REGISTER_DRIVER}>
          <RegisterDriverScreen/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
