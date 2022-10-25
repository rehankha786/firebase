import {
  ADD_BOOKS,
  DELETE_BOOKS,
  GET_BOOKS,
  UPDATE_BOOKS,
} from "../action/actionType";

let initialtate = {
  books: [],
};
const bookreducer = (state = initialtate, action) => {
  debugger;
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        books: action.payload,
      };
    case ADD_BOOKS:
      return {
        books: [...state.books, action.payload],
      };
    case DELETE_BOOKS:
      let deleteitem = state.books.filter(
        (item) => item.docID !== action.payload
      );
      return {
        books: deleteitem,
      };
    case UPDATE_BOOKS:
      let obj = action.payload;
      let updateitem = state.books.map((item) => {
        if (obj.docID === item.docID) {
          debugger;
          return obj.data;
        } else {
          return item;
        }
      });

      return {
        ...state,
        books: updateitem,
      };
    default:
      return state;
  }
};
export default bookreducer;
