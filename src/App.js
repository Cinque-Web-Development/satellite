import './App.css';

import NavBarCenterName from './components/NavBars/NavBarCenterName';
import NavBarLogin from './components/NavBars/NavBarLogin';

export default function App() {
  return (
    <div className="App">
      <div className="nav-section">
        <h1>Nav Bars</h1>
        <NavBarCenterName />
        <br/>
        <NavBarLogin />
      </div>
      <br />
      <hr />
    </div>
  );
}