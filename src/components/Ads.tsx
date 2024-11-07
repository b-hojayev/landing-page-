const Ads = () => {
  return (
    <section className="pagecrm_ad_section">
      <h3>НАШ ПАРТНЁР ПО CRM-СИСТЕМАМ</h3>

      <div className="pagecrm_ad_container">
        <img src="/images/ad.webp" alt="ad img" className="pagecrm_ad_img" />

        <div className="pagecrm_ad_link_container">
          <div className="pagecrm_ad_link_item">
            <div className="pagecrm_ad_link_item_line"></div>
            <div className="pagecrm_ad_link_item_text_container">
              <span>Битрикс24 (Управление бизнесом)</span>
              <img
                src="/images/arrow-right.webp"
                alt="arrow-right"
                className="arrow-right"
              />
            </div>
          </div>

          <div className="pagecrm_ad_link_item">
            <div className="pagecrm_ad_link_item_line"></div>
            <div className="pagecrm_ad_link_item_text_container">
              <span>Битрикс24 (Управление бизнесом)</span>
              <img
                src="/images/arrow-right.webp"
                alt="arrow-right"
                className="arrow-right"
              />
            </div>
          </div>

          <div className="pagecrm_ad_link_item_line"></div>
        </div>
      </div>
    </section>
  );
};

export default Ads;
