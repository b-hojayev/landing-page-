import { RefObject } from "react";

const Form = ({
  selectDropdown,
}: {
  selectDropdown: RefObject<HTMLDivElement>;
}) => {
  return (
    <section className="pagecrm_form_section">
      <form className="pagecrm_form_section_form">
        <div className="pagecrm_form_section_form_title_container">
          <h3>Оставить заявку</h3>
          <span>
            Выберите систему для вашего бизнеса, и мы свяжемся с Вами в течение
            20 минут
          </span>
        </div>

        <input
          type="text"
          className="pagecrm_form_section_form_input"
          placeholder="ФИО"
        />

        <input
          type="tel"
          className="pagecrm_form_section_form_input"
          placeholder="Телефон"
        />

        <div className="pagecrm_form_section_select_container">
          <div
            onClick={() => {
              selectDropdown.current?.classList.toggle("show");
            }}
            id="select"
            className="pagecrm_form_section_form_input pagecrm_form_section_select"
          >
            <span>Выберите систему</span>
            <img src="/images/next.webp" alt="dropdown icon" />
          </div>

          <div
            ref={selectDropdown}
            id="selectDropdown"
            className="pagecrm_form_section_select_dropdown"
          >
            <span>amoCRM</span>
            <span>Битрикс24</span>
            <span>Нужна помощь в выборе</span>
          </div>
        </div>

        <textarea
          placeholder="Напишите что вас интересует,например: Покупка лицензии amoCRM"
          className="pagecrm_form_section_form_input pagecrm_form_section_form_textarea"
        ></textarea>

        <button className="pagecrm_form_section_btn">ОСТАВИТЬ ЗАЯВКУ</button>
      </form>
    </section>
  );
};

export default Form;
