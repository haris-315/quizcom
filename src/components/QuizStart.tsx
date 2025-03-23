import React from "react";
import QuizItem from "../types/quiz";
import Footer from "./footer";

type QuizStartProps = {
    numQuestions: number;
    quizListLength: number;
    isStrictMode: boolean;
    shuffleState: string;
    setList: (list: QuizItem[]) => void;
    questionList: QuizItem[];
    onNumQuestionsChange: (value: number) => void;
    onStrictModeChange: (checked: boolean) => void;
    onStartQuiz: () => void;
    onShuffle: (list: QuizItem[]) => void;
    timePerQuestion: number;
    onTimePerQuestionChange: (time: number) => void;
};

const QuizStart: React.FC<QuizStartProps> = ({
    numQuestions,
    quizListLength,
    isStrictMode,
    shuffleState,
    questionList,
    onNumQuestionsChange,
    onStrictModeChange,
    onStartQuiz,
    onShuffle,
    timePerQuestion,
    onTimePerQuestionChange,
}) => {
    return (
        <>
            <div className="quiz-start">
                <h2>Prepare your test</h2>
                <label>
                    Number of Questions (Min 10, Max {quizListLength}):
                    <input
                        type="number"
                        min="10"
                        max={quizListLength}
                        value={numQuestions}
                        onChange={(e) => { onNumQuestionsChange(Number(e.target.value)) }}
                    />
                </label>
                <label title="After selecting an option for the question you will not given second chance to select any other option and it will submit itself.">
                    Strict Mode:
                    <input
                        type="checkbox"
                        checked={isStrictMode}
                        onChange={(e) => onStrictModeChange(e.target.checked)}
                    />
                </label>
                <label >
                    Time Per Question:
                    <select
                        className="time-input"
                        value={timePerQuestion}
                        onChange={(e) => onTimePerQuestionChange(Number(e.target.value))}
                    >
                        <option value={8}>8 seconds</option>
                        <option value={14}>14 seconds</option>
                        <option value={20}>20 seconds</option>
                        <option value={25}>25 seconds</option>
                        <option value={30}>30 seconds</option>
                    </select>
                </label>
                <button className="start-btn" onClick={onStartQuiz}>
                    Start Quiz
                </button>
                <button
                    disabled={shuffleState === "shuffling" || shuffleState === "justShuffled"}
                    className="start-btn sf"
                    onClick={() => onShuffle(questionList)}
                >
                    {shuffleState === "shuffling"
                        ? "Shuffling..."
                        : shuffleState === "justShuffled"
                            ? "Just Shuffled"
                            : "Shuffle Questions"}
                </button>
            </div>
            <Footer /> </>
    );
};

export default QuizStart;