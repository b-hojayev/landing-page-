import { RefObject } from "react";

const SearchModal = ({
  searchModal,
}: {
  searchModal: RefObject<HTMLDivElement>;
}) => {
  return (
    <div className="search_modal" id="searchModal" ref={searchModal}>
      <div className="search_modal_layout"></div>
      <div className="search_modal_content">
        <div className="search_modal_input_container">
          <img src="/images/search.webp" alt="search icon" />
          <input type="text" />
          <button>Искать</button>
        </div>
        <button
          onClick={() => {
            searchModal.current?.classList.remove("show_search");
            document.body.classList.remove("search_true");
          }}
          id="search_close"
          type="button"
          className="search_modal_close"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
