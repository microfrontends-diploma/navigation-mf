import { useEffect, useLayoutEffect, useState } from "react";
import { useEventEmitter } from "./EventEmitterContext";
import ExtendedMenu from "./components/ExtendedMenu";
import HiddenMenu from "./components/HiddenMenu";

// TODO: добавить возможность для рендера неактивных юрлов
export const Navbar = () => {
  const eventEmitter = useEventEmitter(); 

  const [links, setLinks] = useState<string[]>([]);
  const [menuExtended, setMenuExtended] = useState<boolean>(false);
  // FIXME: надо создать специальный тип
  const [activeMenuPoint, setActiveMenuPoint] = useState<string | null>(window.location.pathname);

  const routesEvent = (args) => {
    setLinks(["/home", ...(args as string[]).map(route => `/${route}`)]);
  };

  useEffect(() => {
    if (eventEmitter) {
      eventEmitter.on("routes", routesEvent);
    }

    return () => {
      eventEmitter.off("routes", routesEvent);
    };
  }, [eventEmitter]);

  return menuExtended ? (
    <ExtendedMenu
      links={links.map((link) => ({ url: link, label: link }))}
      toggleMenu={setMenuExtended}
      activeMenuPoint={activeMenuPoint}
      onActiveMenuPointChange={setActiveMenuPoint}
    />
  ) : (
    <HiddenMenu
      toggleMenu={setMenuExtended}
      activeMenuPoint={activeMenuPoint}
    />
  );
};

export default Navbar;