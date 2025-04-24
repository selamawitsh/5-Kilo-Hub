import React, { useState } from 'react';
import { FaStickyNote } from 'react-icons/fa';
import './DepartmentDetail.css';


const DepartmentDetail = ({ title, semesterData }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const toggleSemester = (index) => {
      setActiveIndex(index === activeIndex ? null : index);
    };
  
    return (
      <div className="detail-container">
        <h2 className="title">{title} - Semester Breakdown</h2>
        {semesterData.map((semester, index) => (
          <div key={index} className="semester-block">
            <div className="semester-title" onClick={() => toggleSemester(index)}>
              {semester.title}
            </div>
            {activeIndex === index && (
              <ul className="subject-list">
                {semester.subjects.map((subject, idx) => (
                  <li className="subject-item" key={idx}>
                    <img src="/images/book-icon.png" alt="book" className="subject-icon" />
                    <span className="subject-text">{subject}</span>
                    <FaStickyNote className="notes-icon" title="My Notes" />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default DepartmentDetail;
  
