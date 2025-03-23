import React from "react";
import "../styles/result.css"

type ResultProps = {
    name: string;
    location: string;
    correctAnswers: number;
    skippedQuestions: number;
    wrongAnswers: number;
    totalElapsedTime: number;
};

const Result: React.FC<ResultProps> = ({
    name,
    location,
    correctAnswers,
    skippedQuestions,
    wrongAnswers,
    totalElapsedTime,
}) => {
    const totalQuestions = correctAnswers + skippedQuestions + wrongAnswers;
    const accuracy = ((correctAnswers / totalQuestions) * 100).toFixed(2);
    const averageTimePerQuestion = (totalElapsedTime / totalQuestions).toFixed(2);

    return (
        <div className="result-container">
            <h2>Quiz Result</h2>
            <div className="user-details">
                <b><p>{name}</p></b>
                <p>From</p>
                <b><p>{location}</p></b>
            </div>
            <div className="quiz-performance">
                <h3>Performance Summary</h3>
                <p>Total Questions: {totalQuestions}</p>
                <p>Correct Answers: {correctAnswers}</p>
                <p>Skipped Questions: {skippedQuestions}</p>
                <p>Wrong Answers: {wrongAnswers}</p>
                <p>Total Score: {correctAnswers}/{totalQuestions}</p>
                <p>Accuracy: {accuracy}%</p>
                <p>Total Elapsed Time: {totalElapsedTime} seconds</p>
                <p>Average Time Per Question: {averageTimePerQuestion} seconds</p>
            </div>

            <div className="dialog-buttons">
                <button className="dialog-button solve-skipped" onClick={() => {
                    window.location.reload()
                }}>
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default Result;