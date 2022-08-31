import { Box } from "@mui/material";

interface ExampleDisplayProps {
  width?: number;
  height?: number;
}
export const ExampleDisplay: React.FC<ExampleDisplayProps> = ({
  width = 10,
  height = 10,
}) => {
  return <Box bgcolor="red" width={width} height={height} />;
};
