import { ReactNode } from "react";
import { HiddenMenuProps } from "../HiddenMenu/types";

export interface ExtendedMenuProps extends HiddenMenuProps {
  links: Array<{ url: string; label: string; icon?: ReactNode }>;
  onActiveMenuPointChange: (activeMenuPoint: string) => void;
}
