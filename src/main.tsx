import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { useThemeMode } from "./hooks/useThemeMode";
import { GlobalStyles } from "./styles/GlobalStyles";
import { darkTheme, lightTheme } from "./styles/theme";

function LuminaApp() {
  const { mode, toggleMode } = useThemeMode();

  return (
    <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
      <GlobalStyles />
      <App themeMode={mode} onToggleTheme={toggleMode} />
    </ThemeProvider>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LuminaApp />
  </StrictMode>,
);
