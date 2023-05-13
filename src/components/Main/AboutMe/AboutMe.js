import studentFoto from "../../../images/student-foto.jpg";
import Portfolio from "../Portfolio/Portfolio";

function AboutMe() {
  return (
    <div className="about-me">
      <h2 className="about-me__title" id="about-me">
        Студент
      </h2>
      <div className="about-me__line"></div>
      <div className="about-me__container">
        <img className="about-me__foto" alt="фото студента" src={studentFoto} />
        <article className="about-me__student">
          <p className="about-me__subtitle">Андрей</p>
          <p className="about-me__job">Начинающий веб-разработчик, 30 лет</p>
          <p className="about-me__description">
            Я живу в Ярославле. Хобби - велопрогулки. Активно ищу работу в it.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/Anterul"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </article>
      </div>
      <Portfolio />
    </div>
  );
}

export default AboutMe;
