import "./searchBar.css";
import { useLocation } from "react-router-dom";
import { courses } from "../../utils/data";
import Course from "../Courses/Course/Course";


const SearchBar = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const query = queryParams.get("query") || "";

  // Filter courses based on the search query
  const results = courses.filter((course) =>
    course.category.toLowerCase().includes(query.toLowerCase()) ||
    course.course_name.toLowerCase().includes(query.toLowerCase()) ||
    course.creator.toLowerCase().includes(query.toLowerCase()) ||
    course.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Search Results for "{query}"</h1>
      {results.length > 0 ? (
        <div className="course-list">
          {results.map((course) => (
            <Course
              key={course.id}
              id={course.id}
              image={course.image}
              course_name={course.course_name}
              creator={course.creator}
              actual_price={course.actual_price}
              discounted_price={course.discounted_price}
              rating_count={course.rating_count}
              rating_star={course.rating_star}
              category={course.category}
            />
          ))}
        </div>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchBar;

