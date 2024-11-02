import React from 'react';
import './CourseCard.css'; 

const CourseCard = ({ title, languages, imageSrc }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img src={imageSrc} alt={title} />
        <span className="most-popular">MOST POPULAR</span>
      </div>
      <div className="course-info">
        <h3>{title}</h3>
        <p>Available in:</p>
        <div className="languages">
          {languages.map((lang) => (
            <span key={lang} className="language">{lang}</span>
          ))}
        </div>
        <button className="know-more">Know More ➔</button>
      </div>
    </div>
  );
};

export default CourseCard;
