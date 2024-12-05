import { useLocation } from "react-router";
export default function TOC() {
  const { pathname } = useLocation();
  return (
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
          Personality Traits & Movie watching Habits
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#/Components/IMDB1000GenreConnection"
          className={`nav-link ${
            pathname.includes("IMDB1000GenreConnection") ? "active" : ""
          }`}
        >
          GenreConnection by IMDB Top 1000
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#/Components/IMDB1000TopRating"
          className={`nav-link ${
            pathname.includes("IMDB1000TopRating") ? "active" : ""
          }`}
        >
          Top Rating Movies by IMDB Top 1000
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#/Components/EndingContinuing"
          className={`nav-link ${
            pathname.includes("EndingContinuing") ? "active" : ""
          }`}
        >
          Ending...Continuing
        </a>
      </li>
    </ul>
  );
}
