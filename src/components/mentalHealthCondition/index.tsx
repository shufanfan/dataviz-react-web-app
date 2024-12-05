export default function MentalHealthCondition() {
  return (
    <div>
      <h2>Mental Health Reporting and Severity</h2>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <iframe
              width="100%"
              height="1069"
              frameBorder="0"
              src="https://observablehq.com/embed/408a2ec7d52b9812@100?cells=svg%2Csvg2"
            ></iframe>
          </div>
          <div className="col-md-4">
            <h3>Insights</h3>
            <ul
              id="part1-insights"
              style={{
                display: "block",
                fontStyle: "italic",
                fontSize: "0.9em",
                marginTop: "30px",
              }}
            >
              <li>
                A significant proportion (50.20%) of individuals with mental
                health challenges do not report their conditions.
              </li>
              <li>
                Among those who do not report, over 64% exhibit medium to high
                severity levels.
              </li>
            </ul>
            <div
              style={{
                marginTop: "40px",
              }}
            >
              <p>
                The reluctance to disclose mental health issues, particularly
                among those with severe conditions, highlights a gap in
                accessing timely intervention. This suggests that alternate
                forms of engagement, such as recreational activities like
                movie-watching, could play a supportive role in mental
                well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
