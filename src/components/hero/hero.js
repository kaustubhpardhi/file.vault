import "./hero.css";
import lock from "./assets/lock.png";
import file from "./assets/files.png";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <div className="left-img">
          <img src={lock} alt="lock" className="lock-img"></img>
        </div>
      </div>
      <div className="hero-main">
        <div className="title">
          <span>Transform the way </span>
          <span>you manage your files</span>
        </div>
        <div className="title-p">
          <span>
            Say goodbye to scattered documents and the stress of disorganization
          </span>
          <span>
            Say hello to simplicity with our powerful document management tool
          </span>
        </div>
        <div className="get-started">
          <button className="get-started-button">Get Started 🚀</button>
        </div>
      </div>
      <div className="hero-right">
        <div className="left-img">
          <img src={file} alt="lock" className="file-img"></img>
        </div>
      </div>
    </div>
  );
}
export default Hero;
