import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import the Footer component
import "./styles/dialog.css";
import mcqs from "./utils/DataSource";
import LoginScreen from "./components/LoginPage";
import QuizApp from "./components/quiz";
import "./styles/App.css"
import NotFound from "./components/NotFound";

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/quiz" element={<QuizApp quizList={mcqs} />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>

      </div>
    </Router>
  );
};

export default App;