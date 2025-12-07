import Search from "../component/Search";
import Movies from "../component/Movies";
import ThemeSwitcher from "./ThemeSwitcher";

const Home = () => {
  return (
    <>
      <Search />
      <ThemeSwitcher />    
      <Movies />
    </>
  );
};

export default Home;
