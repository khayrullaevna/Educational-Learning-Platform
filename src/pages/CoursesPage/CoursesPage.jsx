import styled from "styled-components";
import { useCoursesContext } from "../../context/courses_context";
import "./coursesPage.css"; // Import the CSS stylesheet
import { useParams } from "react-router-dom";
import Course from "../../components/Course";

const CoursesPage = () => {
  const { category } = useParams();
  const { courses } = useCoursesContext();

  return (
    <CoursesPageWrapper>
      <div className="container">
        <div className="category-based-list">
          {courses
            .filter((course) => course.category === category)
            .map((course) => (
              <Course key={course.id} {...course} />
            ))}
        </div>
      </div>
    </CoursesPageWrapper>
  );
};

const CoursesPageWrapper = styled.div`
  /* Additional wrapper styles can be added here if needed */
`;

export default CoursesPage;
