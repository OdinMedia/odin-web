import { useLocalStorage } from "react-use";
import Link from 'next/link'
import "../styles/main.css";
import Header from "./header";
const Layout: React.FC = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const toggleTheme = () =>
    theme === "dark" ? setTheme("light") : setTheme("dark");

  return (
    <div className={theme}>
      <Header />
      <div
        className="absolute bottom-0 left-0 btn btn-secondary ml-4 mb-4 cursor-pointer"
        onClick={toggleTheme}
      >
        {theme}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
