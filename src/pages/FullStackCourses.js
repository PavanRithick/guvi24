import React from 'react';
import CourseCard from './CourseCard';

const FullStackCourses = () => {
  return (
    <div className="course-grid">
      <CourseCard title="Java Full Stack Development Course" languages={['ENGLISH', 'TAMIL']} />
      <CourseCard title="MERN Full Stack Development Course" languages={['ENGLISH', 'TAMIL', 'HINDI']} />
    </div>
  );
};

export default FullStackCourses;
