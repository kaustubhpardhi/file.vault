import "./login.css";
import user from "./user.jpg";
function Login() {
  return (
    <div className="login-tab">
      <div className="login-card">
        <div className="login-1">
          <p className="login-title">Welcome Back 👋</p>
          <div className="input-item">
            <p className="input-title">Email</p>
            <input type="text" className="input-field"></input>
          </div>
          <div className="input-item">
            <p className="input-title">Password</p>
            <input type="text" className="input-field"></input>
          </div>
          <div className="login-button">
            <button className="login-btn ">Continue 🡢 </button>
          </div>
        </div>
        <div className="vl"></div>
        <div className="login-2">
          <div className="login-testimonial">
            <p className="testimonial">
              "file.vault has helped us alot , we literally became a million
              dollar company just after signing up with file.vault"
            </p>
          </div>
          <div className="login-testimonial-user">
            <img className="user-img" src={user}></img>
            <span className="user-name">Priya Iyer</span>
            <span className="user-designation">
              Engineering Manager , Google
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
