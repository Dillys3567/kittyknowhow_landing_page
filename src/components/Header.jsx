import "../styles/Header.css";
import "../styles/Navigators.css";
import NavButton from "./NavButton";
import DownloadButton from "./DownloadButton";

export default function Header() {
  return (
    <header className="header">
      <h1 className="appname">KittyKnowhow</h1>
      <ul className="navigators">
        <NavButton scrollId="features" label="Features"></NavButton>
        <NavButton scrollId="about" label="About"></NavButton>
      </ul>
      <DownloadButton></DownloadButton>
    </header>
  );
}
