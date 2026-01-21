"use client";

import theme from "@/styles/theme";
import { ThemeProvider, CssBaseline } from "@mui/material";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
