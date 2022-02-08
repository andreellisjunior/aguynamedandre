import { frameworkData } from "../../constants/constants";

const Frameworks = () => {
  return <>
      <div className='project-wrapper' id="frameworks">
        <div className="project-content center-container container">
            <h3 className='mb-0'>FRAMEWORKS</h3>
            <p className='mt-0'>(and other stuff too)</p>
            <div className="project-details-wrapper">
            {frameworkData.map(({ id, img, title, desc, year, special, link}) => (
                <div className="project-details flex column" key={id}>
                    <img src={img} alt="Screenshot of my website's homepage" />
                    <h5>{title}</h5>
                    <p><span style={{ color: "#00C1B6", fontWeight: "700"}}>Description:</span> {desc}</p>
                    <p><span style={{ color: "#00C1B6", fontWeight: "700"}}>Year Built:</span> {year}</p>
                    <p><span style={{ color: "#00C1B6", fontWeight: "700"}}>Technologies:</span> {special}</p>
                    <p className="link-wrapper"><a href={link} className="source-link-btn">Source</a></p>
                </div>
            ))}
            </div>
        </div>
    </div>
  </>;
};

export default Frameworks;
