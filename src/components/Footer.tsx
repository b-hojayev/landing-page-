import React from "react";

const Footer = () => {
  return (
    <footer className="pagecrm_footer">
      <div className="pagecrm_footer_overlay">
        <div className="pagecrm_footer_contacts_container">
          <div className="pagecrm_footer_contacts">
            <h4>Контакты</h4>
            <span>
              Санкт-Петербург Заозёрная 8, к.2, офис 202 Пн-Пт, 10:00 - 18:00 8
              (812) 409-52-22
              <a href="mailto:info@alpham.pro">info@alpham.pro</a>
            </span>
            <div className="pagecrm_footer_contacts_icons">
              <a href="https://vk.com/alpha_marketing_alpham_pro">
                <img src="/images/vk.webp" alt="vk icon" />
              </a>
              <a href="https://t.me/alpham_pro">
                <img src="/images/telegram.webp" alt="telegram icon" />
              </a>
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

          <a href="/">
            <img
              src="/images/logo.webp"
              alt="logo"
              className="pagecrm_footer_logo"
            />
          </a>

          <div className="pagecrm_footer_socials">
            <div className="pagecrm_footer_socials_icons">
              <a href="https://vk.com/alpha_marketing_alpham_pro">
                <img src="/images/vk.webp" alt="vk icon" />
              </a>
              <a href="https://t.me/alpham_pro">
                <img src="/images/telegram.webp" alt="telegram icon" />
              </a>
            </div>

            <p className="pagecrm_footer_socials_copyright">
              © 2024 Альфа маркетинг Политика конфиденциальности
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
