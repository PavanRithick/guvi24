import React from 'react';
import CourseCard from './CourseCard';

const CareerCourses = () => {
  return (
    <div className="course-grid">
      <CourseCard title="Career Preparation Guide" languages={['ENGLISH', 'HINDI']} />
    </div>
  );
};

export default CareerCourses;
