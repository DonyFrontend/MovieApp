import logo from "@/shared/assets/icons/logo.svg";
import Burger_navigation from "../navigation/Burger_navigation";

const Header = () => {
  return (
    <header className="p-2 px-4 flex justify-between items-center">
      <img src={logo} alt="Logo" />
      <Burger_navigation />
    </header>
  );
};

export default Header;
