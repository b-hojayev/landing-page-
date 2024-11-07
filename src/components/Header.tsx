import Link from "next/link";
import { RefObject } from "react";

const Header = ({
  desktopNav,
  searchModal,
  mobileMenu,
  mobileMenuOverlay,
}: {
  desktopNav: RefObject<HTMLDivElement>;
  searchModal: RefObject<HTMLDivElement>;
  mobileMenu: RefObject<HTMLDivElement>;
  mobileMenuOverlay: RefObject<HTMLDivElement>;
}) => {
  return (
    <header className="pagecrm_header">
      <div className="pagecrm_header_mobile">
        <div className="pagecrm_header_top">
          <img src="/images/logo.webp" alt="logo" />
          <span>8 812 409-52-22</span>
        </div>

        <div className="pagecrm_header_center">
          <img
            onClick={() => {
              mobileMenu.current?.classList.add("show");
              mobileMenuOverlay.current?.classList.add("show");
            }}
            id="mobileMenuIcon"
            src="/images/menu.webp"
            alt="menu"
          />

          <div className="pagecrm_header_center_input_container">
            <img src="/images/search.webp" alt="search" />
            <input type="text" />
          </div>

          <div
            ref={mobileMenu}
            id="mobileMenu"
            className="pagecrm_mobile_menu"
          ></div>
          <div
            onClick={() => {
              mobileMenu.current?.classList.remove("show");
              mobileMenuOverlay.current?.classList.remove("show");
            }}
            ref={mobileMenuOverlay}
            id="mobileMenuOverlay"
            className="pagecrm_mobile_menu_overlay"
          ></div>
        </div>
      </div>

      <div id="dekstopNav" ref={desktopNav} className="pagecrm_header_desktop">
        <Link href="/">
          <img src="/images/logo.webp" alt="logo" />
        </Link>

        <div className="pagecrm_header_desktop_links">
          <Link href="/">услуги</Link>
          <Link href="/">кейсы</Link>
          <Link href="/">ЕЩЁ</Link>
          <img
            src="/images/search.webp"
            alt="search icon"
            id="searchBtnDesktop"
            onClick={() => {
              document.body.classList.add("search_true");
              searchModal.current?.classList.add("show_search");
            }}
          />
        </div>

        <div className="pagecrm_header_desktop_contact">
          <span>
            <img src="/images/phone.webp" alt="phone icon" />8 812 409-52-22
          </span>
          <button>
            задать вопрос
            <img src="/images/arrow.webp" alt="arrow img" />
          </button>
        </div>
      </div>

      <div className="pagecrm_header_links">
        <Link href="/">Главная</Link>
        <img src="/images/next.webp" alt="next icon" />
        <Link href="/">Услуги Альфа маркетинг</Link>
        <img src="/images/next.webp" alt="next icon" />
        <Link href="/">CRM</Link>
      </div>
    </header>
  );
};

export default Header;
