import Header from "../components/Header/Header";
import Courses from "../components/Courses/Courses";
// import Categories from "../components/Categories/Categories";

const HomePage = () => {
  return (
    <div className="holder">
      <Header />
      <Courses />
      {/* <Categories /> */}
    </div>
  );
};

export default HomePage;
