import './App.css';

import NavBarCenterName from './components/NavBars/NavBarCenterName';
import NavBarLogin from './components/NavBars/NavBarLogin';
import Buttons from './components/Buttons/Buttons';
import Cards from './components/Cards/Cards';
import Forms from './components/Forms/Forms';

export default function App() {
  return (
    <div className="App">
      <div className="nav-section">
        <h1 className="section-name">Nav Bars</h1>
        <NavBarCenterName />
        <br/>
        <NavBarLogin />
      </div>
      <br />
      <hr />
      <br />
      <div>
        <h1 className="section-name">Buttons</h1>
        <Buttons />
      </div>
      <br />
      <hr />
      <br />
      <div>
        <h1 className="section-name">Cards</h1>
        <Cards />
      </div>
      <br />
      <hr />
      <br />
      <div>
        <h1 className="section-name">Forms</h1>
        <Forms />
      </div>
      <br />
      <hr />
      <br />
    </div>
  );
}