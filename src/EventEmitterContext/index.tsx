import EventEmitter from "events";
import { createContext, useContext } from "react";

type EventEmitterProviderProps = {
  children: React.ReactNode;
  evEmitter: EventEmitter;
};
const eventEmitterContext = createContext<EventEmitter>(null);
export const EventEmitterProvider = ({
  children,
  evEmitter,
}: EventEmitterProviderProps) => (
  <eventEmitterContext.Provider value={evEmitter}>
    {children}
  </eventEmitterContext.Provider>
);

export const useEventEmitter = () => useContext(eventEmitterContext);
