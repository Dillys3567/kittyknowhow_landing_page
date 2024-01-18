import "../styles/Button.css";
import FileSaver from "file-saver";

const url =
  "https://Dillys3567.github.io/kittyknowhow_landing_page/src/apk/kittyknowhow.apk";

export default function DownloadButton() {
  const handleDownloadApk = () => {
    const fileName = "kittyknowhow.apk";
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div>
      <button className="download" onClick={handleDownloadApk}>
        Download App
      </button>
    </div>
  );
}
