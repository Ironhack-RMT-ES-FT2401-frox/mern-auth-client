import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";
import { AuthContext } from "../context/auth.context";

function Navbar() {

  const { darkTheme, toggleTheme } = useContext(ThemeContext)
  const { authenticateUser, isLoggedIn } = useContext(AuthContext)

  // NavLink permite entregar como valor de className o style una function que analiza si el URL concuerda con el link.
  const navCheck = (navInfo) => {
    // console.log(navInfo)
    // debe retornar el valor del className o style asignado
    if (navInfo.isActive === true) {
      return "link-active"
    } else {
      return "link-inactive"
    }
  }

  // const navCheck = (navInfo) => navInfo.isActive === true ? "link-active" : "link-inactive"

  const handleLogout = () => {
    localStorage.removeItem("authToken") // borra el Token
    authenticateUser() // resetear los estados de isLoggedIn y loggedUserId
  }

  return (
    <nav>
      <button onClick={toggleTheme} className={darkTheme === true ? "dark-btn" : "light-btn"}>Cambio de Tema</button>
      <NavLink className={navCheck} to="/">Home</NavLink>
      { isLoggedIn === false && <NavLink className={navCheck} to="/signup">Registro</NavLink>}
      { isLoggedIn === false && <NavLink className={navCheck} to="/login">Acceso</NavLink>}
      { isLoggedIn === true && <NavLink className={navCheck} to="/private-page-example">Privado</NavLink>}
      { isLoggedIn === true && <button className={darkTheme === true ? "dark-btn" : "light-btn"} onClick={handleLogout}>Cerrar Sesión</button>}
     
    </nav>
  );
}

export default Navbar;
