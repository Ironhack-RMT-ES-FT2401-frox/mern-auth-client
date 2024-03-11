import { createContext, useState } from "react";

// 1. Primer component => Context => permite compartir contextos a toda la app
const ThemeContext = createContext()

// 2. Segundo component => Envoltorio => tiene todos los estados, variables funciones, todos el contexto que queremos compartir
function ThemeWrapper(props) {

  const [ darkTheme, setDarkTheme ] = useState(true)

  const toggleTheme = () => setDarkTheme(!darkTheme)

  const passedContext = {
    darkTheme,
    toggleTheme
  }

  return (
    <ThemeContext.Provider value={passedContext}>
      {props.children}
    </ThemeContext.Provider>
  )

}

export {
  ThemeContext,
  ThemeWrapper
}