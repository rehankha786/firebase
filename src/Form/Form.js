import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getBook,
  addBook,
  deletebook,
  updateBook,
} from "../store/action/BookAction";
import "./Form.css";
const Form = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [value, setValue] = useState({
    bookname: "",
    authername: "",
    year: "",
    price: "",
  });
  const [dialog, setDialog] = useState(false);
  const [isLoading, setIsloading] = useState(false);
  const books = useSelector((state) => state.book);
  debugger;
  const { bookname, authername, year, price } = value;
  const onchangeHandle = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handelsubmit = (e) => {
    e.preventDefault();

    if (
      bookname.length === 0 ||
      authername.length === 0 ||
      year.length === 0 ||
      price.length === 0
    ) {
      setError(true);
    } else {
      dispatch(addBook(value, setIsloading));
      setValue({ bookname: "", authername: "", year: "", price: "" });
      setError(false);
    }
  };
  const deletehandler = (docID) => {
    dispatch(deletebook(docID, setIsloading), setDialog(false));
  };
  // const updatehandler = (docID) => {
  //   dispatch(updateBook(docID, setIsloading));
  // };
  useEffect(() => {
    dispatch(getBook(setIsloading));
  }, []);
  return (
    <>
      <div className="container form-page">
        <h1 className="form-heading">
          <b>Fill the form</b>
        </h1>
        <form method="POST">
          <label>
            <b>BOOK NAME :</b>
          </label>
          <br />

          <input
            type="text"
            name="bookname"
            placeholder="Enter Book Name"
            className="form-input"
            id="bookname"
            autoComplete="off"
            value={bookname}
            onChange={onchangeHandle}
            required
          />
          <br />
          {error && bookname.length <= 0 ? <p>please write bookname!</p> : ""}
          <label>
            <b>AUTHER NAME :</b>
          </label>
          <br />
          <input
            type="text"
            name="authername"
            id="authername"
            placeholder="Enter Auther Name"
            className="form-input"
            autoComplete="off"
            value={authername}
            onChange={onchangeHandle}
          />
          <br />
          {error && authername.length == "" ? (
            <p>please write authername!</p>
          ) : (
            ""
          )}
          <label>
            <b>PUBLISHED YEAR :</b>
          </label>
          <br />
          <input
            type="text"
            id="year"
            name="year"
            placeholder="Enter Published year"
            className="form-input"
            autoComplete="off"
            value={year}
            onChange={onchangeHandle}
          />
          <br />
          {error && year.length <= 0 ? <p>please write Published year!</p> : ""}
          <label>
            <b>PRICE PKR :</b>
          </label>
          <br />
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Enter price here"
            className="form-input"
            autoComplete="off"
            value={price}
            onChange={onchangeHandle}
          />
          {error && price.length <= 0 ? <p>please write price!</p> : ""}
          <div className="btn-click">
            <button id="click-btn" onClick={handelsubmit}>
              {isLoading ? "loading..." : "submit"}
            </button>
          </div>
        </form>
        <table className="table">
          {books?.books?.length <= 0 ? (
            ""
          ) : (
            <thead className="thead-dark">
              <tr>
                <th>BookName</th>
                <th>Authrename</th>
                <th>Year $</th>
                <th>Price</th>
                <th>delete</th>
                <th>Edit</th>
              </tr>
            </thead>
          )}
          {isLoading === true
            ? "loading...!!"
            : books?.books?.map((item) => {
                const { bookname, authername, year, price, docID } = item;
                return (
                  <tbody>
                    <tr>
                      <td>{bookname}</td>
                      <td>{authername}</td>
                      <td> {year}</td>
                      <td>{price}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          // onClick={() => deletehandler(docID)}
                          onClick={() => setDialog(true)}
                        >
                          {isLoading ? "loading..." : "Delete"}
                        </button>
                      </td>
                      <td>
                        <Link to="/edit" state={{ item }}>
                          <div className="btn btn-sm btn-success">Edit</div>
                        </Link>
                      </td>
                    </tr>

                    {dialog == true ? (
                      <div className="dialog">
                        <div className="confirmation-text">
                          Do you really want to delete this task?
                        </div>
                        <div className="button-dialog">
                          <button
                            className="btn btn-sm confirmation-button"
                            onClick={() => setDialog(false)}
                          >
                            Cancel
                          </button>

                          <button
                            className="btn btn-sm cancel-button "
                            onClick={() => deletehandler(docID)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    ) : (
                      false
                    )}
                  </tbody>
                );
              })}
        </table>
      </div>
    </>
  );
};

export default Form;
