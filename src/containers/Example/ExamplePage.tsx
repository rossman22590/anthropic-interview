import { Box, useMediaQuery } from "@mui/material";
import { ExampleDisplay } from "./ExampleDisplay";
import { ExampleOptions } from "./ExampleOptions";
import { useState } from "react";
export const ExamplePage: React.FC = () => {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const smallScreen = useMediaQuery("(max-width:400px");
  const updateWidth = (width: number) => {
    setWidth(width);
  };
  const updateHeight = (height: number) => {
    setWidth(height);
  };
  return (
    <Box display="flex" flex="1" flexDirection="column">
      <Box borderBottom="1px solid gray" padding="5px">
        Box generator!
      </Box>
      <Box
        display="flex"
        flex="1"
        height="100%"
        width="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection={smallScreen ? "column" : "row"}
      >
        <Box padding="10px" width="250px">
          <ExampleOptions
            width={width}
            height={height}
            setWidth={setWidth}
            setHeight={setHeight}
          />
        </Box>
        <Box
          border="1px solid gray"
          flex="2"
          height="100%"
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ExampleDisplay width={width} height={height} />
        </Box>
      </Box>
    </Box>
  );
};
