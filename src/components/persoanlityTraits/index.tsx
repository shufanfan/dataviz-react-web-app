export default function PersonalityTraits() {
  return (
    <div>
      <div style={{ marginTop: "40px" }}>
        <h2>Personality Traits and Movie-Watching Habits</h2>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <iframe
                width="100%"
                height="513"
                frameBorder="0"
                src="https://observablehq.com/embed/9edc351a46209a85@419?cells=groupedBar1"
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
                  People with medium levels of conscientiousness, extraversion,
                  and neuroticism dominate the “less than once a month” group,
                  indicating limited engagement with movies.
                </li>
                <li>
                  The “several times a week” group shows a balanced distribution
                  of personality traits, suggesting broader appeal and potential
                  stress-relief benefits across diverse psychological profiles.
                </li>
              </ul>
              <div
                style={{
                  marginTop: "40px",
                }}
              >
                <p>
                  Frequent movie-watching, as observed in the more balanced
                  personality trait distribution, may serve as a universal
                  coping mechanism or recreational activity for individuals of
                  varying mental states. This aligns with the project’s goal of
                  evaluating movies as a self-healing tool.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>Personality Dimensions and Movie Genre Preferences</h2>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-8">
              <iframe
                width="100%"
                height="539"
                frameBorder="0"
                src="https://observablehq.com/embed/9edc351a46209a85@420?cells=viewof+personalityTrait%2Cboxplot"
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
                  Extraversion: Genres like War have higher median scores,
                  indicating preference among extroverted individuals.
                </li>
                <li>
                  Conscientiousness: Historical genres appeal to highly
                  conscientious individuals.
                </li>
                <li>
                  Neuroticism: Drama is preferred by individuals with higher
                  neuroticism levels, potentially due to its emotional depth.
                </li>
              </ul>
              <div
                style={{
                  marginTop: "40px",
                }}
              >
                <p>
                  Certain genres like Comedy and Horror attract both low and
                  high extraversion outliers, reflecting their broad emotional
                  appeal. These insights emphasize the variability in how
                  personality traits influence genre preferences, reinforcing
                  the diverse therapeutic potential of movies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
