const Suggests = () => {
  return (
    <section className="pagecrm_suggest_section">
      <h3>КОМУ ПОЛЕЗНА CRM</h3>

      <div className="pagecrm_suggest_section_container">
        <div className="pagecrm_suggest_section_list_container">
          <div className="pagecrm_suggest_section_list_item">
            <img src="/images/checkbox.webp" alt="checkbox img" />
            <span>Любому бизнесу, работающему с клиентской базой</span>
          </div>

          <div className="pagecrm_suggest_section_list_item">
            <img src="/images/checkbox.webp" alt="checkbox img" />
            <span>Бизнесу, управляющему ассортиментом</span>
          </div>

          <div className="pagecrm_suggest_section_list_item">
            <img src="/images/checkbox.webp" alt="checkbox img" />
            <span>
              Бизнесу, где есть задачи, планирование, отчетность и KPI
            </span>
          </div>
        </div>

        <img
          src="/images/illustration.webp"
          alt="illustration img"
          className="pagecrm_suggest_section_illustrator"
        />
      </div>
    </section>
  );
};

export default Suggests;
