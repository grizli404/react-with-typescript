import { useTheme } from "./ThemeContext";

export function FunctionContextComponent() {
  const { setContext, currentContext } = useTheme();
  const themeStyles = {
    backgroundColor: currentContext ? "#333" : "#CCC",
    color: currentContext ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return <div style={themeStyles}>Function Theme</div>;
}
