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
        <a href="/">
          <img src="/images/logo.webp" alt="logo" />
        </a>

        <div className="pagecrm_header_desktop_links">
          <a href="/">услуги</a>
          <a href="/">кейсы</a>
          <a href="/">ЕЩЁ</a>
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
        <a href="/">Главная</a>
        <img src="/images/next.webp" alt="next icon" />
        <a href="/">Услуги Альфа маркетинг</a>
        <img src="/images/next.webp" alt="next icon" />
        <a href="/">CRM</a>
      </div>
    </header>
  );
};

export default Header;
