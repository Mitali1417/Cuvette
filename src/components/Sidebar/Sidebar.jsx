import React, { useState, useEffect } from "react";
import { SidebarItems } from "../../constants";
import "./Sidebar.css";

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    setActiveItem("Skill");
  }, []);

  return (
    <div className="sidebar">
      {SidebarItems.map((items) => (
        <div
          className={`sidebar-container ${
            activeItem === items.title ? "active" : ""
          }`}
          onClick={() => setActiveItem(items.title)}
        >
          <div className="sidebar-item-img">
            <img src={items.img} alt="" />
          </div>
          <div
            className={`sidebar-item-title ${
              activeItem === items.title ? "active" : ""
            }`}
          >
            <h5>{items.title}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
