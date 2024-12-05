export default function GenreConnection() {
  return (
    <div style={{ marginTop: "40px" }}>
      <h2>
        Genre Connectivity
        <span style={{ fontStyle: "italic", fontSize: "0.7em" }}>
          - by IMDB Top 1000
        </span>
      </h2>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-8">
            <iframe
              width="100%"
              height="1408"
              frameBorder="0"
              src="https://observablehq.com/embed/e8ffc286a9ee33bc@391?cells=viewof+useEdgeBundling%2Cviewof+useForceInABox%2Cviewof+aspectRatio%2Cviewof+selectedGenres%2Cchart%2Cchart1"
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
                Genres such as Drama, Comedy, and Romance frequently co-occur,
                suggesting their centrality in creating multi-genre films that
                resonate widely.
              </li>
              <li>
                Comedy’s ability to connect with almost all other genres
                highlights its versatility and universal appeal.
              </li>
              <li>...</li>
            </ul>
            <div
              style={{
                marginTop: "40px",
              }}
            >
              <p>Please play with the GenreNet to explore more insights!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
