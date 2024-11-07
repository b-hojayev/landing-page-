import { RefObject } from "react";

const PriceModal = ({
  priceModal,
  priceModalForm,
  successModal,
  successModalClose,
}: {
  priceModal: RefObject<HTMLDivElement>;
  priceModalForm: RefObject<HTMLFormElement>;
  successModal: RefObject<HTMLDivElement>;
  successModalClose: RefObject<HTMLImageElement>;
}) => {
  return (
    <div ref={priceModal} id="priceModal" className="pagecrm_prices_modal">
      <div
        onClick={() => {
          priceModal.current?.classList.remove("pagecrm_price_modal_show");
          document.body.classList.remove("search_true");
        }}
        id="priceModalOverlay"
        className="pagecrm_prices_modal_overlay"
      ></div>
      <form
        id="priceModalForm"
        ref={priceModalForm}
        className="pagecrm_prices_modal_content"
      >
        <h4>Форма для заполнения</h4>
        <span className="pagecrm_prices_modal_content_sub_header">
          Оставьте свои контактные данные, и мы свяжемся с Вами в течение 20
          минут
        </span>

        <input
          type="text"
          className="pagecrm_prices_modal_content_input"
          placeholder="Имя*"
        />

        <input
          type="text"
          className="pagecrm_prices_modal_content_input"
          placeholder="@Почта*"
        />

        <button
          onClick={() => {
            priceModalForm.current?.classList.add("pagecrm_price_modal_hidden");
            successModal.current?.classList.remove("success_modal_hidden");
          }}
          id="priceSubmitBtn"
          type="button"
        >
          ОТПРАВИТЬ ЗАЯВКУ
        </button>
        <div className="pagecrm_prices_modal_content_check_container">
          <input type="checkbox" />
          <span>
            Нажимая на кнопку, я соглашаюсь с условиями
            <a href=""> Политики конфиденциальности </a>
          </span>
        </div>
      </form>

      <div
        ref={successModal}
        id="successModal"
        className="pagecrm_success_modal success_modal_hidden"
      >
        <div className="pagecrm_success_modal_content">
          <div className="pagecrm_success_modal_check_container">
            <img src="/images/check-white.webp" alt="check icon" />
          </div>
          <span>Ваша заявка успешно отправлена!</span>
        </div>

        <img
          onClick={() => {
            priceModal.current?.classList.remove("pagecrm_price_modal_show");
            document.body.classList.remove("search_true");
          }}
          ref={successModalClose}
          id="successModalClose"
          src="/images/close.webp"
          alt="close icon"
          className="pagecrm_success_modal_check_container_close"
        />
      </div>
    </div>
  );
};

export default PriceModal;
