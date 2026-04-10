import { Provider } from "react-redux";

import { ThemeProvider } from "next-themes";
import AppRouter from "./routes";
import { store } from "./store";

export default function AppProvider() {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}
