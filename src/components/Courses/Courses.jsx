import "./courses.css";
import { useCoursesContext } from '../../context/courses_context';
import Tabs from "../Tabs/Tabs";

const Courses = () => {
  const { courses } = useCoursesContext();

  return (
    <div className="courses-list-wrapper">
      <div className="containerr">
        <div className="courses-list-top">
          <h2>A broad selection of courses</h2>
          <p>Choose from 204,000 online video courses with new additions published every month</p>
        </div>

        <Tabs courses={courses} />
      </div>
    </div>
  );
};

export default Courses;
