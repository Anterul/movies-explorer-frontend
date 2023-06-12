import src from "../../../images/three-dots.svg";

function Preloader() {
  return (
    <div className="preloader">
      <img className="preloader__image" src={src} alt="preloader" />
    </div>
  );
}

export default Preloader;
