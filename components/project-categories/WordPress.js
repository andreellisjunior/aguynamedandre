import { wordpressData } from "../../constants/constants";

const WordPress = () => {
  return <>
  <div className='project-wrapper' id="wordpress">
    <div className="project-content center-container container">
        <h3 className="text-right">WordPress</h3>
        <div className="project-details-wrapper">
        {wordpressData.map(({ img, title, desc, year, special, link}) => (
            <div className="project-details flex column">
                <img src={img} alt="Screenshot of my website's homepage" />
                <h5>{title}</h5>
                <p><span style={{ color: "#00C1B6", fontWeight: "700"}}>Description:</span> {desc}</p>
                <p><span style={{ color: "#00C1B6", fontWeight: "700"}}>Year Built:</span> {year}</p>
                <p><span style={{ color: "#00C1B6", fontWeight: "700"}}>Technologies:</span> {special}</p>
                     <p className="link-wrapper"><a href={link} className="source-link-btn" target="_blank">Source</a></p>
            </div>
        ))}
        </div>
    </div>
</div>
</>;
};

export default WordPress;
