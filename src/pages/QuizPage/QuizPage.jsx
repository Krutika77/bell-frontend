import { useEffect, useRef, useState } from "react";
import axios from "axios";
import Card from "../../components/Card/Card.jsx";
import "./QuizPage.scss";

const qs = {
  locations: "Which region do you call home or feel most connected to?",
  target_demographics:
    "Which demographic do you feel most passionate about supporting?",
  project_focuses: "Which of these project goals do you find most inspiring?",
};

function QuizPage() {
  const [questions, setQuestions] = useState([]);
  const [choices, setChoices] = useState([]);
  const [index, setIndex] = useState(0);
  const [done, setDone] = useState(false);
  const [initiatives, setInitiatives] = useState([]);
  const [organizations, setOrganizations] = useState([]);
  const subheadingRef = useRef(null);
  const submitRef = useRef(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:8080/categories");
        const data = response.data;

        const newQs = Object.entries(qs).map(([key, question]) => {
          let answers = [];
          if (key === "locations") {
            answers = [...new Set(data[key])];
          } else {
            answers = [
              ...new Set(data[key].flatMap((item) => JSON.parse(item))),
            ];
          }
          return {
            question: question,
            answers: answers.filter((a) => a && a.trim() !== ""),
          };
        });

        setQuestions(newQs);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    const fetchOrganizations = async () => {
      try {
        const response = await axios.get("http://localhost:8080/organizations");
        setOrganizations(response.data);
      } catch (error) {
        console.error("Error fetching organizations:", error);
      }
    };

    fetchQuestions();
    fetchOrganizations();
  }, []);

  function handleAnswer(answer) {
    if (index >= choices.length) {
      setChoices([...choices, answer]);
    } else {
      const newChoices = choices.slice();
      newChoices[index] = answer;
      setChoices(newChoices);
    }
  }

  function handleBack() {
    setIndex(Math.max(0, index - 1));
    subheadingRef.current?.focus();
  }

  function handleNext() {
    setIndex(Math.min(questions.length - 1, index + 1));
    subheadingRef.current?.focus();
  }

  function filterOrganizations() {
    if (choices.length === questions.length) {
      const filteredInitiatives = organizations.filter((org) => {
        const matchesLocation = org.location === choices[0];
        const matchesFocus = JSON.parse(org.project_focus).includes(choices[2]);
        const matchesDemographics = JSON.parse(
          org.target_demographics
        ).includes(choices[1]);
        return matchesLocation && matchesFocus && matchesDemographics;
      });
      setInitiatives(filteredInitiatives);
    }
  }

  async function handleSubmit() {
    setDone(true);
    filterOrganizations();
  }

  return (
    <section className="quiz" aria-busy={!questions.length}>
      <h1 className="quiz__title">
        {questions.length ? "Find Your Ideal Initiative" : "Loading..."}
      </h1>
      {!questions.length ? (
        ""
      ) : (
        <>
          <progress
            className="quiz__progress"
            min={1}
            max={questions.length}
            value={choices.length}
            aria-label="Quiz completion"
          ></progress>

          <h2 className="quiz__subheading" tabIndex={-1} ref={subheadingRef}>
            {done && !initiatives.length && <>Searching...</>}
            {done && initiatives.length && (
              <>We think these are perfect for you!</>
            )}
            {!done && (
              <>
                {index + 1}. {questions[index]?.question}
              </>
            )}
          </h2>

          {done && initiatives.length && (
            <>
              <div className="quiz__results">
                {initiatives.map((init) => (
                  <Card
                    key={init.id}
                    title={init.name}
                    tags={[
                      ...JSON.parse(init.project_focus),
                      ...JSON.parse(init.target_demographics),
                    ]}
                    imageUrl={init.image_url} // Replace with actual image URL if available
                    link={init.website}
                  />
                ))}
              </div>
              <button
                className="quiz__submit-btn"
                onClick={() => {
                  setDone(false);
                  setInitiatives([]);
                  setChoices([]);
                  setIndex(0);
                }}
              >
                Go Again!
              </button>
            </>
          )}
          {!done && (
            <>
              {questions[index]?.answers.map((a, i) => (
                <label key={i} className="quiz__answer-label">
                  <input
                    type="radio"
                    className="quiz__answer-btn"
                    name="quiz-choice"
                    onChange={() => handleAnswer(a)}
                    checked={a === choices?.[index]}
                  />
                  {a}
                </label>
              ))}
              <button
                className="quiz__nav-btn"
                onClick={handleBack}
                disabled={index === 0}
              >
                Back
              </button>
              <button
                className="quiz__nav-btn"
                onClick={handleNext}
                disabled={
                  index === choices.length || index === questions.length - 1
                }
              >
                Next
              </button>
              <button
                className="quiz__submit-btn"
                ref={submitRef}
                onClick={handleSubmit}
                disabled={choices.length !== questions.length}
              >
                Submit
              </button>
            </>
          )}
        </>
      )}
    </section>
  );
}

export default QuizPage;
