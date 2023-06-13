import { useEffect, useState } from "react";
import { ExtendedMenu, HiddenMenu } from "./components";
import { useAppProps } from "./context";

export const Navbar = () => {
  const { name, eventEmitter } = useAppProps();

  const [links, setLinks] = useState<string[]>([]);
  const [menuExtended, setMenuExtended] = useState<boolean>(false);
  const [activeMenuPoint, setActiveMenuPoint] = useState<string | null>(window.location.pathname);

  const routesEvent = (args) => {
    // TODO: перенести все маршруты в root-config
    setLinks(["/home", ...(args as string[]).map((route) => `/${route}`), "/settings"]);
  };

  useEffect(() => {
    if (eventEmitter) {
      eventEmitter.on(name, routesEvent);
    }

    return () => {
      eventEmitter.off(name, routesEvent);
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
    <HiddenMenu toggleMenu={setMenuExtended} activeMenuPoint={activeMenuPoint} />
  );
};

export default Navbar;
