function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__container">
        <div className="footer__link-container">
          <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel="noreferrer">
            Яндекс.Практикум
          </a>
          <a className="footer__link" href="https://github.com/Anterul" target="_blank" rel="noreferrer">
            Github
          </a>
        </div>
        <p className="footer__copyright">&copy; {date}</p>
      </div>
    </footer>
  );
}

export default Footer;