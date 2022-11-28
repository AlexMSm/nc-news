import { useState, useContext } from "react";
import { ArticleSOContext } from "../../Context/ArticleSOContext";
import { UserContext } from "../../Context/UserContext";

export default function SortButtons(props) {
  const [openSort, setOpenSort] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);

  const { sort, setSort, order, setOrder } = useContext(ArticleSOContext);

  const handleOpenSort = () => {
    setOpenOrder(false);
    setOpenSort(!openSort);
  };
  const handleOpenOrder = () => {
    setOpenSort(false);
    setOpenOrder(!openOrder);
  };

  const handleSortSubmit = (event) => {
    handleOpenSort();
    setOpenSort(false);
    setSort(event);
  };
  const handleOrderSubmit = (event) => {
    handleOpenOrder();
    setOpenOrder(false);
    setOrder(event);
  };
  return (
    <div className="dropdown">
      <div className="sort-div">
        <button className="sort-button" onClick={handleOpenSort}>
          {sort}
        </button>
        {openSort ? (
          <div>
            <ul className="sort-by-menu">
              <li className="sort-option">
                <button
                  onClick={() => {
                    handleSortSubmit("created_at");
                  }}
                >
                  Date Posted
                </button>
              </li>
              <li className="sort-option">
                <button
                  onClick={() => {
                    handleSortSubmit("comment_count");
                  }}
                >
                  Comments
                </button>
              </li>
              <li className="sort-option">
                <button
                  onClick={() => {
                    handleSortSubmit("votes");
                  }}
                >
                  Votes
                </button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <div>
        <button className="sort-button" onClick={handleOpenOrder}>
          {order}
        </button>
        {openOrder ? (
          <div>
            <ul className="sort-by-menu">
              <li className="sort-option">
                <button
                  onClick={() => {
                    handleOrderSubmit("ASC");
                  }}
                >
                  Ascending
                </button>
              </li>
              <li className="sort-option">
                <button
                  onClick={() => {
                    handleOrderSubmit("DESC");
                  }}
                >
                  Descending
                </button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
      <button
        className="clear-button"
        onClick={() => {
          setSort("Sort");
          setOrder("Order");
        }}
      >
        Clear
      </button>
    </div>
  );
}
