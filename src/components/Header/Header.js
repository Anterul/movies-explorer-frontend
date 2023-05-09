import { useEffect, useState } from "react";

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  function hadleScreenWidth() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", hadleScreenWidth)
    return () => window.removeEventListener("resize", hadleScreenWidth);
  });
  const screenWidth = width >= 1280

  return (
    <header className="header">
      <div className="header__logo"></div>
      {screenWidth ? (
        <p>++++</p>
      ) : (
        <p>----</p>
      )}
    </header>
  );
}

export default Header;