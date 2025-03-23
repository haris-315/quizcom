import React from "react";
import QuizItem from "../types/quiz";
import "../styles/timer.css"
type QuizSectionProps = {
    currentQuestion: QuizItem;
    currentQuestionIndex: number;
    selectedOptions: { [key: number]: string };
    isStrictMode: boolean;
    onOptionSelect: (option: string) => void;
    onSkip: () => void;
    onConfirmAnswer: () => void;
    solvingSkipped: boolean;
    timeLeft: number;
    totalTimeElapsed: number;
};

const QuizSection: React.FC<QuizSectionProps> = ({
    currentQuestion,
    currentQuestionIndex,
    selectedOptions,
    isStrictMode,
    onOptionSelect,
    onSkip,
    onConfirmAnswer,
    solvingSkipped,
    timeLeft,
    totalTimeElapsed,
}) => {
    return (
        <div className="quiz-section">
            <div className="quiz-container">
                <div className="digital-clock">
                    <div className="time-left">
                        <span>Time Left:</span>
                        <span className="timer">{timeLeft}</span>
                        <span>seconds</span>
                    </div>
                    <div className="total-time">
                        <span>Total Time:</span>
                        <span className="timer">{totalTimeElapsed}</span>
                        <span>seconds</span>
                    </div>
                </div>
                <h2>{solvingSkipped ? "Skipped" : ""} Question {currentQuestionIndex + 1}</h2>
                <h2>{currentQuestion.question}</h2>
                <div className="options">
                    {currentQuestion.options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => onOptionSelect(option)}
                            className={selectedOptions[currentQuestionIndex] === option ? "selected" : "bp"}
                        >
                            {option}
                        </button>
                    ))}
                </div>
                <div className="action-buttons">
                    {!solvingSkipped && (<button className="skip quiz-action" onClick={onSkip}>
                        Skip
                    </button>)}
                    {!isStrictMode && (
                        <button className="confirm quiz-action" onClick={onConfirmAnswer}>
                            Save and Next
                        </button>
                    )}
                </div>

            </div>
        </div>
    );
};

export default QuizSection;