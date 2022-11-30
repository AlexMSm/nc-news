import { useState, useContext } from "react";
import { ArticleSOContext } from "../../Context/ArticleSOContext";
import { UserContext } from "../../Context/UserContext";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import styled from "styled-components";

export default function SortButtons(props) {
  const [openSort, setOpenSort] = useState(false);
  const [openOrder, setOpenOrder] = useState(false);
  const [navState, setNavState] = useState(false);

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
    <div className="sort-bar">
      <div className="toggle-text">
        <div className="sort-toggle">
          {navState ? (
            <BsToggleOn onClick={() => setNavState(false)} />
          ) : (
            <BsToggleOff onClick={() => setNavState(true)} />
          )}
        </div>
        <div className={`sort-text-${navState}`}>Sort options</div>
      </div>
      <div className={`sort-options-${navState}`}>
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
          <div className="sort-div">
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
            className="sort-button"
            onClick={() => {
              setSort("Sort");
              setOrder("Order");
              setOpenSort(false);
              setOpenOrder(false);
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
