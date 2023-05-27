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
        <li className="techs__technology">HTML</li>
        <li className="techs__technology">CSS</li>
        <li className="techs__technology">JS</li>
        <li className="techs__technology">React</li>
        <li className="techs__technology">Git</li>
        <li className="techs__technology">Express.js</li>
        <li className="techs__technology">MongoDB</li>
      </ul>
    </div>
  );
}

export default Techs;
