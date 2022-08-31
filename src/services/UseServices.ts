export const useServices = () => {
  const getAIText = (userText: string) => {
    //do something with usertext and any other params
    return " this is what I would say to that if I were a human";
  };
  return { getAIText };
};
