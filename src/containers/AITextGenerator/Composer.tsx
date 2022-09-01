import { Box } from "@mui/material";
import { useTextGeneratorHandlers } from "./TextGeneratorHandlers";
import { observer } from "mobx-react";
import { useStores } from "stores/StoreContext";
import { useEffect, useRef } from "react";

export const Composer: React.FC = observer(() => {
  const { resetComposer } = useTextGeneratorHandlers();
  const { aiTextGenStore } = useStores();
  const composerRef = useRef<HTMLElement>(null);
  const aiText = aiTextGenStore.aiText;
  const userText = aiTextGenStore.userText;
  const onClickResult = () => {
    resetComposer();
  };
  useEffect(() => {
    composerRef?.current?.focus();
  }, [aiText]);
  return (
    <Box flex="1" display="flex">
      {(!aiText.length && (
        <Box
          id="composerEditor"
          border="1px solid blue"
          flex="1"
          margin="10px"
          ref={composerRef}
          contentEditable={!aiText.length}
          dangerouslySetInnerHTML={{
            __html: userText,
          }}
        />
      )) || (
        <Box
          border="1px solid blue"
          flex="1"
          margin="10px"
          onClick={onClickResult}
          dangerouslySetInnerHTML={{
            __html:
              userText +
              `<span style= 'background:lightgreen'>${aiText}</span>`,
          }}
        />
      )}
    </Box>
  );
});
