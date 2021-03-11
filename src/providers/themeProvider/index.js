import { ThemeProvider } from "styled-components";
import theme from "./theme";

const ThemeContextContainer = (props) => (
    <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default ThemeContextContainer;
