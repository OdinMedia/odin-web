import { useLocalStorage } from "react-use";

import "../styles/main.css";
import Header from "./header";
const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <div className={theme}>
      <Header />
      {/* <div
        className="absolute bottom-0 left-0 mb-4 ml-4 cursor-pointer btn btn-secondary"
        onClick={toggleTheme}
      >
        {theme}
      </div> */}
      <div className="bg-background">{children}</div>
    </div>
  );
};

export default Layout;
