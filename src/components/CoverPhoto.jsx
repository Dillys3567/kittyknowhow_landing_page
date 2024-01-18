import "../styles/CoverPhoto.css";

export default function CoverPhoto(props) {
  const { image } = props;
  return (
    <div className="landing-page">
      <div className="cover-image"></div>
      <div className="overlay">
        <h1>KittyKnowhow</h1>
        <p>Learn to care for your furbaby!</p>
      </div>
    </div>
  );
}
