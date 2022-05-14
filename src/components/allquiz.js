import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

function Quizes() {
    const [quizzes, setQuizzes] = useState([]);
    const [userId, setUserId] = useState("");

    const fetchQuizzes = async () => {
        const { data } = await axios.get('https://pure-caverns-82881.herokuapp.com/api/v54/quizzes',
        {headers:{
                    "X-Access-Token": "4a975d7232f12d57e1a89a9ee49e3a5c7c6161a6ed31a65e0e2a6867ab8befb6",
                }
        });
        const quizzes = data;
        setQuizzes(quizzes);
        console.log(quizzes);
    };

    useEffect(() => {
        setUserId(localStorage.getItem("user-info"))
        fetchQuizzes();
    }, []);


   
    return (
        <div className="mainQuizes">
                <div className="main-name"><h1 className="title1"></h1></div> <div className="quizes-here">
                    {quizzes.map(quiz => (
                        <Link to={`/quizzes/${quiz.id}`}>
                        <div className='quiz' key={quiz.id} ><h2 className="title1">Quiz </h2>
                        <p className="title"> {quiz.title}</p><p className="title"> Questions:№{quiz.questions_count}</p></div>
                         </Link>
                          ))}
                </div></div>
        ) 
}
export default Quizes;
