import {
  Box,
  Slider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
interface ExampleOptionsProps {
  width: number;
  height: number;
  setWidth: (w: number) => void;
  setHeight: (h: number) => void;
}
export const ExampleOptions: React.FC<ExampleOptionsProps> = ({
  width,
  height,
  setWidth,
  setHeight,
}) => {
  let min = 5;
  let max = 200;
  return (
    <Accordion>
      <AccordionSummary>Options</AccordionSummary>
      <AccordionDetails>
        <Box display="flex" flexDirection="column" flex="1" margin="20px">
          <Slider
            min={min}
            max={max}
            value={width}
            onChange={(e, value: number | number[]) =>
              setWidth(value as number)
            }
          />
          <Slider
            min={min}
            max={max}
            value={height}
            onChange={(e, value: number | number[]) =>
              setHeight(value as number)
            }
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
