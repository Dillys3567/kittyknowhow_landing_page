import "../styles/Button.css";
export default function NavButton(props) {
  const { label, scrollId } = props;

  const scrollIntoView = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <button className="navbutton" onClick={() => scrollIntoView(scrollId)}>
        {label}
      </button>
    </div>
  );
}
