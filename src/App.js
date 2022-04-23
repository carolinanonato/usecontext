import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Layout from "./layout";
import ThemeContext, { themes } from "./theme-context";
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

function App() {

  const sun = <FontAwesomeIcon icon={faSun} />
  const moon = <FontAwesomeIcon icon={faMoon} />

  const [theme, setTheme] = useState(themes.dark)


  const toggleTheme = () => theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark)


  return (
    <ThemeContext.Provider value={theme}>
      <button onClick={toggleTheme}>


        {theme === themes.dark ? sun : moon}



      </button>
      <Layout />
    </ThemeContext.Provider>
  );
}

export default App;
