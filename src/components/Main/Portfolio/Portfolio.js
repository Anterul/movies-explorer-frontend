import portfolioArrow from "../../../images/portfolio-arrow.svg";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__container">
        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://github.com/Anterul/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__text">Статичный сайт</p>
            <img
              className="portfolio__arrow"
              src={portfolioArrow}
              alt="Статичный сайт"
            />
          </a>
          <div className="portfolio__line"></div>
        </li>
        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://github.com/Anterul/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__text">Адаптивный сайт</p>
            <img
              className="portfolio__arrow"
              src={portfolioArrow}
              alt="Адаптивный сайт"
            />
          </a>
          <div className="portfolio__line"></div>
        </li>
        <li className="portfolio__link-container">
          <a
            className="portfolio__link"
            href="https://github.com/Anterul/react-mesto-api-full-gha"
            target="_blank"
            rel="noreferrer"
          >
            <p className="portfolio__text">Одностраничное приложение</p>
            <img
              className="portfolio__arrow"
              src={portfolioArrow}
              alt="Одностраничное приложение"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
