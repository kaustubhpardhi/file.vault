import "./navbar.css";
import logo from "./logo.png";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="logo" />
        <p className="logo-title">file.vault</p>
      </div>
      <div className="navbar-items">
        <p className="navbar-item">Use cases</p>
        <p className="navbar-item">Company</p>
        <p className="navbar-item">Pricing</p>
      </div>
      <div className="navbar-buttons">
        <button className="login">Login</button>
        <button className="signup">Signup</button>
      </div>
    </div>
  );
}
export default Navbar;

//notes - keep it modular
// keep it minimal
