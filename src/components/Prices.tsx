import { RefObject } from "react";

const Prices = ({ priceModal }: { priceModal: RefObject<HTMLDivElement> }) => {
  return (
    <section className="pagecrm_prices_section">
      <h3>СТОИМОСТЬ ПОДКЛЮЧЕНИЯ</h3>

      <div className="pagecrm_prices_cards_container">
        <div className="pagecrm_prices_cards_top">
          <div className="pagecrm_prices_card">
            <div className="pagecrm_prices_card_top_container">
              <div className="pagecrm_prices_card_top">
                <span>Подключение системы CRM</span>
                <span>от 10 000 ₽</span>
              </div>

              <div className="pagecrm_prices_card_center">
                <div className="pagecrm_prices_card_center_item">
                  <div className="pagecrm_prices_card_center_check_container">
                    <img src="/images/check.webp" alt="check icon" />
                  </div>
                  <span>Покупка любого тарифа со скидкой</span>
                </div>
              </div>
            </div>

            <button
              id="priceModalOpenBtn1"
              onClick={() => {
                priceModal.current?.classList.add("pagecrm_price_modal_show");
                document.body.classList.add("search_true");
              }}
            >
              ЗАКАЗАТЬ <img src="/images/arrow.webp" alt="arrow" />
            </button>
          </div>

          <div className="pagecrm_prices_card">
            <div className="pagecrm_prices_card_top_container">
              <div className="pagecrm_prices_card_top">
                <span>Подключение системы CRM + настройка</span>
                <span>от 15 000 ₽</span>
              </div>

              <div className="pagecrm_prices_card_center">
                <div className="pagecrm_prices_card_center_item">
                  <div className="pagecrm_prices_card_center_check_container">
                    <img src="/images/check.webp" alt="check icon" />
                  </div>
                  <span>Покупка любого тарифа со скидкой</span>
                </div>

                <div className="pagecrm_prices_card_center_item">
                  <div className="pagecrm_prices_card_center_check_container">
                    <img src="/images/check.webp" alt="check icon" />
                  </div>
                  <span>Индивидуальная настройка системы</span>
                </div>
              </div>
            </div>

            <button
              id="priceModalOpenBtn2"
              onClick={() => {
                priceModal.current?.classList.add("pagecrm_price_modal_show");
                document.body.classList.add("search_true");
              }}
            >
              ЗАКАЗАТЬ <img src="/images/arrow.webp" alt="arrow" />
            </button>
          </div>
        </div>

        <div className="pagecrm_prices_cards_bottom">
          <div className="pagecrm_prices_card">
            <div className="pagecrm_prices_card_top_container">
              <div className="pagecrm_prices_card_top">
                <span>Продление лицензий amoCRM и Битрикс24</span>
                <span>от 10 000 ₽</span>
              </div>

              <div className="pagecrm_prices_card_center">
                <div className="pagecrm_prices_card_center_item">
                  <div className="pagecrm_prices_card_center_check_container">
                    <img src="/images/check.webp" alt="check icon" />
                  </div>
                  <span>
                    Возможность продления лицензий со скидкой от официальных цен
                  </span>
                </div>
              </div>
            </div>

            <button
              id="priceModalOpenBtn"
              onClick={() => {
                priceModal.current?.classList.add("pagecrm_price_modal_show");
                document.body.classList.add("search_true");
              }}
            >
              ЗАКАЗАТЬ <img src="/images/arrow.webp" alt="arrow" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prices;
