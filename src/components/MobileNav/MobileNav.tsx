import { SetStateAction, Dispatch, useEffect } from "react";
import { ReactComponent as CloseIcon } from "../../assets/svg/icon-menu-close.svg";
import "./MobileNav.scss";

type MobileNavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNav({ isMenuOpen, setIsMenuOpen }: MobileNavProps) {
  const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

  // const closeMenuOnBlur = (clickEvent: any) => {
  //   console.log(clickEvent?.target?.classList);
  //   console.log([...clickEvent?.target?.classList]);

  //   if (![...clickEvent?.target?.classList]?.includes("mobile-aside--is-open")) {
  //     return toggleMenu();
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("click", closeMenuOnBlur);

  //   return () => window.removeEventListener("click", closeMenuOnBlur);
  // }, []);

  return (
    <aside className={`mobile-aside ${isMenuOpen ? "mobile-aside--is-open" : "mobile-aside--is-hidden"}`}>
      <CloseIcon className="mobile-aside__close-btn" onClick={toggleMenu} />
      <nav className="mobile-aside__nav">
        <a href="javascript:void(0);">Home</a>
        <a href="javascript:void(0);">New</a>
        <a href="javascript:void(0);">Popular</a>
        <a href="javascript:void(0);">Trending</a>
        <a href="javascript:void(0);">Categories</a>
      </nav>
    </aside>
  );
}
