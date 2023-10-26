import React from "react";
import "./SyllabusAnalysis.css";

const SyllabusAnalysis = () => {
  return (
    <div className="syllabus-analysis">
      <div className="syllabus-item">
        <h4 className="syllabus-heading">HTML Tools, Forms, History</h4>
        <div className="syllabus-percent-bar">
          <div className="syllabus-bar-container">
            <div
              className="syllabus-bar"
              style={{ width: "80%", backgroundColor: "#438AF6" }}
            />
          </div>
          <div
            className="syllabus-percent"
            style={{
              color: "#438AF6",
            }}
          >
            80%
          </div>
        </div>
      </div>

      <div className="syllabus-item">
        <h4 className="syllabus-heading">Tags & References in HTML</h4>
        <div className="syllabus-percent-bar">
          <div className="syllabus-bar-container">
            <div
              className="syllabus-bar"
              style={{ width: "60%", backgroundColor: "#FF9142" }}
            />
          </div>
          <div
            className="syllabus-percent"
            style={{
              color: "#FF9142",
            }}
          >
            60%
          </div>
        </div>
      </div>

      <div className="syllabus-item">
        <h4 className="syllabus-heading">Tables & CSS Basics</h4>
        <div className="syllabus-percent-bar">
          <div className="syllabus-bar-container">
            <div
              className="syllabus-bar"
              style={{ width: "24%", backgroundColor: "#FB5E5E" }}
            />
          </div>
          <div
            className="syllabus-percent"
            style={{
              color: "#FB5E5E",
            }}
          >
            24%
          </div>
        </div>
      </div>

      <div className="syllabus-item">
        <h4 className="syllabus-heading">Tables & CSS Basics</h4>
        <div className="syllabus-percent-bar">
          <div className="syllabus-bar-container">
            <div
              className="syllabus-bar"
              style={{ width: "96%", backgroundColor: "#2EC971" }}
            />
          </div>
          <div
            className="syllabus-percent"
            style={{
              color: "#2EC971",
            }}
          >
            96%
          </div>
        </div>
      </div>
    </div>
  );
};

export default SyllabusAnalysis;
