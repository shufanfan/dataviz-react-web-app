function App() {
  return (
    <div className="container">
      <h1>
        Exploring Movies🎞️ as a Self-Healing Tool:
        <span
          style={{ display: "block", fontStyle: "italic", fontSize: "0.7em" }}
        >
          A Data-Driven Perspective
        </span>
      </h1>
      <div
        id="intro"
        style={{
          marginTop: "20px",
        }}
      >
        <div style={{ fontStyle: "italic" }}>
          This is a data visualization project made by{" "}
          <a
            href="https://observablehq.com/user/@shufan-chai"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            Shufan Chai🎀
          </a>{" "}
          from Northeastern University for the course CS7295: Information
          Visualization Fall 2024 under the guidance of Professor{" "}
          <a
            href="https://johnguerra.co/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            John Alexis Guerra Gómez
          </a>{" "}
          .
        </div>
        <h2
          style={{
            marginTop: "50px",
          }}
        >
          Introduction
        </h2>
        <p>
          The backdrop of this analysis focuses on the potential of movies to
          serve as a self-healing tool, particularly for individuals with mental
          health challenges. With mental health issues becoming increasingly
          prevalent, understanding the intersection between personality traits,
          movie preferences, and audience engagement offers a unique opportunity
          to explore personalized and therapeutic avenues.
        </p>
      </div>
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
                  While less frequent, niche genres like Western maintain
                  cultural and artistic significance, showcasing their lasting
                  impact despite limited appeal.
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
      <div style={{ marginTop: "40px" }}>
        <h3>
          Synthesis: Bridging Personality, Movie Preferences, and Mental Health
        </h3>
        <div>
          <p>By combining all insights from above, we can conclude:</p>
          <ul>
            <li>
              <b>Personalized Engagement:</b> Personality dimensions influence
              movie preferences, with certain genres aligning more closely with
              specific traits. This opens the door for tailored movie
              recommendations as a potential self-healing tool.
            </li>
            <li>
              <b>Broad Appeal and Therapeutic Potential:</b> Frequently watched
              genres and multi-genre films appeal to a diverse audience,
              including individuals with varying mental health conditions. This
              universality underscores the therapeutic potential of movies.
            </li>
            <li>
              <b>Niche Opportunities:</b> Niche genres, though less common, hold
              emotional and cultural significance, offering targeted
              opportunities for engagement.
            </li>
          </ul>
          <p>
            The analysis bridges individual personality traits with broader
            audience preferences, offering a nuanced understanding of how movies
            can cater to mental health needs. Whether through targeted
            recommendations based on personality or the universal appeal of
            popular genres, movies hold promise as a simple yet impactful tool
            for enhancing well-being. Future research could explore integrating
            this framework into platforms like IMDB or Netflix to offer
            personalized, therapeutic recommendations.
          </p>
        </div>
      </div>
      <footer
        style={{ marginTop: "80px", fontStyle: "italic", textAlign: "center" }}
      >
        <p>
          <b>
            ✨Your suggestions are valuable. Please send them to{" "}
            <a
              href="https://www.linkedin.com/in/shufanfan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              me
            </a>
            ✨
          </b>
        </p>
      </footer>
    </div>
  );
}

export default App;
