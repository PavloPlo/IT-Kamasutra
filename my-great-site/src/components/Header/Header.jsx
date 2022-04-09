import AdsSmall from "../AdsSmall/AdsSmall";
import "./Header.css";
import HeaderItem from "./HeaderItem/HeaderItem";
import Logo from "./Logo/Logo";
const Header = () => {
  return (
    <header className="header-navmenu">
      <Logo />
      <HeaderItem />
      <HeaderItem />
      <HeaderItem />
      <HeaderItem />
      <AdsSmall />
    </header>
  );
}

export default Header;