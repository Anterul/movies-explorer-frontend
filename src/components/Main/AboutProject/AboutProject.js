function AboutProject() {
  return (
    <div className="about-project">
      <h2 className="about-project__title" id="about-project">
        О проекте
      </h2>
      <div className="about-project__line"></div>
      <div className="about-project__container">
        <h2 className="about-project__title about-project__title_in-container">
          Дипломный проект включал 5 этапов
        </h2>
        <p className="about-project__description">
          Составление плана, работу над бэкендом, вёрстку, добавление
          функциональности и финальные доработки.
        </p>
        <h2 className="about-project__title about-project__title_in-container">
          На выполнение диплома ушло 5 недель
        </h2>
        <p className="about-project__description">
          У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
          соблюдать, чтобы успешно защититься.
        </p>
      </div>
      <div className="about-project__weeks-container">
        <div className="about-project__web-container">
          <p className="about-project__weeks-text about-project__weeks-text_color_green">
            1 неделя
          </p>
          <p className="about-project__weeks-text">Back-end</p>
        </div>
        <div className="about-project__web-container">
          <p className="about-project__weeks-text about-project__weeks-text_color_grey">
            4 недели
          </p>
          <p className="about-project__weeks-text">Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
