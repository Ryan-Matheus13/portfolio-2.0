import { FC } from "react";
import { HeaderProps } from "./types";

const Header: FC<HeaderProps> = ({ title = "Título padrão" }) => {
  return (
    <header role="banner" className="bg-gray-800 text-white p-4">
      <h1 className="text-xl font-bold">{title}</h1>
    </header>
  );
};

export default Header;
