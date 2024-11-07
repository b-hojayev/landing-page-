const Cases = () => {
  return (
    <section className="pagecrm_cases_section">
      <div className="pagecrm_cases_heading_container">
        <h3>CRM В БИЗНЕСЕ</h3>
        <span>Наши кейсы</span>
      </div>

      <div className="pagecrm_cases_list_container">
        <div className="pagecrm_cases_list_item">
          <img
            src="/images/forest-company-logo.webp"
            alt="forest-company-logo"
          />
          <div className="pagecrm_cases_list_item_info">
            <div className="pagecrm_cases_list_item_info_texts">
              <span>“Пестовский Лесокомбинат”</span>
              <span>Строительная компания</span>
              <span>Работают на платформе amoCRM</span>
            </div>

            <button>Подробнее</button>
          </div>
        </div>

        <div className="pagecrm_cases_list_item">
          <img src="/images/mongol-logo.webp" alt="mongol-logo" />
          <div className="pagecrm_cases_list_item_info">
            <div className="pagecrm_cases_list_item_info_texts">
              <span>Магазин “Mongol Store”</span>
              <span>Одежда из натуральной шерсти</span>
              <span>Используют БитриксCRM</span>
            </div>

            <button>Подробнее</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;
