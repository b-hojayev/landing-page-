import { RefObject } from "react";

const ConnectForm = ({
  connectFormDropdown,
}: {
  connectFormDropdown: RefObject<HTMLDivElement>;
}) => {
  return (
    <section className="pagecrm_connect_form_section">
      <div className="pagecrm_connect_form_heading">
        <h3>Заявка на подбор и подключение CRM-системы</h3>
        <span>
          Проведем аудит, подготовим решение для вашего бизнеса и рассчитаем
          стоимость
        </span>
      </div>

      <div className="pagecrm_connect_form_container">
        <form className="pagecrm_connect_form_form">
          <div className="pagecrm_connect_form_heading_container">
            <h4>Заполните форму</h4>
            <span>
              Оставьте свои контактные данные, мы свяжемся с Вами в течение 20
              минут
            </span>
          </div>

          <div className="pagecrm_connect_form_inputs_container">
            <input
              type="text"
              className="pagecrm_connect_form_input"
              placeholder="Имя"
            />

            <input
              type="tel"
              className="pagecrm_connect_form_input"
              placeholder="Телефон"
            />

            <div className="pagecrm_connect_form_select_container">
              <div
                onClick={() => {
                  connectFormDropdown.current?.classList.toggle("show");
                }}
                id="connectFormSelect"
                className="pagecrm_connect_form_input pagecrm_select"
              >
                <span>Выберите услугу</span>
                <img
                  src="/images/down.webp"
                  alt="dropdown icon"
                  id="pagecrmSelectImg"
                />
              </div>

              <div
                ref={connectFormDropdown}
                id="connectFormDropdown"
                className="pagecrm_select_dropdown"
              >
                <span>Подключение</span>
                <span>Подключение + настройка</span>
                <span>Продление лицензий amoCRM или Битрикс24</span>
              </div>
            </div>

            <button className="pagecrm_connect_form_btn">
              ОСТАВИТЬ ЗАЯВКУ
            </button>
          </div>
        </form>

        <img
          src="/images/global.webp"
          alt="glob image"
          className="pagecrm_connect_form_img"
        />
      </div>
    </section>
  );
};

export default ConnectForm;
