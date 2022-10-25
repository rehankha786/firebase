import { db } from "../../config/Firebase";
import { ADD_BOOKS, DELETE_BOOKS, GET_BOOKS, UPDATE_BOOKS } from "./actionType";

export const getBook = (setIsloading) => async (dispatch) => {
  setIsloading(true);
  try {
    let res = await db.collection("books").get();
    let books = [];
    res.forEach((doc) => {
      books.push({
        docID: doc.id,
        ...doc.data(),
      });
    });

    dispatch({
      type: GET_BOOKS,
      payload: books,
    });
  } catch (err) {
    alert("This is error");
  } finally {
    setIsloading(false);
  }
};
export const addBook = (data, setIsloading) => async (dispatch) => {
  try {
    setIsloading(true);
    await db.collection("books").add(data);

    dispatch({
      type: ADD_BOOKS,
      payload: data,
    });
  } catch (err) {
    alert("This is error");
  } finally {
    setIsloading(false);
  }
};
export const deletebook = (docID, setIsloading) => async (dispatch) => {
  try {
    setIsloading(true);
    await db.collection("books").doc(docID).delete();

    dispatch({
      type: DELETE_BOOKS,
      payload: docID,
    });
  } catch (err) {
    alert("This is error");
  } finally {
    setIsloading(false);
  }
};
export const updateBook =
  (docID, data, navigate, setIsloading) => async (dispatch) => {
    debugger;

    // const { editbookname, editauthername, edityear, editprice } = items;
    // let updateobj = {
    //   docID: docID,
    //   bookname: editbookname,
    //   authername: editauthername,
    //   year: edityear,
    //   price: editprice,
    // };
    navigate("/form");
    try {
      await db.collection("books").doc(docID).update(data);
      console.log("data add into fireStore");
      dispatch({
        type: UPDATE_BOOKS,
        payload: { docID, data },
      });
    } catch (err) {
      alert("This is error");
    }
  };
