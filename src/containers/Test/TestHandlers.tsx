import { useStores } from "stores/StoreContext";

export const useTestHandlers = () => {
  const { exampleStore } = useStores();
  const showComponent = () => {
    exampleStore.set(
      "showExampleComponent",
      !exampleStore.showExampleComponent
    );
  };
  return { showComponent };
};
