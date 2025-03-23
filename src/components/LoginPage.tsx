import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"

const LoginScreen: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name.trim() && location.trim()) {
      localStorage.setItem("userName", name);
      localStorage.setItem("location", location);

      
      setIsFadingOut(true);

      
      setTimeout(() => {
        navigate("/quiz-start");
      }, 500); 
    } else {
      alert("Please enter your name and roll number.");
    }
  };

  return (
    <div className={`login-screen ${isFadingOut ? "fade-out" : "fade-in"}`}>
      <h2>Welcome to QuizCom!</h2>
      <div className="login-form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </label>
        <label>
          Country:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Where Are You From?"
          />
        </label>
        
        <button onClick={
          () => {
            handleLogin()
          }}>Start Quiz</button>

      </div>
    </div>
  );
};

export default LoginScreen;