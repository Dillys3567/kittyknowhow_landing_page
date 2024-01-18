import "../styles/About.css";
export default function Author() {
  return (
    <div>
      <div className="about">
        Dillys Naa Kai Annan
        <a href="https://github.com/Dillys3567">
          <img
            className="imagelink"
            src="src\assets\github-mark-white.png"
          ></img>
        </a>
        <a href="https://www.linkedin.com/in/dillys-annan-083b10211/">
          <img className="imagelink" src="src\assets\linkedin.png"></img>
        </a>
        <a href="https://twitter.com/DillysAnnan">
          <img className="twitter" src="src\assets\twitter.png"></img>
        </a>
      </div>
      <div>
        <a
          className="repolink"
          href="https://github.com/Dillys3567/kittyknowhow"
        >
          Find the repository here
        </a>
      </div>
    </div>
  );
}
