import { Box, useMediaQuery } from "@mui/material";
import { Composer } from "./Composer";
import { Controls } from "./Controls";
import { observer } from "mobx-react";
export const AITextGeneratorContainer: React.FC = observer(() => {
  const smallScreen = useMediaQuery("(max-width:400px)");
  return (
    <Box
      display="flex"
      flex="1"
      width="100%"
      height="100%"
      flexDirection="column"
    >
      <Box padding="18px">AI Text Generator</Box>
      <Box
        display="flex"
        flexDirection={smallScreen ? "column" : "row"}
        gap="20px"
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="start"
          flex="1"
          height="100%"
        >
          <Controls />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex="2"
          height="100%"
          borderLeft={!smallScreen ? "1px solid gray" : ""}
          borderTop={smallScreen ? "1px solid gray" : ""}
        >
          <Composer />
        </Box>
      </Box>
    </Box>
  );
});
