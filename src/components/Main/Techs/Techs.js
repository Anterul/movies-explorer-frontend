function Techs() {
  return (
    <div className="techs" id="techs">
      <h2 className="techs__title">Технологии</h2>
      <div className="techs__line"></div>
      <p className="techs__subtitle">7 технологий</p>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__container">
        <li className="techs_technology">HTML</li>
        <li className="techs_technology">CSS</li>
        <li className="techs_technology">JS</li>
        <li className="techs_technology">React</li>
        <li className="techs_technology">Git</li>
        <li className="techs_technology">Express.js</li>
        <li className="techs_technology">MongoDB</li>
      </ul>
    </div>
  );
}

export default Techs;
