import React from 'react';
import CourseCard from './CourseCard';

const DataScienceCourses = () => {
  return (
    <div className="course-grid">
      <CourseCard title="Data Science Course" languages={['ENGLISH', 'TAMIL']} />
    </div>
  );
};

export default DataScienceCourses;
