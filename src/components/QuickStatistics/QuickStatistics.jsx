import React, { useState } from "react";
import html from "../../assests/QuickStats/html.svg";
import "./QuickStatistics.css";
import UpdateModal from "../UpdateModal/UpdateModal";

const QuickStatistics = ({ onUpdate }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleUpdate = (updatedStats) => {
    setShowModal(false);
    onUpdate(updatedStats);
  };

  return (
    <>
      <div className="quick-stats">
        <h5 className="quick-stats-heading">Skill Test</h5>
        <div className="quick-stats-html">
          {/* HTML */}
          <div className="quick-stats-html-header">
            <div className="quick-stats-img-container">
              <img src={html} alt="HTML" />
            </div>
            <div className="quick-stats-text-container">
              <div className="quick-stats-text-heading">
                Hypertext Markup Language
              </div>
              <div className="quick-stats-text-para">
                Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
              </div>
            </div>
          </div>
          <div className="quick-stats-btn" onClick={toggleModal}>
            <h5>Update</h5>
          </div>
        </div>
      </div>

      {showModal && <UpdateModal toggleModal={toggleModal} />}
    
    </>
  );
};

export default QuickStatistics;
