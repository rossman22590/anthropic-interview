import { Box, Button } from "@mui/material";
import { useStores } from "stores/StoreContext";
import { TestComponent } from "./TestComponent";
import { useTestHandlers } from "./TestHandlers";
import { observer } from "mobx-react";
import useMediaQuery from "@mui/material/useMediaQuery";

export const TestPage: React.FC = observer(() => {
  const { showComponent } = useTestHandlers();
  const { exampleStore } = useStores();
  const phoneSize = useMediaQuery("(max-width:400px)");

  const handleShowComponent = () => {
    showComponent();
  };
  return (
    <Box
      display="flex"
      flex="1"
      alignItems="center"
      justifyContent="center"
      flexDirection={phoneSize ? "column" : "row"}
      gap="10px"
    >
      <Box>I'm a test page. click to see a component.</Box>
      <Button variant="contained" onClick={handleShowComponent}>
        ClickMe!
      </Button>
      {exampleStore.showExampleComponent && <TestComponent />}
    </Box>
  );
});
