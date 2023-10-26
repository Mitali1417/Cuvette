import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import QuickStatistics from "./components/QuickStatistics/QuickStatistics";
import ComparisonGraph from "./components/ComparisonGraph/ComparisonGraph.jsx";
import QuestionAnalysis from "./components/QuestionAnalysis/QuestionAnalysis";
import SyllabusAnalysis from "./components/SyllabusAnalysis/SyllabusAnalysis";

function App() {
    const [rank, setRank] = useState(''); // Initial rank value
    const [percentile, setPercentile] = useState(37); // Initial percentile value
    const [currentScore, setCurrentScore] = useState('');


 const handleUpdate = (updatedStats) => {
    setRank(updatedStats.rank);
    setPercentile(updatedStats.percentile);
    setCurrentScore(updatedStats.currentScore);
  };

  return (
    <div>
      <Header />
      <Sidebar />
      <SyllabusAnalysis />
      <QuickStatistics onUpdate={handleUpdate} />
      <ComparisonGraph percentile={percentile} />
      <p>Rank: {rank}</p>
      <p>Current Score: {currentScore} / 15</p>
      <QuestionAnalysis />
    </div>
  );
}

export default App;
