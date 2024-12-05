export default function AudiencePrefer() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>
        Audience Preferences
        <span style={{ fontStyle: "italic", fontSize: "0.7em" }}>
          - by IMDB Top 1000
        </span>
      </h2>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <div>
              Please enter the number of movies you want in the box below👇:
            </div>
            <iframe
              width="100%"
              height="607"
              src="https://observablehq.com/embed/f4ebf45fc1b37aa7@92?cells=viewof+inputNumber%2Cbarchart"
            ></iframe>
          </div>
          <div className="col-md-4">
            <h3>Insights</h3>
            <ul
              style={{
                display: "block",
                fontStyle: "italic",
                fontSize: "0.9em",
                marginTop: "30px",
              }}
            >
              <li>
                Drama, Crime & Drama, and Action & Adventure & Drama dominate,
                indicating audience preference for emotionally engaging and
                complex narratives.
              </li>
              <li>
                While less frequent, niche genres like Western maintain cultural
                and artistic significance, showcasing their lasting impact
                despite limited appeal.
              </li>
              <li>...</li>
            </ul>
            <div
              style={{
                marginTop: "40px",
              }}
            >
              <p>Please play with the bar chart to get more findings!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
