import React from "react"


export const themes = {
    dark: {
        color: "white",
        background: "black",
        padding: "5px",
        width: "200px",
        textAlign: "center",
    },
    light: {
        color: "black",
        background: "white",
        padding: "5px",
        width: "200px",
        textAlign: "center",


    }

}

const ThemeContext = React.createContext(themes.dark)

export default ThemeContext;