import React from "react";

const Feedback = () => {
  return (
    <div className="pagecrm_wrapper">
      <section className="pagecrm_feedback_section">
        <div className="pagecrm_feedback_text_wrapper">
          <div className="pagecrm_feedback_text_container">
            <h3>Напишите нам!</h3>
            <span>
              Заполните заявку и Мы свяжемся с Вами в течение 15 минут
            </span>
            <span className="pagecrm_feedback_hide_text">
              Команда Alpha marketing
            </span>
          </div>
        </div>

        <form className="pagecrm_feedback_form">
          <input
            type="text"
            className="pagecrm_feedback_form_input"
            placeholder="Имя*"
          />
          <input
            type="email"
            className="pagecrm_feedback_form_input"
            placeholder="Имя*"
          />
          <input
            type="tel"
            className="pagecrm_feedback_form_input"
            placeholder="Имя*"
          />
          <textarea
            placeholder="Задать вопрос"
            className="pagecrm_feedback_form_input pagecrm_feecback_form_textarea"
          ></textarea>

          <button>задать вопрос</button>
        </form>
      </section>
    </div>
  );
};

export default Feedback;
