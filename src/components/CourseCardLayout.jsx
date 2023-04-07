import React from "react";

const CourseCardLayout = ({ children }) => {
  return (
    <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

export default CourseCardLayout;
