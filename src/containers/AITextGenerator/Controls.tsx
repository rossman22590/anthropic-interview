import { Button, Box } from "@mui/material";
import { useTextGeneratorHandlers } from "./TextGeneratorHandlers";

export const Controls: React.FC = () => {
  const { generateText } = useTextGeneratorHandlers();
  return (
    <Box display="flex" justifyContent="center">
      <Button onClick={generateText}>Generate Text!</Button>
    </Box>
  );
};
