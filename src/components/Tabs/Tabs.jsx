import { useState } from "react";
import {
  BUSINESS,
  CREATIVITY,
  LANGUAGE,
  LAW,
  PSYCHOLOGY,
  ART,
  SCIENCE,
  TECHNOLOGY,
  MATHEMATICS,
  ALL,
} from "../../utils/constants";
import { courses } from "../../utils/data";
import "./tabs.css";
import Course from "../Courses/Course/Course";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(ALL);

  const tabHandler = (category) => {
    setActiveTab(category);
  };

  return (
    <div className="tabs">
      <div className="tabs-header">
        <ul className="tabs-list">
          <li className={`tabs-item ${activeTab === ALL ? "active" : ""}`}>
            <button type="button" onClick={() => tabHandler(ALL)}>
              All
            </button>
          </li>
          <li className={`tabs-item ${activeTab === BUSINESS ? "active" : ""}`}>
            <button type="button" onClick={() => tabHandler(BUSINESS)}>
              Business
            </button>
          </li>
          <li
            className={`tabs-item ${activeTab === CREATIVITY ? "active" : ""}`}
          >
            <button type="button" onClick={() => tabHandler(CREATIVITY)}>
              Creativity
            </button>
          </li>
          <li className={`tabs-item ${activeTab === LANGUAGE ? "active" : ""}`}>
            <button type="button" onClick={() => tabHandler(LANGUAGE)}>
              Language
            </button>
          </li>
          <li className={`tabs-item ${activeTab === LAW ? "active" : ""}`}>
            <button type="button" onClick={() => tabHandler(LAW)}>
              Law
            </button>
          </li>
          <li
            className={`tabs-item ${activeTab === PSYCHOLOGY ? "active" : ""}`}
          >
            <button type="button" onClick={() => tabHandler(PSYCHOLOGY)}>
              Psychology
            </button>
          </li>
          <li className={`tabs-item ${activeTab === ART ? "active" : ""}`}>
            <button type="button" onClick={() => tabHandler(ART)}>
              Art
            </button>
          </li>
          <li className={`tabs-item ${activeTab === SCIENCE ? "active" : ""}`}>
            <button type="button" onClick={() => tabHandler(SCIENCE)}>
              Science
            </button>
          </li>
          <li className={`tabs-item ${activeTab === TECHNOLOGY ? "active" : ""}`}>
            <button type="button" onClick={() => tabHandler(TECHNOLOGY)}>
              Technology
            </button>
          </li>
          <li className={`tabs-item ${activeTab === MATHEMATICS ? "active" : ""}`}>
            <button type="button" onClick={() => tabHandler(MATHEMATICS)}>
              Mathematics
            </button>
          </li>
        </ul>
      </div>

      <div className="tabs-body">
        {courses
          .filter(
            (course) => activeTab === ALL || course.category === activeTab
          )
          .map((course) => (
            <Course key={course.id} {...course} />
          ))}
      </div>
    </div>
  );
};

export default Tabs;
