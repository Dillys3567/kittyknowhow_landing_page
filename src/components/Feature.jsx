import "../styles/Feature.css";
export default function Feature(props) {
  const { image, title, info } = props;
  return (
    <div id="features">
      <div className="feature">
        <img className="featureimage" src={image} />
        <div>
          <div className="featureheading">
            <h3>{title}</h3>
          </div>
          <div>
            <h4 className="featureinfo">{info}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

//
