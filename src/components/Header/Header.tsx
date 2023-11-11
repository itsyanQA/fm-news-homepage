import "./Header.scss";
import { ReactComponent as NewsLogo } from "../../assets/svg/logo.svg";
import { ReactComponent as MenuIcon } from "../../assets/svg/icon-menu.svg";
import { useState } from "react";
import MobileNav from "../MobileNav/MobileNav";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="header">
      <NewsLogo />
      <nav className="header__nav">
        <a href="javascript:void(0);">Home</a>
        <a href="javascript:void(0);">New</a>
        <a href="javascript:void(0);">Popular</a>
        <a href="javascript:void(0);">Trending</a>
        <a href="javascript:void(0);">Categories</a>
      </nav>
      <MenuIcon
        className="header__mobile-menu-open"
        onClick={() => {
          document.body.classList.add("backdrop");

          setIsMenuOpen((isOpen) => !isOpen);
        }}
      />
      <MobileNav isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </header>
  );
}
