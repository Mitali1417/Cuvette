import React, { useState } from "react";
import "./UpdateModal.css";

const UpdateModal = ({ onClose, onUpdate, toggleModal }) => {
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [currentScore, setCurrentScore] = useState("");

  const handleSave = () => {
    onUpdate({ rank, percentile, currentScore });
    onClose();
  };

  return (
    <div className="update-modal-overlay">
      <div className="update-modal">
        <div className="update-header">
          <div className="update-header-text">Update Scores</div>
          <div>
            <img src="" alt="html" />
          </div>
        </div>
        <div className="list-container">
          <div className="list-heading">
            <div className="list">1</div>
            <label className="text-label">Update your rank </label>
          </div>
          <divd className="list-input-container">
            <input
              type="number"
              value={rank}
              onChange={(e) => setRank(e.target.value)}
            />
          </divd>
        </div>
        <div className="list-container">
          <div className="list-heading">
            <div className="list">2</div>
            <label className="text-label">Update your percentile </label>
          </div>
          <divd className="list-input-container">
            <input
              type="number"
              value={percentile}
              onChange={(e) => setPercentile(e.target.value)}
            />
          </divd>
        </div>
        <div className="list-container">
          <div className="list-heading">
            <div className="list">3</div>
            <label className="text-label">
              Update your current score (out of 15){" "}
            </label>
          </div>
          <divd className="list-input-container">
            <input
              type="number"
              value={currentScore}
              onChange={(e) => setCurrentScore(e.target.value)}
            />
          </divd>
        </div>
        <div className="update-btns">
          <button className="close-btn" onClick={toggleModal}>
            Close
          </button>
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
