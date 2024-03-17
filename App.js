import * as React from "react";
import AppNavigator from "./src/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider, createTheme } from "@rneui/themed";

const theme = createTheme({
  components: {
    Button: {
      titleStyle: {
        color: 'blue',
      },
    },
  },
  lightColors: {
    primary: "#e7e7e8",
  },
  darkColors: {
    primary: "#000",
  },
  mode: "light",
});

export default function Main() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <AppNavigator />
        </SafeAreaProvider>
      </ThemeProvider>
    </>
  );
}
