import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
    <div
      style={{
        border: "4px dashed #a5d6a7",
        borderRadius: "8px",
        padding: "10px",
        display: "inline-block",
        backgroundColor: "#f0f8ff", // 背景色（可选）
      }}
    >
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a
            href="#/Components/mentalHealth"
            className={`nav-link ${
              pathname.includes("mentalHealth") ? "active" : ""
            }`}
          >
            Mental Health Crsis
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#/Components/Personality"
            className={`nav-link ${
              pathname.includes("Personality") ? "active" : ""
            }`}
          >
            Personality Trait & Movie-Watching Habits
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#/Components/IMDB1000GenreConnection"
            className={`nav-link ${
              pathname.includes("IMDB1000GenreConnection") ? "active" : ""
            }`}
          >
            GenreConnection
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#/Components/IMDB1000TopRating"
            className={`nav-link ${
              pathname.includes("IMDB1000TopRating") ? "active" : ""
            }`}
          >
            Top Rating Movies
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#/Components/EndingContinuing"
            className={`nav-link ${
              pathname.includes("EndingContinuing") ? "active" : ""
            }`}
          >
            Conclusion
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#/Components/sourceCode"
            className={`nav-link ${
              pathname.includes("sourceCode") ? "active" : ""
            }`}
          >
            Source Code & Data
          </a>
        </li>
      </ul>
    </div>
  );
}
