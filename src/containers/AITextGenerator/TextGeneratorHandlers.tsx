import { Box } from "@mui/material";
import { useServices } from "services/UseServices";
import { useStores } from "stores/StoreContext";

export const useTextGeneratorHandlers = () => {
  const { getAIText } = useServices();
  const { aiTextGenStore } = useStores();
  const generateText = () => {
    const composerEditor = document.getElementById("composerEditor");
    if (composerEditor) {
      const content = composerEditor.innerHTML;
      aiTextGenStore.set("userText", content);
      const result = getAIText(content);
      aiTextGenStore.set("aiText", result);
    }
  };
  const editText = (newValue: string) => {
    // aiTextGenStore.set("text", newValue);
  };
  const resetComposer = () => {
    const composerEditor = document.getElementById("composerEditor");
    if (composerEditor) {
      aiTextGenStore.set(
        "userText",
        aiTextGenStore.userText + aiTextGenStore.aiText
      );
      composerEditor.innerHTML = aiTextGenStore.userText;
    }
  };
  return { generateText, editText, resetComposer };
};
