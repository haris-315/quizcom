import React, { useState, useEffect } from "react";
import shuffleArray from "../utils/shuffle";
import QuizItem from "../types/quiz";
import QuizStart from "./QuizStart";
import QuizSection from "./QuizSection";
import ConfirmationDialog from "./ConfirmationDialog";
import "../styles/dialog.css";
import Result from "./result";


type QuizAppProps = {
  quizList: QuizItem[];
};

const QuizApp: React.FC<QuizAppProps> = ({ quizList }) => {
  const [numQuestions, setNumQuestions] = useState<number>(10);
  const [isStrictMode, setIsStrictMode] = useState<boolean>(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOptions, setSelectedOptions] = useState<{ [key: number]: string }>({});
  const [isQuizStarted, setIsQuizStarted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [shuffleState, setShuffleState] = useState<string>("initial");
  const [skippedQuestions, setSkippedQuestions] = useState<QuizItem[]>([]);
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [wrongAnswers, setWrongAnswer] = useState<Array<QuizItem>>([]);
  const [currentQuizList, setCurrentQuizList] = useState<Array<QuizItem>>(quizList);
  const [isSolvingSkipped, setIsSolvingSkipped] = useState<boolean>(false);
  const [timePerQuestion, setTimePerQuestion] = useState<number>(20);
  const [timeLeft, setTimeLeft] = useState<number>(timePerQuestion);
  const [totalTimeElapsed, setTotalTimeElapsed] = useState<number>(0);
  const [timerActive, setTimerActive] = useState<boolean>(false);


  useEffect(() => {
    let timer: number;
    if (timerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        setTotalTimeElapsed((prev) => prev + 1);
      }, 1000);
    } else if (timeLeft === 0) {
      confirmAnswer("wrong/2..23122");
    }
    return () => clearInterval(timer);
  }, [timerActive, timeLeft]);


  useEffect(() => {
    if (isQuizStarted && !isFinished) {
      setTimeLeft(timePerQuestion);
      setTimerActive(true);
    }
  }, [currentQuestionIndex, isQuizStarted, isFinished, timePerQuestion]);

  const handleStartQuiz = () => {
    if (numQuestions < 10 || numQuestions > currentQuizList.length) {
      alert(`Please select a number of questions between 10 and ${currentQuizList.length}.`);
      return;
    }
    setIsQuizStarted(true);
    setTimerActive(true);
    setTotalTimeElapsed(0);
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOptions((prev) => ({ ...prev, [currentQuestionIndex]: option }));
    if (isStrictMode) {
      confirmAnswer(option);
    }
  };

  const confirmAnswer = (option: string) => {
    if (option === currentQuizList[currentQuestionIndex].answer) {
      setScore((prev) => prev + 1);
    } else {
      setWrongAnswer((prev) => [...prev, currentQuizList[currentQuestionIndex]]);
    }
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < numQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setIsFinished(true);
      setTimerActive(false);


      if (skippedQuestions.length === 0) {
        setIsFinished(true);
      }
    }
  };

  const handleSkip = () => {
    setSkippedQuestions((prev) => [...prev, currentQuizList[currentQuestionIndex]]);
    handleNextQuestion();
  };

  const handleShuffle = (list: Array<QuizItem>) => {
    const shuffledList = shuffleArray([...list]);
    setCurrentQuizList(shuffledList);
    setShuffleState("shuffling");
    setTimeout(() => {
      setShuffleState("justShuffled");
      setTimeout(() => setShuffleState("initial"), 2000);
    }, 2000);
  };

  const handleSolveSkipped = () => {
    setIsSolvingSkipped(true);
    setCurrentQuizList(skippedQuestions);
    setNumQuestions(skippedQuestions.length);
    setCurrentQuestionIndex(0);
    setSelectedOptions({});
    setSkippedQuestions([]);
    setIsFinished(false);
    setTimerActive(true);
  };

  if (!isQuizStarted) {
    return (
      <QuizStart
        numQuestions={numQuestions}
        quizListLength={currentQuizList.length}
        isStrictMode={isStrictMode}
        shuffleState={shuffleState}
        setList={setCurrentQuizList}
        questionList={currentQuizList}
        onNumQuestionsChange={setNumQuestions}
        onStrictModeChange={setIsStrictMode}
        onStartQuiz={handleStartQuiz}
        onShuffle={handleShuffle}
        timePerQuestion={timePerQuestion}
        onTimePerQuestionChange={setTimePerQuestion}
      />
    );
  }

  if (isFinished) {

    if (skippedQuestions.length === 0) {
      return (
        <Result
          name={localStorage.getItem("userName") || "User"}
          location={localStorage.getItem("location") || "Earth"}
          correctAnswers={score}
          skippedQuestions={skippedQuestions.length}
          wrongAnswers={wrongAnswers.length}
          totalElapsedTime={totalTimeElapsed}
        />
      );
    }


    return (
      <ConfirmationDialog
        skippedCount={skippedQuestions.length}
        onSolveSkipped={handleSolveSkipped}
      />
    );
  }

  return (
    <QuizSection
      currentQuestion={currentQuizList[currentQuestionIndex]}
      currentQuestionIndex={currentQuestionIndex}
      selectedOptions={selectedOptions}
      isStrictMode={isStrictMode}
      onOptionSelect={handleOptionSelect}
      onSkip={handleSkip}
      onConfirmAnswer={() => confirmAnswer(selectedOptions[currentQuestionIndex])}
      solvingSkipped={isSolvingSkipped}
      timeLeft={timeLeft}
      totalTimeElapsed={totalTimeElapsed}
    />
  );
};

export default QuizApp;