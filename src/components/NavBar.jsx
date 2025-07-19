import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contextTheme";

const NavBar = () => {

    const { theme, toggleTheme } = useTheme();
    // console.log(theme, toggleTheme);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    return (
        <header className="headerWrap">
            <nav className="headerNav">
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
            <div>
                <input type="checkbox" id="toggle_checkbox" onClick={toggleTheme} />
                <label for="toggle_checkbox">
                    <div id="star">
                        <div class="star" id="star-1">★</div>
                        <div class="star" id="star-2">★</div>
                    </div>
                    <div id="moon"></div>
                </label>
            </div>
        </header>

    )
}
export default NavBar;