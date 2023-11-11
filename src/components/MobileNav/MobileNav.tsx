import { SetStateAction, Dispatch, useEffect, useRef } from "react";
import { ReactComponent as CloseIcon } from "../../assets/svg/icon-menu-close.svg";
import "./MobileNav.scss";

type MobileNavProps = {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function MobileNav({ isMenuOpen, setIsMenuOpen }: MobileNavProps) {
  const toggleMenu = () =>
    setIsMenuOpen((isOpen) => {
      if (isOpen) document.body.classList.remove("backdrop");
      return !isOpen;
    });
  const isMenuOpenRef = useRef<boolean | null>(null);

  const closeMenuOnBlur = (clickEvent: any) => {
    if (!isMenuOpenRef?.current) return;

    const clsToIgnore: string[] = ["mobile-aside", "header__mobile-menu-open"];
    const isEventContainerHasIgnoredCls: boolean = [...clickEvent?.target?.classList].some((cls) => clsToIgnore.includes(cls));

    if (!isEventContainerHasIgnoredCls && clickEvent?.target?.classList?.length !== 0) {
      return toggleMenu();
    }
  };
  useEffect(() => {
    window.addEventListener("click", closeMenuOnBlur);

    return () => window.removeEventListener("click", closeMenuOnBlur);
  }, []);

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen]);

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
