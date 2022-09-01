import {
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useTextGeneratorHandlers } from "./TextGeneratorHandlers";

export const Controls: React.FC = () => {
  const { generateText } = useTextGeneratorHandlers();
  return (
    <Box display="flex" justifyContent="center" flexDirection="column">
      <Accordion>
        <AccordionSummary>
          <Box display="flex" width="100%" justifyContent="center">
            Controls
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {/* top p is number top k number temp int sample length ing stop sequence
          string - when ai generates this text stop generating text */}
          <Box display="flex" flexDirection="column">
            <Box display="flex" gap="10px" justifyContent="space-between">
              Top P <Box width="30px" contentEditable border="1px solid blue" />
            </Box>
            <Box display="flex" gap="10px" justifyContent="space-between">
              Top K <Box width="30px" contentEditable border="1px solid blue" />
            </Box>
            <Box display="flex" gap="10px" justifyContent="space-between">
              Temp <Box width="30px" contentEditable border="1px solid blue" />
            </Box>
            <Box display="flex" gap="10px" justifyContent="space-between">
              Sample Length{" "}
              <Box width="30px" contentEditable border="1px solid blue" />
            </Box>
            <Box display="flex" gap="10px" justifyContent="space-between">
              Stop Sequence{" "}
              <Box width="30px" contentEditable border="1px solid blue" />
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
      <Button onClick={generateText}>Generate Text!</Button>
    </Box>
  );
};
