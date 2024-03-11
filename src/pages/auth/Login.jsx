import { useState, useContext } from "react";
import { ThemeContext } from "../../context/theme.context";
import axios from "axios";
import { AuthContext } from "../../context/auth.context";

import { useNavigate } from "react-router-dom";

function Login() {

  const { authenticateUser } = useContext(AuthContext)

  const navigate = useNavigate()

  const { darkTheme } = useContext(ThemeContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault();

    const credentials = {
      email,
      password
    }

    // ... contactar al backend para validar credenciales de usuario aqui
    try {

      // 1. validar credenciales del usuario
      const response = await axios.post("http://localhost:5005/api/auth/login", credentials)
      console.log(response)

      // 2. almacenamos el token de forma segura en localStorage
      localStorage.setItem("authToken", response.data.authToken)

      // 3. validar el Token y actualizar los estados de auth del usuario
      await authenticateUser()

      // 4 redireccionar a pagina privada
      navigate("/private-page-example")

      
    } catch (error) {
      console.log(error)
      // aqui podemos gestionar los mismos errores que en Signup (contraseña correcta, usuario existe, etc)
    }
  };

  return (
    <div>

      <h1>Formulario de Acceso</h1>

      <form onSubmit={handleLogin}>
        <label>Correo Electronico:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <br />

        <label>Contraseña:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <br />

        <button className={darkTheme === true ? "dark-btn" : "light-btn"}type="submit">Acceder</button>
      </form>
      
    </div>
  );
}

export default Login;
