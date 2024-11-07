import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="pagecrm_footer">
      <div className="pagecrm_footer_overlay">
        <div className="pagecrm_footer_contacts_container">
          <div className="pagecrm_footer_contacts">
            <h4>Контакты</h4>
            <span>
              Some address here 8, к.2, офис 2222 Пн-Пт, 10:00 - 18:00
              00-00-00-00
              <Link href="mailto:info@alpham.pro">some@mail.pro</Link>
            </span>
            <div className="pagecrm_footer_contacts_icons">
              <Link href="#">
                <img src="/images/vk.webp" alt="vk icon" />
              </Link>
              <Link href="#">
                <img src="/images/telegram.webp" alt="telegram icon" />
              </Link>
            </div>
          </div>

          <div className="pagecrm_footer_google_map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2026.6136803241097!2d30.321961954097663!3d59.907180734963475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTnCsDU0JzI2LjgiTiAzMMKwMTknMzAuMyJF!5e0!3m2!1sen!2s!4v1724008630613!5m2!1sen!2s"
              width="600"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="pagecrm_footer_social_container">
          <div className="pagecrm_footer_social_nav">
            <h4>Меню</h4>
            <span>Услуги</span>
            <span>Кейсы</span>
            <span>Ещё</span>
          </div>

          <Link href="/">
            {/* <img
              src="/images/logo.webp"
              alt="logo"
              className="pagecrm_footer_logo"
            /> */}
            <span className="text-white">Some logo</span>
          </Link>

          <div className="pagecrm_footer_socials">
            <div className="pagecrm_footer_socials_icons">
              <Link href="#">
                <img src="/images/vk.webp" alt="vk icon" />
              </Link>
              <Link href="#">
                <img src="/images/telegram.webp" alt="telegram icon" />
              </Link>
            </div>

            <p className="pagecrm_footer_socials_copyright">
              © 2024 Политика конфиденциальности
            </p>
          </div>
        </div>
      </div>

      <div className="pagecrm_footer_social_desktop_copyright">
        <span>© 2023 Альфа маркетинг</span>
        <span>Политика конфиденциальности</span>
      </div>
    </footer>
  );
};

export default Footer;
