import React, { useContext } from "react";
import ThemeContext from "./theme-context";

const Layout = () =>{

const theme = useContext(ThemeContext)
return (
    <div style={theme} >
<p>This is your content</p>
</div>
)
}

export default Layout;