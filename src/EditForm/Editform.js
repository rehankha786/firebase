import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { updateBook } from "../store/action/BookAction";
const Editform = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { docID, bookname, authername, year, price } = location.state.item;
  const [items, setItem] = useState({
    editbookname: bookname,
    editauthername: authername,
    edityear: year,
    editprice: price,
  });

  const onchangeHandle = (e) => {
    setItem({ ...items, [e.target.name]: e.target.value });
  };
  const { editbookname, editauthername, edityear, editprice } = items;
  let data = {
    docID: docID,
    bookname: editbookname,
    authername: editauthername,
    year: edityear,
    price: editprice,
  };
  const updatehandler = (docID) => {
    debugger;
    dispatch(updateBook(data, docID, navigate));
  };
  return (
    <div className="container form-page ">
      <h1>Update value</h1>
      <form>
        <label>
          <b>BOOK NAME :</b>
        </label>
        <br />
        <input
          type="text"
          name="editbookname"
          placeholder="Enter Book Name"
          className="form-input"
          id="editbookname"
          autoComplete="off"
          value={editbookname}
          onChange={onchangeHandle}
        />
        <br />
        <label>
          <b>AUTHER NAME :</b>
        </label>
        <br />
        <input
          type="text"
          id="editauthername"
          name="editauthername"
          placeholder="Enter Auther Name"
          className="form-input"
          autoComplete="off"
          value={editauthername}
          onChange={onchangeHandle}
        />
        <br />
        <label>
          <b>PUBLISHED YEAR :</b>
        </label>
        <br />
        <input
          type="text"
          name="edityear"
          id="edityear"
          placeholder="Enter Published year"
          className="form-input"
          autoComplete="off"
          value={edityear}
          onChange={onchangeHandle}
        />
        <br />
        <label>
          <b>PRICE :</b>
        </label>
        <br />
        <input
          type="text"
          id="editprice"
          name="editprice"
          placeholder="Enter price here"
          className="form-input"
          autoComplete="off"
          value={editprice}
          onChange={onchangeHandle}
        />
      </form>
      <div className="btn-click">
        <button className="btn btn-info" onClick={() => updatehandler(docID)}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Editform;
