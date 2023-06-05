import EventEmitter from "events";
import { createContext, useContext } from "react";
import { AppProps } from "single-spa";

type AppPropsProviderProps = {
  children: React.ReactNode;
  props: AppProps & { eventEmitter: EventEmitter };
};
const appPropsContext = createContext<(AppProps & { eventEmitter: EventEmitter }) | null>(null);
export const AppPropsProvider = ({ children, props }: AppPropsProviderProps) => (
  <appPropsContext.Provider value={props}>{children}</appPropsContext.Provider>
);

export const useAppProps = () => useContext(appPropsContext);
