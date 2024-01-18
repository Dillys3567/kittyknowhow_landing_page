import "../styles/Reason.css";
export default function AboutItem(props) {
  const { heading, details } = props;
  return (
    <div className="reason">
      <h4 className="reasonheading">
        {heading}
        <hr></hr>
      </h4>
      <h4 className="reasonbody">{details}</h4>
    </div>
  );
}
