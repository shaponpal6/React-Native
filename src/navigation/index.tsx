import * as React from "react";

import ThemeWrapper from "../components/ThemeWrapper";
import ThemeProvider from "../contexts/ThemeProvider";
import AppNavigation from "./AppNavigation";

const RootNavigator = () => {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <AppNavigation />
      </ThemeWrapper>
    </ThemeProvider>
  );
};

export default RootNavigator;
