import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

interface IColorModeContext {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => {},
  mode: "light",
});

export const ColorModeContextProvider = (props: {
  children: React.ReactNode;
}) => {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: {
            main: "rgb(211, 211, 211)",
          },
        },
        typography: {
          fontFamily: [
            "Rubik",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
          // allVariants: {
          //   fontSize: "18px",
          //   fontWeight: "300",
          //   lineHeight: 1.4,
          // },
          // h1: {
          //   fontSize: "24px",
          //   fontWeight: "bold",
          //   lineHeight: 1.2,
          // },
          // h2: {
          //   fontSize: "20px",
          //   fontWeight: "bold",
          //   lineHeight: 1.3,
          // },
          // h3: {
          //   fontSize: "18px",
          //   fontWeight: "bold",
          //   lineHeight: 1.4,
          // },
          // h4: {
          //   fontSize: "16px",
          //   fontWeight: "bold",
          //   lineHeight: 1.5,
          // },
          // h5: {
          //   fontSize: "14px",
          //   fontWeight: "bold",
          //   lineHeight: 1.6,
          // },
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => React.useContext(ColorModeContext);
