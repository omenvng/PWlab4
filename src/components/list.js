import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "../App.css"

function ShowQuestions(props) {
  const [currIndex, setCurrentIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [selectedAnswer, setSelectedAnswer] = useState();
  const [result, setResult] = useState(0);
  const [final, setIsOver] = useState(false);
  const { quizId } = useParams();

  useEffect(() => {
    console.log(props.questions);
  }, []);

  const handleAnswers = (event) => {
    setAnswer(event.target.value);
    const test = event.target.value;
    setSelectedAnswer(test);
  };

  const handleClick = () => console.log(selectedAnswer);

  const nextQuestion = () => {
    const userIdNoRepeat = parseInt(localStorage.getItem("user-info"));
    const questionIdNoRepeat = props.questions[currIndex].id;

    console.log(userIdNoRepeat);
    console.log(questionIdNoRepeat);
    console.log(selectedAnswer);

    const postData = {
      data: {
        question_id: questionIdNoRepeat,
        answer: selectedAnswer,
        user_id: userIdNoRepeat,
      },
    };

    axios
      .post(
        `https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/${quizId}/submit`,
        postData,
        {
          headers: {
            "X-Access-Token":
            "4a975d7232f12d57e1a89a9ee49e3a5c7c6161a6ed31a65e0e2a6867ab8befb6",
          },
        }
      )
      .then(function (res) {
        if (res.data.correct) setResult((prevState) => prevState + 1);
      })
      .catch(function (error) {
        console.log(error);
      });

    
    if (currIndex === props?.questions.length - 1) {
      setIsOver(true);
      console.log(result);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div>
      {final ? (
        <><div className="main"><div className="card-body"><h3 className="card-title">Final result</h3><h2 className="card-subtitle">
                {result} out of {props?.questions.length}{" "}</h2>
              <Link to={`/main`}><button className="start-quiz">Return</button></Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="main"><div className="pass-quiz-card"> <h2 className="res">{result} / {props?.questions.length}{" "}</h2>
              {props?.questions[currIndex]?.question}
              <div className="answers ">
                {props?.questions[currIndex]?.answers.map(
                  (answer, index) => (
                    <div className="question-answers" key={index}>
                      <input
                        type="radio"
                        name={props.questions[currIndex].question}
                        value={answer}
                        onClick={(event) => handleAnswers(event)}
                      />
                      <label htmlFor={answer}>{answer}</label>
                      
                    </div>
                  )
                )}
                <button className="start-quiz" onClick={() => nextQuestion()}>  Next </button></div></div>
          </div>
        </>
      )}
    </div>
  );
}

export default ShowQuestions;
