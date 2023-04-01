import { Link } from "@reach/router";
import { useEffect, useState } from "react";
import { useEventEmitter } from "./EventEmitterContext";

// TODO: добавить возможность для рендера неактивных юрлов
export const Navbar = () => {
  const eventEmitter = useEventEmitter();
  const [links, setLinks] = useState<string[]>([]);

  const routesEvent = (args) => {
    setLinks(args as string[]);
  }

  useEffect(() => {
    if (eventEmitter) {
      eventEmitter.on("routes", routesEvent);
    }

    return () => {
      eventEmitter.off("routes", routesEvent)
    };
  }, [eventEmitter]);

  return (
    <section>
      {links.map((link, index) => (
        <div key={index}>
          <Link to={link}>{link}</Link>
        </div>
      ))}
      <div>
        <Link to='/'>Home</Link>
      </div>
    </section>
  );
}

export default Navbar;
