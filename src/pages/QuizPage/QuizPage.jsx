import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./QuizPage.scss";

const qs = {
	locations: "Which region do you call home or feel most connected to?",
	target_demographics: "Which demographic do you feel most passionate about supporting?",
	project_focuses: "Which of these project goals do you find most inspiring?"
}

function QuizPage() {
	const [questions, setQuestions] = useState([]),
		[choices, setChoices] = useState([]),
		[index, setIndex] = useState(0),
		[done, setDone] = useState(false);
	const subheadingRef = useRef(null),
		submitRef = useRef(null);

	useEffect(() => {
		setQuestions(() => []);
		(async () => {
			let newQs = [];
			const response = await axios.get(`${import.meta.env.VITE_API_URL}/categories`);
			console.log(response);
			const data = response.data;

			for (const [k, q] of Object.entries(qs)) {
				newQs.push({
					question: q,
					answers: data[k]
				});
			}
			setQuestions(() => newQs);
		})();
	}, []);

	// record chosen answer - and if this was the final question, focus on submit button
	function handleAnswer(answer){
		if (index >= choices.length) {
			setChoices([...choices, answer]);
		} else {
			const newChoices = choices.toSpliced(index, 1, answer);
			setChoices(newChoices);
		}

		if (index + 1 === questions.length) {
			submitRef.current?.focus();
		}
	}

	function handleBack() {
		setIndex(Math.max(0, index - 1));
		subheadingRef.current?.focus();
	}

	function handleNext() {
		setIndex(Math.max(0, Math.min(questions.length - 1, choices.length, index + 1)));
		subheadingRef.current?.focus();
	}

	function handleSubmit() {
		setDone(true);
	}

	return (
	<section className="quiz" aria-busy={!questions.length}>
		<h1 className="quiz__title">{questions.length ? "Find Your Ideal Initiative" : "Loading..."}</h1>
		{!questions.length ? "" : (<>
			<progress
				className="quiz__progress"
				min={1}
				max={questions.length}
				value={choices.length}
				aria-label="Quiz completion"
			></progress>

			<h2 className="quiz__subheading" tabIndex={-1} ref={subheadingRef}>
				{done && <>Your Choices:</>}
				{!done && <>{index + 1}. {questions[index]?.question}</>}
			</h2>

			{done && (<>
				<ol>
					{choices.map((a, i) => <li key={i}>{a}</li>)}
				</ol>
				<button
					onClick={()=>{
						setDone(false);
						setChoices([]);
						setIndex(0);
					}}
				>Go Again!</button>
			</>)}
			{!done && (<>
				{questions[index]?.answers.map((a, i) => (
					<label key={i} className="quiz__answer-label">
						<input
							type="radio"
							className="quiz__answer-btn"
							name="quiz-choice"
							onChange={()=>handleAnswer(a)}
							checked={a === choices?.[index]}/>
						{a}
					</label>
				))}
				<button
					className="quiz__nav-btn"
					onClick={handleBack}
					disabled={index === 0}
				>Back</button>
				<button
					className="quiz__nav-btn"
					onClick={handleNext}
					disabled={index === choices.length || index === questions.length - 1}
				>Next</button>
				<button
					className="quiz__submit-btn"
					ref={submitRef}
					onClick={handleSubmit}
					disabled={choices.length !== questions.length}
				>Submit</button>
			</>)}

		</>)}
	</section>
	);
}

export default QuizPage;
