import React, { useState } from 'react';
import CourseCard from './CourseCard';
import './Courses.css'; 

import javaImage from '../assets/java.png';
import mernImage from '../assets/mern.png';
import dataScienceImage from '../assets/datascience.png';

const AllCourses = () => {
 
  const courses = [
    {
      title: "Java Full Stack Development Course",
      languages: ['ENGLISH', 'TAMIL'],
      imageSrc: javaImage,
    },
    {
      title: "MERN Full Stack Development Course",
      languages: ['ENGLISH', 'TAMIL', 'HINDI'],
      imageSrc: mernImage,
    },
    {
      title: "Data Science Course",
      languages: ['ENGLISH', 'TAMIL'],
      imageSrc: dataScienceImage,
    },
    {
      title: "Cyber Security Essentials",
      languages: ['ENGLISH'],
      imageSrc: javaImage,
    },
    {
      title: "Career Preparation Guide",
      languages: ['ENGLISH', 'HINDI'],
      imageSrc: mernImage,
    },
    {
      title: "AI for Beginners",
      languages: ['ENGLISH'],
      imageSrc: dataScienceImage,
    }
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;

 
  const currentCourses = courses.slice(startIndex, startIndex + itemsPerPage);

  const handleNext = () => {
   
    setStartIndex((prevIndex) =>
      (prevIndex + itemsPerPage) % courses.length
    );
  };

  return (
    <div>
      <h2>Browse GUVI Courses</h2>
      <div className="courses-container">
        {currentCourses.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            languages={course.languages}
            imageSrc={course.imageSrc}
          />
        ))}
      </div>
      <button onClick={handleNext} className="next-button">Next</button>
    </div>
  );
};

export default AllCourses;
