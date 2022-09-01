import { transaction } from "mobx";
import { useServices } from "services/UseServices";
import { useStores } from "stores/StoreContext";

export const useTextGeneratorHandlers = () => {
  const { getAIText } = useServices();
  const { aiTextGenStore } = useStores();
  const generateText = () => {
    transaction(async () => {
      let content: string = "";
      if (aiTextGenStore.aiText.length) {
        content = aiTextGenStore.userText + aiTextGenStore.aiText;
        resetComposer();
      } else {
        const composerEditor = document.getElementById("composerEditor");
        if (composerEditor) {
          content = composerEditor.innerHTML;
        }
      }

      aiTextGenStore.set("userText", content);
      const result = getAIText(content || "");
      aiTextGenStore.set("aiText", result);
    });
  };

  const resetComposer = () => {
    transaction(() => {
      aiTextGenStore.set(
        "userText",
        aiTextGenStore.userText + aiTextGenStore.aiText
      );
      aiTextGenStore.set("aiText", "");
      const composerEditor = document.getElementById("composerEditor");
      if (composerEditor) {
        composerEditor.textContent =
          aiTextGenStore.userText + aiTextGenStore.aiText;
        composerEditor.focus();
      }
    });
  };
  const editText = (text: string) => aiTextGenStore.set("userText", text);
  return { generateText, resetComposer, editText };
};
