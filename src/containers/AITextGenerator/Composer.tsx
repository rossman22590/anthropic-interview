import { Input, Box } from "@mui/material";
import { useTextGeneratorHandlers } from "./TextGeneratorHandlers";
import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { useStores } from "stores/StoreContext";

interface ComposerProps {}
export const Composer: React.FC<ComposerProps> = observer(() => {
  const { resetComposer } = useTextGeneratorHandlers();
  const [showResult, setShowResult] = useState(false);
  const { aiTextGenStore } = useStores();
  const aiText = aiTextGenStore.aiText;
  const userText = aiTextGenStore.userText;
  useEffect(() => {
    if (aiText.length) {
      setShowResult(true);
    }
  }, [aiText]);

  const onClickResult = () => {
    setShowResult(false);
    resetComposer();
  };
  return (
    <Box flex="1" display="flex">
      {(!showResult && (
        <Box
          id="composerEditor"
          border="1px solid blue"
          flex="1"
          margin="10px"
          contentEditable
        />
      )) || (
        <Box onClick={onClickResult}>
          <span>
            {userText}
            <span style={{ background: "lightgreen" }}>{aiText}</span>
          </span>
        </Box>
      )}
      {/* <Input value={text} onChange={(e) => editText(e.target.value)} /> */}
    </Box>
  );
});
