import { ReactNode } from "react";
import { HiddenMenuProps } from "../HiddenMenu/types";

export interface MenuLink {
  url: string;
  label: string;
  icon?: ReactNode;
}

export interface ExtendedMenuProps extends HiddenMenuProps {
  links: MenuLink[];
  onActiveMenuPointChange: (activeMenuPoint: string) => void;
}
