import "./App.css";
import React from "react";
import { Box } from "@mui/material";
import { AITextGeneratorContainer } from "containers/AITextGenerator/AITextGeneratorContainer";

function App() {
  return (
    <Box display="flex" height="100vh" width="100vw" className="rootBox">
      <AITextGeneratorContainer />
    </Box>
  );
}

export default App;
