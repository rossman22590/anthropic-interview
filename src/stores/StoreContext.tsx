import React, { ReactNode, createContext, useContext } from "react";
import { RootStore } from "./RootStore";

const rootStore = new RootStore();
const StoreContext = createContext<RootStore>(rootStore);

interface Props {
  children: ReactNode;
  store?: RootStore;
}

export const StoreProvider: React.FC<Props> = ({
  children,
  store = rootStore,
}) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;

export const useStores = (): RootStore => useContext(StoreContext);
