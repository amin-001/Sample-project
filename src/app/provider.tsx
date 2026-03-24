import { ThemeProvider } from "next-themes";
import AppRouter from "./routes";

export default function AppProvider(){
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <AppRouter/>
        </ThemeProvider>
    )
}