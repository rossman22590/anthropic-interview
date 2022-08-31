import { Box, useMediaQuery } from "@mui/material";
import { useStores } from "stores/StoreContext";
import { Composer } from "./Composer";
import { Controls } from "./Controls";
import { observer } from "mobx-react";
export const AITextGeneratorContainer: React.FC = observer(() => {
  const { aiTextGenStore } = useStores();
  const smallScreen = useMediaQuery("(maxWidth:400px)");
  return (
    <Box
      display="flex"
      flex="1"
      width="100%"
      height="100%"
      flexDirection="column"
    >
      <Box>AI Text Generator</Box>
      <Box display="flex" flexDirection={smallScreen ? "column" : "row"}>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
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
          borderLeft="1px solid gray"
        >
          <Composer />
        </Box>
      </Box>
    </Box>
  );
});
